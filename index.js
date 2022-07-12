const inquirer = require('inquirer')
const fs = require('fs')

let answers = 'smile'

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
        message: 'Yes'
    }
];

inquirer.prompt(questions).then((data) => {
    // console.log(data)
    answers = data
    fs.writeFile('test-readme.md', 'data', (err) => {
        if(err) {console.error(err)} else {console.log('Success')}
    })
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
