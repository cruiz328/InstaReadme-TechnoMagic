// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input


const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
  ];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {

    const parsedData = JSON.stringify(data);
    fs.writeFile(fileName, parsedData, (err) => {
        if (err) throw err;
        console.log('Readme Works you sexy sumofabish!');
    })
}


// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)
    .then(data => {
      fs.writeFile('README.md', generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
      );
      //appendFile


    });
    

    // writeToFile('README.md', questions);
}

// Function call to initialize app
init();
