const inquirer = require("inquirer");
const fs = require("fs").promises;

// Prompting user responses
async function mainApp(){
  const response = await inquirer
    .prompt([
      {
        type: "text",
        message: "What is your Github username?",
        name: "user"
      },
      {
        type: "text",
        message: "What is your Github email address?",
        name: "email"
      },
      {
        type: "text",
        message: "Please provide a link to your Github profile picture.",
        name: "profile"
      },
      {
        type: "text",
        message: "Please include a badge. What label do you want to assign to your badge?",
        name: "label"
      },
      {
        type: "text",
        message: "What's the message of your badge?",
        name: "message"
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
        name: "title"
      },
      {
        type: "text",
        message: "Please enter your project's description.",
        name: "description"
      },
      {
        type: "text",
        message: "What steps are required to install your project? Please provide a description.",
        name: "installation"
      },
      {
        type: "text",
        message: "Provide instructiona and examples around the use of your application.",
        name: "usage"
      },
      {
        type: "text",
        message: "Add a license to your project to let people know what they can do with your project.",
        name: "license"
      },
      {
        type: "text",
        message: "Let others know how they can contribute to your project.",
        name: "contributing"
      },
      {
        type: "text",
        message: "Add examples on how to run tests for your application.",
        name: "tests"
      },
      {
        type: "text",
        message: "List your collaborators, third party assets, and tutorials you used. Please also provide links for them.",
        name: "credits"
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
            `${response.credits}`
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