const inquirer = require('inquirer'); 
const fs = require('fs'); 
const Engineer = require('./lib/engineer'); 
const Intern = require('./lib/intern'); 
const Manager = require('./lib/manager');
const { create } = require('domain');
const HTMLgenerator = require("./src/HTMLgenerator");

const teamArray = [];

console.log("Welcome to the Team Profile Generator!"); 

function createTeam () {
    inquirer.prompt([{
        type: 'list',
        message: "What type of employees would you like to add to your team?",
        name: 'addEmployee',
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then (function (userInput) {
        switch (userInput.addEmployee) {
            case "Engineer": 
            addEngineer(); 
            break;

            case "Intern": 
            addIntern(); 
            break; 

            case "Manager":
            addManager();
            break;

            default: 
            fileWriter();
        }
    })
}

function addManager () {
    return inquirer.prompt ([
    {
        type: 'input', 
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input', 
        message: 'What is your ID number?', 
        name: 'id',
    }, 
    {
        type: 'input',
        message: 'What is your email address?', 
        name: 'email', 
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if(valid) {
                return true;
            } else {
                console.log("Please enter a valid email address."); 
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: "Please enter the manager's office number", 
        name: 'officeNumber'
    }
])
.then(managerInput => {
    const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.officeNumber);
    teamArray.push(manager); 
    createTeam(); 
})}; 

function addIntern() {
    inquirer.prompt([
        {
            type: 'input', 
            message: "What is the intern's name?",
            name: 'name',
        },
        {
            type: 'input', 
            message: "What is the intern's id number?", 
            name: 'id',
        }, 
        {
            type: 'input',
            message: "What is the intern's email address?", 
            name: 'email', 
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log(` Please enter a valid email address.`); 
                    return false; 
                }
            }
        },
        {
            type: 'input',
            message: "What school does the intern attend?", 
            name: 'school'
        }
    ]).then(internInput => {
        const intern = new Intern (internInput.name, internInput.id, internInput.email, internInput.school);
        teamArray.push(intern);
        createTeam(); 
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input', 
            message: "What is the engineer's name?",
            name: 'name',
        },
        {
            type: 'input', 
            message: "What is the engineer's id number?", 
            name: 'id',
        }, 
        {
            type: 'input',
            message: "What is the engineer's email address?", 
            name: 'email', 
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email address."); 
                    return false; 
                }
            }
        },
        {
            type: 'input',
            message: "What's the engineer's github url?", 
            name: 'github'
        }
    ]).then(engineerInput => {
        const engineer = new Engineer (engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github);
        teamArray.push(engineer);
        createTeam(); 
    });
}

function fileWriter () {
    console.log("File Created")
    fs.writeFileSync('./dist/index.html', HTMLgenerator(teamArray))
}
// addManager(); 

createTeam();