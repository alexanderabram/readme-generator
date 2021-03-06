const inquirer = require('inquirer'); 
var fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


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
        message: 'Provide the description about what people can add in your project'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Provide example how to run the code. For Example: How to run the script for mobile application'
    },
    {
        name: 'questions',
        type: 'input',
        message: 'Provide a good place to reachout for questions'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}


// function to initialize program
function init() {
    inquirer
    .prompt (questions)
.then ((data) => {
    writeToFile ("README.md", generateMarkdown({...data}))
}).catch((err)=>{
    console.log(err);
})
}

// function call to initialize program
init();
