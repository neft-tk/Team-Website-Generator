const inquirer = require('inquirer');
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
        mainMenu()
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
        mainMenu()
    })
}

start();