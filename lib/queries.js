const inquirer = require("inquirer");
const connection = require("../config/connection");

/*
  We are making use of a mysql2 method called promise() which allows us to 
  perform our database query asynchronously. This means we don't need to use
  .then() blocks or callback functions, which makes it much easier run the queries 
  and return values from them.
*/

function listAllDepartments(){
  return connection.promise().query(`SELECT id AS 'Department_Id', department_name AS 'Department' FROM departments;`);
}

function listAllRoles(){
  return connection.promise().query(
  `SELECT r.id AS 'Role Id', role_title AS 'Role_Title', d.department_name AS 'Department Name', salary AS 'Salary'
	  FROM roles r
    INNER JOIN departments d ON r.department_id = d.id;`)
}

function listAllEmployees(){
  return connection.promise().query(
    `SELECT e.id, first_name AS 'First_Name', last_name AS 'Last_Name', role_title AS 'Role', department_name AS 'Department', salary AS 'Salary'
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

function createDepartmentsArray(arr){
  // console.log(arr)
  let newArr = []
  arr.forEach((object) => newArr.push(object.Department))
  // console.log(newArr)
  return newArr
}

function findDepartmentId(department){
  return connection.promise().query(
    `SELECT id
      FROM departments
      WHERE department_name = "${department}"`
    )
}

function addRole(id, title, salary){
  return connection.promise().query(
    `INSERT INTO roles (role_title, salary, department_id)
    VALUES ('${title}', ${salary}, ${id});`
  )
}

function createRolesArray(arr){
  let newArr = []
  arr.forEach((object) => newArr.push(object.Role_Title))
  return newArr
}

function createEmployeeArray(arr){
  let newArr = []
  arr.forEach((object) => newArr.push(`${object.First_Name} ${object.Last_Name}`))
  return newArr
}



module.exports = {
  listAllDepartments: listAllDepartments,
  listAllRoles: listAllRoles,
  listAllEmployees: listAllEmployees,
  addDepartment: addDepartment,
  createDepartmentsArray: createDepartmentsArray,
  findDepartmentId: findDepartmentId,
  addRole, addRole,
  createRolesArray: createRolesArray,
  createEmployeeArray: createEmployeeArray, 
}