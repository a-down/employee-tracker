const inquirer = require("inquirer");


function displayAllDepartments(data){
  console.log("\n");
  console.table(data);
}

function displayAllRoles(data){
  console.log("\n");
  console.table(data);
}

module.exports = {
  displayAllDepartments: displayAllDepartments,
  displayAllRoles: displayAllRoles
}