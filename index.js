const fs = require("fs");
const inquirer = require("inquirer");

const questions = [

    {
        name: 'title',
        type: 'input',
        message: 'What is the project Title?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Provide a description outlining your project'
    },
    {
        name: 'tableOfContents',
        type: 'input',
        message: 'Outline the README table of contents here'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Provide installation instructions here'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How is your application used? Provide instructions here'
    },
    {
        name: 'license',
        type: 'input',
        message: 'Would you like to use a license? If yes, provide the license type. If no, type none'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Provide instructions for contributing here'
    },
    {
        name:
        type: 'input',
        message:
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
