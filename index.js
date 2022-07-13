const inquirer = require('inquirer')
const fs = require('fs')

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
    {
        type: 'list',
        name: 'license',
        message: 'Select which license you would like to use for your program.',
        choices: ['BSD_3','GPLv3','MIT', 'Apache_2.0', ]
    }
];

inquirer.prompt(questions).then((data) => {
    // console.log(data)
    const templateWithData = readmeTemplate(data)
    fs.writeFile('test-readme.md', templateWithData, (err) => {
        if(err) {console.error(err)} else {console.log('Success')}
    })
})

const readmeTemplate = ({name,description,installation,usage,contribution,github, email, license}) => `# ${name}
[![License](https://img.shields.io/badge/License-${license}-blue.svg)]

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Contact](#contact)

## Description
${description}

## Installation
You will need to run the following installation commands in your terminal in order to run this program:

${installation}

## Usage

${usage}

## License

${license}

## Contribution

${contribution}

## Questions

Feel free to reach out to me directly if you have any questions or concerns. You can reach me via email, or check out my github profile below.

Email: ${email}

GitHub: [${github}](https://github.com/${github}/)`