const inquirer = require('inquirer');
const { Engineer } = require('./Engineer');
const { Intern } = require('./Intern');
const { Manager } = require('./Manager');
const fs = require('fs');
const employees = [];

const newEntryQuestion = {
    type: 'list',
    name: 'enterAnother',
    message: 'Do you want to add another employee?',
    choices: [
        'Add an engineer',
        'Add an intern',
        'I\'m done.',
    ],
};
const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the employee name.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the employee email.'
    }
];

const managerQuestions = employeeQuestions.concat([
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Please enter the office number.'
    },
    newEntryQuestion
]);

const internQuestions = employeeQuestions.concat([
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the school name.'
    },
    newEntryQuestion
]);

const engineerQuestions = employeeQuestions.concat([
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter the Github user name.'
    },
    newEntryQuestion
]);

function askManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        employees.push(createManager(answers));
        processAnswer(answers);
    });
}

function processAnswer(answers) {

    switch (answers.enterAnother) {
        case 'Add an engineer':
            askEngineer();
            break;
        case 'Add an intern':
            askIntern();
            break;
        default:
            writeFile(createHtml());
            break;

    }
}

function createCardHtml(employee) {
    let empDetail;
    let icon;
    switch (employee.getRole()) {
        case 'Manager':
            icon = '<i class="fa-solid fa-mug-hot"></i>';
            empDetail = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
            break;
        case 'Intern':
            icon = '<i class="fa-solid fa-graduation-cap"></i>';
            empDetail = `<li class="list-group-item">School: ${employee.school}</li>`;
            break;
        case 'Engineer':
            icon = '<i class="fa-solid fa-glasses"></i>';
            empDetail = `<li class="list-group-item">GitHub: ${employee.github}</li>`;
            break;
    }
    return `
    <div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${employee.name}</h2>
                <p class="card-text">${icon} ${employee.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                ${empDetail}
            </ul>
        </div>
    </div>
    `;
}
function createHtml() {
    let cards = [];
    for (let i = 0; i < employees.length; ++i) {
        cards.push(createCardHtml(employees[i]));
    }
    return `<!DOCTYPE html>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <header><h1>My Team</h1></header>
    
    <body>
        <div class="container">
            <div class="row">
            ${cards.join('')}
            </div>
        </div>
    </body>
    </html>`;
}

function askEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        employees.push(createEngineer(answers));
        processAnswer(answers);
    });
}
function askIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        employees.push(createIntern(answers));
        processAnswer(answers);
    });
}

function createIntern(answers) {
    return new Intern(answers.name, employees.length, answers.name, answers.school);

}
function createManager(answers) {
    return new Manager(answers.name, employees.length, answers.name, answers.officeNumber);

}
function createEngineer(answers) {
    return new Engineer(answers.name, employees.length, answers.name, answers.gitHub);

}

function writeFile(content) {

    fs.writeFile('dist/index.html', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

askManager();

