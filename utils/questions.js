const data = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please put in a description",
  },
  {
    type: "input",
    name: "instruction",
    message: "Please enter in installation instructions.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter in contribution guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter in the test intruction.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select your license",
    choices: ["MIT","Apache","GPL","None"]
  },
  {
    type: "input",
    name: "usage",
    message: "What is this appication used for?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email address?",
  },
  {
    type: "input",
    name: "linkedin",
    message: "What is your Linkedin page?",
  },
]
module.exports = data;