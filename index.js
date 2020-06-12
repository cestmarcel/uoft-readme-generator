const inquirer = require("inquirer");
const fs = require("fs").promises;

// Prompting user responses
async function mainApp(){
  const response = await inquirer
    .prompt([
      {
        type: "text",
        message: "What is your Github username?",
        name: "user",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid username"} return true}
      },
      {
        type: "text",
        message: "What is your Github email address?",
        name: "email",
        validate: (input) => {if (input == '' || !input.includes("@") ) {return "Error: Please enter a valid email address"} return true}
      },
      {
        type: "text",
        message: "Please provide a link to your Github profile picture.",
        name: "profile",
        validate: (input) => {if (input == '' || !input.includes("http") ) {return "Error: The link has to start with http or https"} return true}
      },
      {
        type: "text",
        message: "Please include a badge. What label do you want to assign to your badge?",
        name: "label",
        validate: (input) => {if (input == '') {return "Error: You have to assign a label"} return true}
      },
      {
        type: "text",
        message: "What's the message of your badge?",
        name: "message",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid message"} return true}
      },
      {
        type: "list",
        message: "Please choose a color for your badge.",
        choices: ["orange", "green", "red", "blue", "yellow", "gray", "darkgray"],
        name: "color"
      },
      {
        type: "text",
        message: "What is your project's title?",
        name: "title",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid title"} return true}
      },
      {
        type: "text",
        message: "Please enter your project's description.",
        name: "description",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid description"} return true}
      },
      {
        type: "text",
        message: "What steps are required to install your project? Please provide a description.",
        name: "installation",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid description of the installation process"} return true}
      },
      {
        type: "text",
        message: "Provide instructions and examples around the use of your application.",
        name: "usage",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid description of the usage"} return true}
      },
      {
        type: "text",
        message: "Add a license to your project to let people know what they can do with your project.",
        name: "license",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid license"} return true}
      },
      {
        type: "text",
        message: "Let others know how they can contribute to your project.",
        name: "contributing",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid description of the contribution process"} return true}
      },
      {
        type: "text",
        message: "Add examples on how to run tests for your application.",
        name: "tests",
        validate: (input) => {if (input == '') {return "Error: Please enter a valid description of the tests"} return true}
      },
      {
        type: "text",
        message: "List your collaborators, third party assets, and tutorials you used. Please also provide links for them.",
        name: "credits",
        validate: (input) => {if (input == '') {return `Error: This field cannot be empty. Please enter "None" if none of the above applies`} return true}
      }
    ])

    var copy = [];

    function addToFile(){
        copy = [
            `<img src="https://img.shields.io/badge/${response.user}-${response.title}-navy">`,
            `<img src="https://img.shields.io/badge/${response.label}-${response.message}-${response.color}">`,
            `# ${response.title}`,
            `## Description`,
            `${response.description}`,
            `## Table of contents`,
            `- [Installation](#Installation)\n- [Usage](#Usage)\n- [License](#License)\n- [Contributing](#Contributing)\n- [Tests](#Tests)\n- [Credits](#Credits)`,
            `## Installation`,
            `${response.installation}`,
            `## Usage`,
            `${response.usage}`,
            `## License`,
            `${response.license}`,
            `## Contributing`,
            `${response.contributing}`,
            `## Tests`,
            `${response.tests}`,
            `## Credits`,
            `${response.credits}`,
            `## Questions`,
            `<img src="${response.profile}">`,
            `In case you have any questions, please drop me an email at: ${response.email}`
        ]
    }
    addToFile();

    for(i=0; i<copy.length; i++){
        await fs.appendFile('project-readme.md', copy[i] + "\n" + "\n", (err) =>{
            if (err) throw err;
        });
    }

  }
  mainApp();