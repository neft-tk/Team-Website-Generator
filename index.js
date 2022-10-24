const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const teamArray = [];

function start() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Hello, please enter your team manager`s name.',
            name: 'teamManagerName',
        },
        {
            type: 'input',
            message: 'Hello, please enter your team manager`s employee id.',
            name: 'teamManagerId',
        },
        {
            type: 'input',
            message: 'Hello, please enter your team manager`s email address.',
            name: 'teamManagerEmail',
        },
        {
            type: 'input',
            message: 'Hello, please enter your team manager`s office number.',
            name: 'teamManagerOfficeNumber',
        },
    ]).then((response) => {
        const boss = new Manager(response.teamManagerName, response.teamManagerId, response.teamManagerEmail, response.teamManagerOfficeNumber);
        teamArray.push(boss);
        mainMenu();
    })
}

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Main Menu: what would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Submit and Finish Building My Team'],
            name: 'mainMenuOption'
        }
    ]).then((response) => {
        if (response.mainMenuOption === 'Add an Engineer') {
            addEngineer();
        } else if (response.mainMenuOption === 'Add an Intern') {
            addIntern();
        } else if (response.mainMenuOption === 'Submit and Finish Building My Team'){
            submitHTML();
        } else {
            console.log('uh oh');
        }        
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Engineer?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is their GitHub account name?',
            name: 'engineerGitHub',
        },
    ]).then((response) => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub)
        teamArray.push(newEngineer);
        mainMenu();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Intern?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is their id?',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What is the name of their school?',
            name: 'internSchool',
        },
    ]).then((response) => {
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        teamArray.push(newIntern);
        mainMenu();
    })
}

function checkMembers() {
    for (let i = 0; i < teamArray.length; i++) {
        const element = teamArray[i];
        if (element.getRole() === "Engineer") {
        return `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.name} ${element.role}</h5>
          <p class="card-text border">ID: ${element.id}</p>
          <p class="card-text border">Email: ${element.email}</p>
          <a href="https://github.com/${element.github}" target="_blank" class="btn btn-primary">${element.name}'s GitHub Page</a>
        </div>
        </div>`
        }   else if (element.getRole() === "Intern") {
            return `<div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name} ${element.role}</h5>
              <p class="card-text border">ID: ${element.id}</p>
              <p class="card-text border">Email: ${element.email}</p>
              <p class="card-text border">School: ${element.school}</p>
            </div>
            </div>`
        }   else if (element.getRole() === "Manager") {
            return `<div class="card m-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name} ${element.role}</h5>
              <p class="card-text border">ID: ${element.id}</p>
              <p class="card-text border">Email: ${element.email}</p>
              <p class="card-text border">Office Number: ${element.officeNumber}</p>
            </div>
            </div>`
        }         
    }
}

function submitHTML() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Are you sure you are ready to submit your team?',
            name: 'finalCheck',
        },
    ]).then((response) => {
        fs.writeFile('.index.html', `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <title>Team Profile Generator</title>
        </head>
        <body>
        ${checkMembers()}
            
        </body>
        </html>`)
    })

}

start();