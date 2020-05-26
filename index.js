var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown")

const questions = [
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
        message: "What is your project's title?",
        name: "name"
    },
    {
        type: "input",
        message: "Give a brief description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["GPL", "MIT", "BSD 3", "APACHE 2.0", "None"]
    },
    {
        type: "input",
        message: "What command should be ran to install dependencies?",
        name: "dependencies",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "info"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }

    ];


//write markdown and call generate markdown
function writeToFile(filename, data) {
    //fs is used to create the readme and write the data from the questions inside the template
    fs.writeFile("readme.md", filename, data)
    generateMarkdown(data);

}

//initialize inquirer and call writeToFiles
 function init() {
     //inquirer runs and prompts questions
    inquirer
    .prompt(questions).then(function(data){
        var filename = data.questions.name
        writeToFile(filename, data);
    })
    

}
//calls initialize
init();
