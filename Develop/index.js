// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
// const questions = [];


inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    fs.writeFile('readme.md', `hey bitch ${data.name}! dont you know losers know ${data.stack}!`, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
// const generateDoc = (answers) =>
// `hey bitch ${answers.name}! dont you know losers know ${answers.stack}!`

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
