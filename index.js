const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments, listAllRoles, listAllEmployees } = require("./lib/queries")
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
        "List All Departments",
        "List All Roles",
        "List All Employees"
      ]
    }
  ]).then( response => {
    switch(response.option){
      case "List All Departments":
        listAllDepartments().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;

      case "List All Roles":
        listAllRoles().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;
      
      case "List All Employees":
        listAllEmployees().then(([rows]) => {
          displayTable(rows);
          start();
        })


      default:
        start();
    }
  })
}

start();