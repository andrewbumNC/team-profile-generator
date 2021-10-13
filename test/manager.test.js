const Manager = require(`../lib/manager`)


describe(`manager class`, () => {
    describe(`manager class creation`, () => {
        it(`should create an object with an array that has a value of office number and getRole with typeOf values of string`, () => { 
        const managerTest = new Manager(`andrew`, 444, `andrewbum@gmail.com`, 112233);

        expect(typeof(managerTest.officeNumber)).toEqual("number")
        expect(typeof(managerTest.getRole())).toEqual("string")
    })
    
})

describe(`manager class creation with prototype getOfficeNumber()`, () => {
    it(`should create an object with an array that has a value of 112233 when getOfficeNumber() is called`, () => {
        const managerTest = new Manager(`andrew`, 444, `andrewbum@gmail.com`, 112233)

        
        expect(managerTest.getOfficeNumber()).toEqual(112233)
       
    })
})

})

