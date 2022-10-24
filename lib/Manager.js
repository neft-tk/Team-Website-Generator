// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 

        this.officeNumber = officeNumber;
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
        console.log("Manager");
        return "Manager";
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }

}

module.exports = Manager 