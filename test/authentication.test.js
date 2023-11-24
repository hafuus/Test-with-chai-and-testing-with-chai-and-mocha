const chai = require('chai');
const expect = chai.expect;

const registerUser = require('../authentication')


describe ('authentication Module', ()=> {
    
    describe ('registerUser()', ()=> {
        it ('should regist new user' ,()=> {
            const user = registerUser('testUser', 'password123')
            expect (user).to.deep.equal({username: 'testUser'})
            
        })

    })
})

// describe ('authentication Module', ()=> {
//     describe('registerUser()', () => {
//         it('should register a new user', () => {
//         const user = registerUser('testuser', 'password123');
//         expect(user).to.deep.equal({ username: 'testuser' });
//         });

// })
// })

