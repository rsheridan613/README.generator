// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of the project?",
  },
  {
    name: "description",
    type: "input",
    message: "Type a short description for your project.",
  },
  {
    name: "install",
    type: "input",
    message: "What are the installation instructions?",
  },
  { name: "usage", type: "input", message: "How do you use this app?" },
  { name: "contribution", type: "input", message: "Who are the contributors?" },
  {
    name: "test",
    type: "input",
    message: "Inculde instructions on how to run tests.",
  },
  {
    name: "liscense",
    type: "list",
    message: "Which liscense would you like?",
    choices: ["one", "two", "None"],
  },
  {
    name: "gitUsername",
    type: "input",
    message: "What is your GitHub username?",
  },
  { name: "email", type: "input", message: "What is your email?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, function () {
    console.log("File Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", generateMarkdown(response)));
}

// Function call to initialize app
init();
