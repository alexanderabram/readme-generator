const fs = require("fs");
const inquirer = require("inquirer");

const questions = [

    {
        name: 'title',
        type: 'input',
        message: 'What is the project Title?'
    }
    {
        name: 'description',
        type: 'input',
        message: 'Provide a description outlining your project'
    }
    {
        name: 'tableOfContents',
        type: 'input',
        message: "Outline the README table of contents here"
    }
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
