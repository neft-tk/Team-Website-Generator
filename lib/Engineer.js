// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub,) {
        super(name, id, email) 
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id); 
    }

    getEmail() {
        console.log(this.email);  
    }

    getRole() {
        console.log("Engineer");
    }
}

module.exports = Engineer 