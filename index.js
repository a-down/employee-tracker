const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments, listAllRoles, listAllEmployees, addDepartment, createDepartmentsArray, findDepartmentId, addRole, createRolesArray, createEmployeeArray, findRoleId, findEmployeeId, addEmployee } = require("./lib/queries")
const { displayTable } = require("./lib/displays")


// start the application
// ask user what part of the CMS they want to access
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


      // list all departments in the db
      case "List all Departments":
        listAllDepartments().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;


      // list all roles in the db
      case "List all Roles":
        listAllRoles().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;
      

      // list all employees in the db
      case "List all Employees":
        listAllEmployees().then(([rows]) => {
          displayTable(rows);
          start();
        });
        break;
      

      // add a department to the db
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
                console.log(`${response.departmentName} Department has been added to database.`);
                start();
              });
            })
          });
          break;
      

      // add a role to the db
      case "Add a Role":
        // declare variables
        let titleOfRole
        let salaryOfRole

        // get all departments and put into array to use in prompt
        listAllDepartments()
        .then((departments) => createDepartmentsArray(departments[0]))
        .then((array) => {
          inquirer.prompt([
            {
              type: 'input',
              message: 'What is the title of the new role?',
              name: 'roleTitle'
            },
            {
              type: 'input',
              message: 'What is the salary of the new role?',
              name: 'roleSalary'
            },
            {
              type: 'list',
              message: 'What department does the new role belong to?',
              name: 'roleDepartment',
              choices: array
            },
          ])

          // set variables for addRole() 
          // includes getting the corresponding ID for department choice
          .then((response) => {
            titleOfRole = response.roleTitle;
            salaryOfRole = response.roleSalary;
            return findDepartmentId(response.roleDepartment)
          })

          // send data to addRole()
          .then((data) => {
            // console.log(data);
            const data1 = data[0];
            addRole(data1[0].id, titleOfRole, salaryOfRole);
          })

          // display all Roles and success message in terminal
          .then((res) => listAllRoles()).then(([rows]) => {
            displayTable(rows);
                console.log(`${titleOfRole} Role has been added to database.`)
                start();
          })})
        break;
      

        // add an employee to the databse
        case "Add an Employee":
          // declare variables
          let fName
          let lName
          let roleArr
          let employeeArr
          let employeeManager
          let roleId

          // get roles and put into array
          listAllRoles()
          .then((roles) => createRolesArray(roles[0]))
          .then((arr) => roleArr = arr)
          .then(() => listAllEmployees())
          .then((employees) => createEmployeeArray(employees[0]))
          .then((arr) => employeeArr = arr)
          .then(() => {
            inquirer.prompt([
              {
                type: 'input',
                message: "What is the employee's first name?",
                name: 'firstName'
              },
              {
                type: 'input',
                message: "What is the employee's last name?",
                name: 'lastName'
              },
              {
                type: 'list',
                message: 'What role will be assigned to the employee?',
                name: 'employeeRole',
                choices: roleArr,
              },
              {
                type: 'list',
                message: "Who is the new employee's manager?",
                name: 'employeeManager',
                choices: employeeArr,
              },
            ])

            // assign prompt responses to use later
            // find id for role
            .then((response) => {
              fname = response.firstName;
              lname = response.lastName;
              employeeManager = response.employeeManager;
              return findRoleId(response.employeeRole)
            })

            // assign role id to variable
            // find employee id of manager
            .then((id) => {
              roleId = id[0]
              return findEmployeeId(employeeManager)})

            // send data to addEmployee
            .then((managerId) => {
              managerId1 = managerId[0]
              return addEmployee(fname, lname, roleId[0].id, managerId1[0].id)
            })
            
            // display all Employees and success message in terminal
            .then((res) => listAllEmployees()).then(([rows]) => {
              displayTable(rows);
                  console.log(`${fname} ${lname} has been added to database.`)
                  start();
            })})
          break;

        






    }
  })
}

start();