const inquirer = require("inquirer");
const connection = require("../config/connection");

/*
  We are making use of a mysql2 method called promise() which allows us to 
  perform our database query asynchronously. This means we don't need to use
  .then() blocks or callback functions, which makes it much easier run the queries 
  and return values from them.
*/

function listAllDepartments(){
  return connection.promise().query(`SELECT id AS 'Department Id', department_name AS 'Department' FROM departments;`);
}

function listAllRoles(){
  return connection.promise().query(
  `SELECT r.id AS 'Role Id', role_title AS 'Role Title', d.department_name AS 'Department Name', salary AS 'Salary'
	  FROM roles r
    INNER JOIN departments d ON r.department_id = d.id;`)
}

function listAllEmployees(){
  return connection.promise().query(
    `SELECT first_name AS 'First Name', last_name AS 'Last Name', role_title AS 'Role', department_name AS 'Department', salary AS 'Salary'
	    FROM employees e
      INNER JOIN roles r ON e.role_id = r.id
        INNER JOIN departments d ON r.department_id = d.id;`
  )
}

function addDepartment(response){
  return connection.promise().query(
    `INSERT INTO departments (department_name)
      VALUES ('${response.departmentName}');`
  )
}

function renderDeptChoices(){
  const choices = []
  listAllDepartments().then((departments) => {
    departments[0].forEach((department) => {
      choices.push(department.Department);
      return choices
  })})
}









// function addRole(response){
//   return connection.promise().query(
//     `INSERT INTO roles (role_title, salary, department_id)
// 	    VALUES ('${response.roleTitle}', ${response.salary}, ${
//         connection.promise().query(`SELECT id
//         FROM departments
//           WHERE department_name = ${response.department};`)
//       });`
//   )
// }




module.exports = {
  listAllDepartments: listAllDepartments,
  listAllRoles: listAllRoles,
  listAllEmployees: listAllEmployees,
  addDepartment: addDepartment,
  renderDeptChoices: renderDeptChoices,
  /*addRole: addRole*/
}