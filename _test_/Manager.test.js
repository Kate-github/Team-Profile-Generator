const {Manager} = require('../Manager');

describe('Manager', () => {
    const mgr = new Manager('thao lam', 456, 'thao@email.com', 12345);
    describe('constructor', () => {
        it('should return the name of the manager', () => {
            expect(mgr.name).toEqual('thao lam');
        });
        it('should return the id of the manager', () => {
            expect(mgr.id).toEqual(456);
        });
        it('should return the email of the manager', () => {
            expect(mgr.email).toEqual('thao@email.com');
        });
        
        it('should return the office number of the manager', () => {
            expect(mgr.officeNumber).toEqual(12345);
        });
    });
    describe('getRole',()=>{
        it('should return the "Manager" role', () => {
            expect(mgr.getRole()).toEqual('Manager')
        });
    });

});
