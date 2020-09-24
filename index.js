//console.log("hello world");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the title of your readMe?",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the description of your project",
            name: "name"   
        },
        {
            type: "input",
            message: "Please add the table of contents",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter information about your installation",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter information about your usage",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter you license",
            name: "name"
        },
        {
            type: "input",
            message: "Please add a section about contributing",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your tests here",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter your questions",
            name: "name"
        },
    ])