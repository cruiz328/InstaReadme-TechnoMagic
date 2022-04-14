// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ['title of my project', 'Description', 'L' ];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, 'README.md', (err) => {
//         // throws an error, you could also catch it here
//         if (err) throw err;
    
//         // success case, the file was saved
//     })
// }

    // test
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, 'Description', (err) => {
//         if (err) throw err;
//     })
// }

function writeToFile(fileName, data) {

    const parsedData = JSON.stringify(data);
    fs.writeFile(fileName, parsedData, (err) => {
        if (err) throw err;
        console.log('Readme Works you sexy sumofabish!');
    })
}

            // ANOTHER TEST
//             const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       name: 'faveReptile',
//       message: 'What is your favorite reptile?'
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.faveReptile);
//   });
  // END OF TEST

// TODO: Create a function to initialize app
function init() {



    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis']
      }
    ])
    .then(data => {

        console.log(data)

        const name = `${data.name}`;
    

      const filename = `${data.name
        .toLowerCase()
        .split(' ')
        .join('')}.md`;
  
      fs.writeFile(filename, JSON.stringify(name, null, '\n'), err =>
        err ? console.log(err) : console.log('Success!')
      );
    });
    
    writeToFile('README.md', questions);
}

// Function call to initialize app
init();
