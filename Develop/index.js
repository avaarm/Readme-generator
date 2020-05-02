// npm init ( to make a json file)
// npm i  (to make )
// npm install inquirer

// Badge implementation (https://github.com/nebrelbug/badge-generator/blob/master/index.js)

// Putting together dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
// const axios = require("axios"); // delete in you don't use the badge generator npm packages
//Your application should prompt the user for information such as their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

// wrapping fs.writeFile in a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Using inquirer and prompting for questions
inquirer
  .prompt([
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
        "Describe your project in a few sentences, including: The name of the project, inrpitation, and use",
      name: "projectDescribe"
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: [
        "MIT",
       "APACHE 2.0", 
       "GPL 3.0", 
       "BSD 3", 
       "None"
    ]
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
      repoContribute
    } = data;
    const template = `

    # ${data.projectName}
    [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${data.projectURL})
    [![GitHub Contribution](https://img.shields.io/badge/Contributions-${data.repoContribute}-yellow.svg)](${data.projectURL})
    [![GitHub Project Name](https://img.shields.io/badge/Project-Name-${data.projectName}-pink.svg)](${data.projectURL})
   
    ## Description
    
    ${data.projectDescribe}
    
    ## Table of Contents 
    
    * [Installation](#installation)

    * [Usage](#usage)
    
    * [License](#license)
    
    * [Contributing](#contributing)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
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
    
    
    ## Questions
    
    If you have any questions about the repo, open an issue or contact [${data.githubUsername}](https://github.com/avaarm) directly at ${data.githubEmail}.
        
`;
    writeFileAsync("README.md", template).catch(err => {
      console.log(err);
    });
  });

// Below is what was intially instructed and I'm essentially doing the same, but a little differently
// const questions = [

// ];
// function writeToFile(fileName, data) {

// }
// function init() {

// }

// init();

// * At least one badge - ?
// * Project title - done
// * Description - done
// * Table of Contents - need to check ?
// * Installation - done
// * Usage - done
// * License- done
// * Contributing - done
// * Tests - done
