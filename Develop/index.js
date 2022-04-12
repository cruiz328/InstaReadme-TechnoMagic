// TODO: Include packages needed for this application
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = ['title of my project', 'Description', ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 'title of my project', (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
    })
}

    // test
function writeToFile(fileName, data) {
    fs.writeFile(fileName, 'Description', (err) => {
        if (err) throw err;
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, 'Table of Contents', (err) => {
        if (err) throw err;
        console.log('Readme Works you sexy sumofabish!');
    })
}

            // ANOTHER TEST
            const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'faveReptile',
      message: 'What is your favorite reptile?'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.faveReptile);
  });
  // END OF TEST

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', questions);
}

// Function call to initialize app
init();
