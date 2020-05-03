// npm init ( to make a json file)
// npm i  (to make )
// npm install inquirer

// Putting together dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// const axios = require("axios"); // delete in you don't use the badge generator npm packages


// wrapping fs.writeFile in a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Using inquirer and prompting for questions
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your first name?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What is your Github Username?",
      name: "githubUsername"
    },
    {
      type: "input",
      message: "What is your Github email?",
      name: "githubEmail"
    },
    {
      type: "input",
      message: "What is the URL to your project?",
      name: "projectURL"
    },
    {
      type: "input",
      message: "What is your project name?",
      name: "projectName"
    },
    {
      type: "input",
      message:
        "Describe your project in a few sentences, including: The name of the project, inspiration, and use. ",
      name: "projectDescribe"
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
      type: "input",
      message: "What command should I run to install dependencies?",
      name: "dependencies",
      default: "npm i"
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
      default: "npm test"
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "repoUse"
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "repoContribute"
    },
    {
      type: "input",
      message:
        "What is the version of this application?",
      name: "version"
    }
  ])

  .then(data => {
    const {
      githubUsername,
      githubEmail,
      projectURL,
      projectName,
      projectDescribe,
      license,
      dependencies,
      tests,
      repoUse,
      repoContribute,
      version,
      firstName,
    } = data;
    const template = 
`

# ${data.projectName}
[![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)](${data.projectURL}))
[![GitHub Version](https://img.shields.io/badge/Contributing-${data.version}-yellow.svg)](${data.projectURL})
[![GitHub Tests](https://img.shields.io/badge/tests-${data.tests}-pink.svg)](${data.projectURL})
   
## Description
    
${data.projectDescribe}
    
## Table of Contents 
    
* [Installation](#installation)

* [Usage](#usage)
    
* [License](#License)
    
* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)

* [Version](#questions)
    
## Installation
    
To install necessary dependencies, run the following command:
    
    
${data.dependencies}
    
    
## Usage
    
${data.projectDescribe}
    
## License
    
This project is licensed under the ${data.license} license.
      
## Contributing
    
${data.repoContribute}
    
## Tests
    
To run tests, run the following command:
    
    
${data.tests}
    
## Version

${data.tests}

## Questions
    
If you have any questions about the repo, open an issue or contact [${data.firstName}] directly at [${data.githubEmail}](https://github.com/avaarm).


        
`;
    writeFileAsync("README-generated.md", template).catch(err => {
      console.log(err);
    });
  });


// const questions = [

// ];
// function writeToFile(fileName, data) {

// }
// function init() {

// }

