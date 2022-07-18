const {Employee} = require('../Employee');

describe('Employee', () => {
    const emp = new Employee('thao lam', 456, 'thao@email.com');
    describe('constructor', () => {
        it('should return the name of the employee', () => {
            expect(emp.name).toEqual('thao lam');
        });
        it('should return the id of the employee', () => {
            expect(emp.id).toEqual(456);
        });
        it('should return the email of the employee', () => {
            expect(emp.email).toEqual('thao@email.com');
        });
    });
    describe('getRole',()=>{
        it('should return the "employee" role', () => {
            expect(emp.getRole()).toEqual('Employee')
        });
    });

});
