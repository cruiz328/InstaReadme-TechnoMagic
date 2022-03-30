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
        console.log('Readme Works you sexy sumofabish!');
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', questions);
}

// Function call to initialize app
init();
