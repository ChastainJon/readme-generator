// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectName',
        validate: projectNameInput => {
            if(projectNameInput){
                return true
            }else{
                console.log('Please enter a project name')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a description for your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install your app:',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'How do you use your app:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who all contributed on this project?',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public Release', 'Apache License 2.0', 'BSD License 2.0']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your e-mail address:',
        name: 'email'
    }


]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
}

// Function call to initialize app
init()