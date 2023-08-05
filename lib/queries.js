const inquirer = require("inquirer");
const connection = require("../config/connection");

/*
  We are making use of a mysql2 method called promise() which allows us to 
  perform our database query asynchronously. This means we don't need to use
  .then() blocks or callback functions, which makes it much easier run the queries 
  and return values from them.
*/

function listAllDepartments(){
  return connection.promise().query(`SELECT id AS 'Department Id', department_name AS 'Department Name' FROM departments;`);
}

function listAllRoles(){
  return connection.promise().query(
  `SELECT r.id AS 'Role Id', role_title AS 'Role Title', d.department_name AS 'Department Name', salary AS 'Salary'
	  FROM roles r
    INNER JOIN departments d ON r.department_id = d.id;`)
}




module.exports = {
  listAllDepartments: listAllDepartments,
  listAllRoles: listAllRoles
}