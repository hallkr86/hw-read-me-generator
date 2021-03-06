//console.log("hello world");
const inquirer = require("inquirer");
const fs = require("fs");
//const markdownGenerator = require("./utils.js/generateMarkdown");


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
            message: "Please enter your table of contents",
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
        },
        {
        type: "input",
        message: "Please enter your Github Username",
        name: "username"
        },
        {
        type: "input",
        message: "Please enter your email",
        name: "email"
        }
        


    ]).then(function(data){
        console.log(data);
        fs.writeFile('README.md', JSON.stringify (data.title), function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Description\n ${data.description}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        //let generateMD = markdownGenerator (data);
        fs.appendFile('README.md', `\n\n ##Table of Contents\n ${data.contents}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Installation\n ${data.installation}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Usage\n ${data.usage}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##License\n ${data.license}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Contributing\n ${data.contributing}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Tests\n ${data.tests}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Questions\n ${data.questions}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Github\n ${data.username}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        fs.appendFile('README.md', `\n\n ##Email\n ${data.Email}`, function (err) {
            if (err) throw err;
            console.log('Saved README.md!');
        });
        
    });
