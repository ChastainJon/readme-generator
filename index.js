// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

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
        name: 'install'
    },
    {
        type: 'input',
        message: 'How do you use your app:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed on this project?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['MIT License', 'GNU General Public Release v3.0', 'Apache License v2.0', 'BSD License 3-Clause']
    },
    {
        type: 'input',
        message: 'Please list any tests and how to run them',
        name: 'test'
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
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err){
                reject(err)
                //return out of the function here to mkae sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }

            //if everyhting went well, resolve the Promise and send the succesful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })     
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    
}

// Function call to initialize app
init()
    .then(markdownData =>{
        return generateMarkdown(markdownData)
    })
    .then(pageMarkdown =>{
        return writeToFile('./output/readme.md', pageMarkdown)
    })