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
      message: 'What is your project name?',
    },
    {
      type: 'list',
      message: 'What is your license?',
      name: 'license',
      choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
    },
    {
      type: 'input',
      message: 'Enter a brief description: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What are the usage instructions?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Do you have contribution instructions?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What tests need to be run?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter your GitHub ID:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email:',
      name: 'email',
    },
    
  ])
  .then((data) => { renderDoc1(data);
    
  });

  function renderDoc1(data){
    fs.writeFile('README.md',
`# ${data.name}
`
, (err) =>
err ? console.log(err) : renderDoc2(data)
);}
      
function renderDoc2(data){
if(data.license==='MIT'){
  fs.appendFile('README.md', 
`<img src="https://img.shields.io/badge/MIT-license-green">`
  , (err) =>
  err ? console.log(err) : renderDoc3(data)
);}
if(data.license==='GNU GPLv3'){
  fs.appendFile('README.md', 
`<img src="https://img.shields.io/badge/GNU%20GPLv3-license-blue">`
    , (err) =>
    err ? console.log(err) : renderDoc3(data)
);}
if(data.license==='Apache License 2.0'){
  fs.appendFile('README.md', 
`<img src="https://img.shields.io/badge/Apache%20License%202.0-license-red">`
    , (err) =>
    err ? console.log(err) : renderDoc3(data)
);}
if(data.license==='ISC'){
  fs.appendFile('README.md', 
`<img src="https://img.shields.io/badge/ISC-license-purple">`
    , (err) =>
    err ? console.log(err) : renderDoc3(data)
);}
}
    
function renderDoc3(data){
fs.appendFile('README.md', 
`
    
## DESCRIPTION
    
${data.description}
    
    
## TABLE OF CONTENTS
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
    
${data.install}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests 

${data.test}

## Questions

For further questions reach to me on [GitHub](https://github.com/${data.github})
or email: ${data.email}
`
  , (err) =>
  err ? console.log(err) : console.log('Success!')
  );
  }

