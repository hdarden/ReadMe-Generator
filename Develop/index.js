var inquirer = require("inquirer")
var fs = require("fs")

const questions = [];
    
inquirer
    .prompt ([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the URL of your project?",
        name: "url"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "name"
    },
    {
        type: "input",
        message: "Give a brief description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["GPL", "MIT", "BSD 3", "APACHE 2.0", "None"]
    }

    ])

function writeToFile(fileName, data) {
}

function init() {

}

init();
