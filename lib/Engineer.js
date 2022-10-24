// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email) 

        this.gitHub = gitHub;
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
        console.log(this.gitHub);
        return this.gitHub;
    }
}

module.exports = Engineer 