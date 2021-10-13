const Intern = require(`../lib/intern`)


describe(`intern Class`, () => {
    describe(`intern class creation`, () => {
        it(`should create an object with an array that has a value of school and a value of intern with type of = to string`, () => { 
        const internTest = new Intern(`andrew`, 444, `andrewbum@gmail.com`, `NCSTATE University`);

        expect(typeof(internTest.school)).toEqual("string")
        expect(typeof(internTest.getRole())).toEqual("string")
    })
    
})

describe(`Intern class creation with prototype getSchool()`, () => {
    it(`should create an object with an array that has a value of andrewbumNC when getGitHub() is called`, () => {
        const internTest = new Intern(`andrew`, 444, `andrewbum@gmail.com`, `NCSTATE University`)

        
        expect(internTest.getSchool()).toEqual('NCSTATE University')
       
    })
})

})
