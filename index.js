const inquirer = require('inquirer')
const fs = require('fs')

let answers

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project and what the application is supposed to.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any special installation instructions that are needed.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter instructions on how to use this application.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter instructions if anyone would like to contribute.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

inquirer.prompt(questions).then((data) => {
    // console.log(data)
    const templateWithData = readmeTemplate(data)
    fs.writeFile('test-readme.md', templateWithData, (err) => {
        if(err) {console.error(err)} else {console.log('Success')}
    })
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const readmeTemplate = ({name,description,installation,usage,contribution,github, email}) => `# ${name}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Contact](#contact)

## Description
${description}

## Installation
You will need to run the following installation commands in your terminal in order to run this program:

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Contact

GitHub: ${github}

Email: ${email}`