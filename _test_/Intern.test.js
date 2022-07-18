const {Intern} = require('../intern');

describe('intern', () => {
    const int = new Intern('thao lam', 456, 'thao@email.com', 'ACC');
    describe('constructor', () => {
        it('should return the name of the intern', () => {
            expect(int.name).toEqual('thao lam');
        });
        it('should return the id of the intern', () => {
            expect(int.id).toEqual(456);
        });
        it('should return the email of the intern', () => {
            expect(int.email).toEqual('thao@email.com');
        });
        
        it('should return the school name of the intern', () => {
            expect(int.school).toEqual('ACC');
        });
    });
    describe('getRole',()=>{
        it('should return the "Intern" role', () => {
            expect(int.getRole()).toEqual('Intern')
        });
    });

});
