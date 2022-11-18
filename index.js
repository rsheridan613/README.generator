// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of the project?",
  "Type a short description for your project.",
  "What are the installation instructions?",
  "How do you use this app?",
  "Who are the contributors?",
  "test thing",
  "Which liscense would you like?",
  "What is your GitHub username?",
  "What is your email?",
];
inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: questions[0],
    },
    {
      name: "description",
      type: "input",
      message: questions[1],
    },
    {
      name: "install",
      type: "input",
      message: questions[2],
    },
    { name: "usage", type: "input", message: questions[3] },
    { name: "contribution", type: "input", message: questions[4] },
    {
      name: "test",
      type: "input",
      message: questions[5],
    },
    {
      name: "liscense",
      type: "list",
      message: questions[6],
      choices: ["one", "two", "three"],
    },
    {
      name: "gitUsername",
      type: "input",
      message: questions[7],
    },
    { name: "email", type: "input", message: questions[8] },
  ])
  .then((response) => console.log(response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
