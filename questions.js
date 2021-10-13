//meta
const inquirer = require("inquirer");
const fs = require('fs')


//classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")


//store team here
const teamArr = [];
const cardArr = [];
const startQuestions = () => { 
    inquirer
    .prompt([{
            type: "input",
            name: "manager",
            message: "What is your team manager's name?"
        },
        {
            type: "input",
            name: "identification",
            message: "What is your managers id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your managers email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your managers office number?"
        },
    ])
    .then((managerAnswers) => {
       
        const {manager, identification, email, officeNumber} = managerAnswers
        const managerClass = new Manager(manager, identification, email, officeNumber)
        teamArr.push(managerClass)
       

        addTeamMember()
    });

}


const addTeamMember = () => {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Would you like to add a team member?',
            name: 'member',
            choices: ['engineer', 'intern', 'finished building my team']
        }])
        .then((addOrFinishPath) => {
           

            const pathForward = addOrFinishPath;
           

            if (pathForward.member === 'engineer') {
        
               engineeringQuestions();

            } else if (pathForward.member === 'intern') {
                internQuestions();
            } else {
    
                createCards()
            }


        })
}
const engineeringQuestions = () => {
    inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineers name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the engineers id number?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineers email address?"
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineers github username?"
                },
        ])
        .then((engineerAnswers) => { 
            console.log(engineerAnswers);
            const {name, id, email, github} = engineerAnswers;
           
            const engineerClass = new Engineer(name, id, email, github)
            console.log(engineerClass);
            teamArr.push(engineerClass);
            
            addTeamMember()

        
        })
    }

    const internQuestions = () => { 
        inquirer
                .prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the interns name?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "What is the interns id number?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the interns email?"
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What is the interns school name?"
        
                    },
            ])
            .then((internAnswers) => {
               
                const {name, id, email, school} = internAnswers;
                const internClass = new Intern(name, id, email, school)
                teamArr.push(internClass)
                addTeamMember()


            })
    }


    const createCards = () => {

       
        for(let i = 0; i < teamArr.length; i++) {
            
            if(teamArr[i].getRole() === 'Manager'){
                console.log('this works manager')
                const managerHtml = 
                `
                <div class="card col-sm-3 employee-card">
                <h3 class="card-header">Name: ${teamArr[i].getName()}</h3>
                <div class="card-body">
                  <h4 class="card-title">Role: ${teamArr[i].getRole()}</h4>
                  <h5>ID: ${teamArr[i].getId()}</h5>
                  <h5>Email: <a href="mailto:${teamArr[i].getEmail()}">${teamArr[i].getEmail()}</a></h5>  
                  <h5>Office Number: ${teamArr[i].getOfficeNumber()}</h5>  
                </div>
              </div>
                    `
                    cardArr.push(managerHtml)
                   
                   
                
            } 

            if(teamArr[i].getRole() === 'Engineer'){
                console.log('eng runs')
                const engineerHtml =
                `
                <div class="card col-sm-3 employee-card">
                <h3 class="card-header">Name: ${teamArr[i].getName()}</h3>
                <div class="card-body">
                  <h4 class="card-title">Role: ${teamArr[i].getRole()}</h4>
                  <h5>ID: ${teamArr[i].getId()}</h5>
                  <h5>Email: <a href="mailto:${teamArr[i].getEmail()}">${teamArr[i].getEmail()}</a></h5>  
                  <h5>GitHub: <a href= "https://github.com/${teamArr[i].getGitHub()}">${teamArr[i].getGitHub()}</a> </h5> 
                </div>
              </div>
                    `
                cardArr.push(engineerHtml)
                console.log(cardArr)
                
                
            }
    

            if(teamArr[i].getRole() === 'Intern'){
                console.log('hmmmm runs')
                const internHtml =
                `
                <div class="card col-sm-3 employee-card">
                <h3 class="card-header">Name: ${teamArr[i].getName()}</h3>
                <div class="card-body">
                  <h4 class="card-title">Role: ${teamArr[i].getRole()}</h4>
                  <h5>ID: ${teamArr[i].getId()}</h5>
                  <h5>Email: <a href="mailto:${teamArr[i].getEmail()}">${teamArr[i].getEmail()}</a></h5>  
                  <h5>School: ${teamArr[i].getSchool()} </h5> 
                </div>
              </div>
                    `

                
                cardArr.push(internHtml)
                console.log(cardArr)
                
                
            }
           
        }

        mainHtml()
    }

    const mainHtml = () => {


const htmlTemplate = 
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./dist/style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
          </script>
          <title>Document</title>
        
        </head>
        
        <body>
          <header>
          <div class="jumbotron">
          <h1 class="main-header" class="display-3">Team</h1>
          <p class="lead header-bio">Below you will find your team members names, roles, emails and ID's. There is specific information regarding individual role types</p>
          <hr class="my-2">
        </div>
          </header>
        
          <main>
        
            <div class="container">
              <div class="row card-position">
            ${cardArr}
              </div>
            </div>
        
          </main>
        
        
        
          <script src="./personal-questions.js"> </script>
        </body>
        
        </html> `

        writeHtml(htmlTemplate)
    }
   
    const writeHtml = htmlTemplate => {
    fs.writeFile('index.html', htmlTemplate, (error) => 
    error ? console.error(error) : console.log(htmlTemplate));

}
 

    
    
startQuestions()