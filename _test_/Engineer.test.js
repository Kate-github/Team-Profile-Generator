const {Engineer} = require('../Engineer');

describe('Engineer', () => {
    const egr = new Engineer('thao lam', 456, 'thao@email.com', 'kate-github');
    describe('constructor', () => {
        it('should return the name of the engineer', () => {
            expect(egr.name).toEqual('thao lam');
        });
        it('should return the id of the engineer', () => {
            expect(egr.id).toEqual(456);
        });
        it('should return the email of the engineer', () => {
            expect(egr.email).toEqual('thao@email.com');
        });
        
        it('should return the github user name of the engineer', () => {
            expect(egr.github).toEqual('kate-github');
        });
    });
    describe('getRole',()=>{
        it('should return the "Engineer" role', () => {
            expect(egr.getRole()).toEqual('Engineer')
        });
    });

});
