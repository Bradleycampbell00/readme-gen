const { prompt } = require("inquirer")
const { writeFile } = require("fs")
// const license = require("./utils/license")
const questions = require("./utils/questions")
const generateMarkdown = require("./utils/generateMarkdown");
// const { generate } = require("rxjs");


// array of questions for user
// const {questions} = require("questions")

prompt(questions).then((data) => {
    // prompt(license).then((licenseQue) => {
        generateInfo(data.license),
        // anwsers = Object.assign(data, licenseQue)
        // writeFile("LICENSE", )
        writeFile("readme.md", generateMarkdown(data), (err) =>
        err ? console.log(err) : (`It Works`))
    });

// });


function generateInfo(){
    if ('MIT'){
        `MIT Boi`
    }
    if('Apache'){
        `Apache Boi`
    }
    if('GPL'){
        `GPL`
    }
    if('None'){

    }
}


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {
//     writeToFile
// }

// // function call to initialize program
// init();