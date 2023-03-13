// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = 

inquirer
    .prompt([
        {
            type: 'input', 
            name: 'Question',
            message: 'what was your motivation?',
           
        },

        {
            type: 'input',
            name: '1question',
            message: 'Why did you build this project ?',
            
        },

        {
            type: 'input',
            name: '2question',
            message: 'Why problem does it solve ?',
            
        },

        {
            type: 'input',
            name: '3question',
            message: 'what did you learn ?',
            
        },

        {
            type: 'input',
             name: '4question', 
            messsage: 'what makes your project stand out?',
           
        }

    ])
    .then((answers) => {
        const readme = `# ${answers.projectName };


${answers.1question}

## Installation

${answers.question}

## Usage

${answers.2question}

## Contributing

${answers.3question}

## Tests

${answers.4question}

## License

This project is licensed under the ${answers.license} license.

`;

    fs.writeFile('README.md', readme, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file created successfully!');
      }
    });
  });






//This code prompts the user for information about their project, and then generates a README file with the provided information. The README file includes sections for installation, usage, contributing, tests, and license information. You can customize the questions and sections as needed



// // for the html to input inquirer.promt use a template literal in the text.index.html code 

// // const name = 'Alice';
// // const age = 30;




// // const message = `Hello, my name is ${name} and I am ${age} years old.`;

// //console.log(message);
// // Output: "Hello, my name is Alice and I am 30 years old."


// // Function call to initialize app
// init();then((response) => {
//         var html = htmlFunction(response);
//         fs.writeFile('READ.md', html, (error) =>
//             error ? console.error(error) : "succesful"
//         );
//     });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
// var htmlFunction = function (response) {
//     const readmeText = ' # Project Name' 

    
//    ' ## Installation'
//     .
//     writeToFile();
// }


// '## Usage'

    
//     '## Contributing'
    
    
//     '## License'
    
//     ;     
//     return readmeText;

// };
// // TODO: Create a function to initialize app
// function init() {