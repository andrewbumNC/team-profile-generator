const Engineer = require(`../lib/engineer`)


describe(`Engineer Class`, () => {
    describe(`engineer class creation`, () => {
        it(`should create an object with an array that has a value of github and a value of engineer`, () => { 
        const engineerTest = new Engineer(`andrew`, 444, `andrewbum@gmail.com`, `andrewbumNC`);

        expect(typeof(engineerTest.github)).toEqual("string")
        expect(typeof(engineerTest.getRole())).toEqual("string")
    })
    
})

})

describe(`Engineer class`, () => {   
describe(`engineer class creation with prototype getGitHub`, () => {
    it(`should create an object with an array that has a value of andrewbumNC when getGitHub() is called`, () => {
        const engineerTest = new Engineer(`andrew`, 444, `andrewbum@gmail.com`, `andrewbumNC`)

        
        expect(engineerTest.getGitHub()).toEqual('andrewbumNC')
       
    })
})
})
