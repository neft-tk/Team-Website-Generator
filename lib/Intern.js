// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email) 

        this.school = school;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }

    getId() {
        console.log(this.id); 
        return this.id;
    }

    getEmail() {
        console.log(this.email);  
        return this.email;
    }

    getRole() {
        console.log("Intern");
        return "Intern";
    }

    getSchool() {
        console.log(this.school);
        return this.school;        
    }

}

module.exports = Intern 