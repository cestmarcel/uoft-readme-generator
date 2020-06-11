const inquirer = require("inquirer");
const fs = require("fs");

async function mainApp(){
  const response = await inquirer
    .prompt([
      {
        type: "text",
        message: "Please include at least one badge. What's the label of your first badge?",
        name: "label1"
      },
      {
        type: "text",
        message: "What's the message of your first badge?",
        name: "message1"
      },
      {
        type: "list",
        message: "Please choose a color for your first badge.",
        choices: ["orange", "green", "red", "blue", "yellow", "gray", "darkgray"],
        name: "color1"
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
        name: "collaboration"
      }
    ])

    // console.log( `inquirer prompts finished, got response: `, response )

    // fs.appendFile('message.txt', process.argv[2], (err) =>{
    //     if (err) throw err;
    //     console.log(`Data successfully appended`);
    // });

  }
  mainApp()