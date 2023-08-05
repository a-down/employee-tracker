const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments, listAllRoles, listAllEmployees, addDepartment, /*addRole*/ } = require("./lib/queries")
const { displayTable } = require("./lib/displays")
/*
  There are a lot of menu items presented to users in this app. The only real way you cam manage them 
  is by creating a function to handle each one.

  I'm giving you a bit of starter code below.
*/ 


function start(){
  inquirer.prompt([
    {   
      type: "list",
      message: "Choose an item from the list below:",
      name: "option", 
      choices: [
        "List all Departments",
        "List all Roles",
        "List all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update Employee Role",
      ]
    }
  ]).then( response => {
    switch(response.option){


      case "List all Departments":
        listAllDepartments().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;


      case "List all Roles":
        listAllRoles().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;
      

      case "List all Employees":
        listAllEmployees().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;
      

      case "Add a Department":
        inquirer.prompt([
          {
            type: 'input',
            message: 'What is the name of the new department?',
            name: 'departmentName'
          }]).then((response) => {
            addDepartment(response).then(() => {
              listAllDepartments().then(([rows]) => {
                displayTable(rows);
                console.log(`${response.departmentName} Department has been added to database.`)
                start();
              });
            })
          });
          break;













      // case "Add a Role":
      //   const deptChoices = []
      //   listAllDepartments().then((departments) => {
      //     departments[0].forEach((department) => {deptChoices.push(department.Department)})
      //     // console.log(deptChoices)
      //   })
        
      //   .then(
      //   inquirer.prompt([
      //     {
      //       type: 'input',
      //       message: 'What is the title of the role?',
      //       name: 'roleTitle'
      //     },
      //     {
      //       type: 'input',
      //       message: 'What is the salary of the role?',
      //       name: 'salary'
      //     },
      //     {
      //       type: 'list',
      //       message: 'What is the department of the role?',
      //       choices: deptChoices,
      //       name: 'department'
      //     }
      //   ])
        
      //   .then((respones) => {
      //     addRole(response)
          
      //       .then(() => {
      //       listAllRoles()
            
      //         .then(([rows]) => {
      //         displayTable(rows);

      //         console.log(`${response.departmentName} Role has been added to database.`)
      //         start();
      //       })})}))
      

    }
  })
}

start();