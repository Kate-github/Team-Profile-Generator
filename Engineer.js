const { Employee } = require('./Employee');

 class Engineer extends Employee {
    github; // GitHub username

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}
module.exports.Engineer = Engineer;