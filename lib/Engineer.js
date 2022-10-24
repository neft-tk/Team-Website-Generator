// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email) 

        this.github = github;
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
        console.log("Engineer");
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer 