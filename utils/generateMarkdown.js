// function to generate markdown for README
function generateMarkdown(anwsers) {
  return `# ${anwsers.title};
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contibution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description:
  ${anwsers.description}
  
  ## Installation Instructions:
  ${anwsers.instruction}
  
  ## Usage:
  ${anwsers.usage}
  
  ## Contribution:
  ${anwsers.contribution}
  
  ## Testing:
  ${anwsers.test}
  
  ## License:
  ![License](https://img.shields.io/static/v1?label=License&message=${anwsers.license}&color=9cf)
  
  ## Questions?
  Linkedin ${anwsers.linkedin}
  GitHub: ${anwsers.github}
  Email: ${anwsers.email}`;
};


module.exports = generateMarkdown;
