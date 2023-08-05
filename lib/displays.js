const inquirer = require("inquirer");


function displayTable(data){
  console.log("\n");
  console.table(data);
}


module.exports = {
  displayTable
}