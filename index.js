//console.log("hello world");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the title of your readMe?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter the description of your project",
            name: "description"   
        },
        {
            type: "input",
            message: "Please add the table of contents",
            name: "contents"
        },
        {
            type: "input",
            message: "Please enter information about your installation",
            name: "installation"
        },
        {
            type: "input",
            message: "Please enter information about your usage",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter you license",
            name: "license"
        },
        {
            type: "input",
            message: "Please add a section about contributing",
            name: "contributing"
        },
        {
            type: "input",
            message: "Please enter your tests here",
            name: "tests"
        },
        {
            type: "input",
            message: "Please enter your questions",
            name: "questions"
        }
    ]).then(function(data){
        console.log(data);
        fs.writeFile('README.md', JSON.stringify(data.title), function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.description}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.contents}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.installation}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.usage}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.license}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.contributing}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.tests}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n${data.questions}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
    })
