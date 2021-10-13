const Employee = require("../lib/employee")

describe("Employee Class", () => {
    describe("Employee class creation", () => {
        it("should create an object with Employee array: name, id, and email", () => {
            const employeeTest = new Employee("andrew", 4444, 'andrewbum@gmail.com');

            
            expect(typeof(employeeTest.email)).toEqual("string")
            expect(typeof(employeeTest.id)).toEqual("number")
            expect(typeof (employeeTest.name)).toEqual("string")

        })

    });

    describe("employee prototype getName", () => {
        describe("getName prototype, should return name provided", () => {
            it("should create a object with a name of Andrew and when prototype is called should be equal to the string value of andrew", () => {
                const employeeTest = new Employee("andrew", 4444, 'andrewbum@gmail.com');
    
                expect(employeeTest.getName()).toEqual("andrew")
    
            })
        })
    });

    describe("employee prototype getId", () => {
        describe("getId prototype, should return id number provided", () => {
            it("should create a object with an id value of 4444 when getId prototype is called " , () => {
                const employeeTest = new Employee("andrew", 4444, 'andrewbum@gmail.com');
    
                expect(employeeTest.getId()).toEqual(4444)
    
            })
        })
    });

    describe("employee prototype getEmail", () => {
        describe("getEmail prototype, should return email provided", () => {
            it("should create a object with an email of Andrew and when prototype is called should be equal to the string value of andrewbum@gmail.com", () => {
                const employeeTest = new Employee("andrew", 4444, 'andrewbum@gmail.com');
    
                expect(employeeTest.getEmail()).toEqual("andrewbum@gmail.com")
    
    
            })
        })
    });



})

