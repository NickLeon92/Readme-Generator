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
    {
      type: 'list',
      message: 'What is your license?',
      name: 'license',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
    },
  ])
  .then((data) => {
    fs.writeFile('README.md', 
    `hey bitch ${data.name}! dont you know only losers know ${data.stack}!
    but hey nice license badge`
    , (err) =>
    err ? console.log(err) : console.log('Success!')
    );
    if(data.license==='MIT'){
    fs.appendFile('README.md', 
    `
    <img src="https://img.shields.io/badge/MIT-license-green">`
    , (err) =>
    err ? console.log(err) : console.log('Success!')
    );}
    if(data.license==='GNU GPLv3'){
      fs.appendFile('README.md', 
      `
      <img src="https://img.shields.io/badge/GNU%20GPLv3-license-blue">`
      , (err) =>
      err ? console.log(err) : console.log('Success!')
    );}
    if(data.license==='Apache License 2.0'){
      fs.appendFile('README.md', 
      `
      <img src="https://img.shields.io/badge/Apache%20License%202.0-license-red">`
      , (err) =>
      err ? console.log(err) : console.log('Success!')
    );}
    if(data.license==='ISC'){
      fs.appendFile('README.md', 
      `
      <img src="https://img.shields.io/badge/ISC-license-purple">`
      , (err) =>
      err ? console.log(err) : console.log('Success!')
    );}
    
    
  });
  

// TODO: Create a function to write README file
// const generateDoc = (answers) =>
// `hey bitch ${answers.name}! dont you know losers know ${answers.stack}!`

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
