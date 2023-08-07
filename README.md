# Employee Tracker (Module 12 Homework - SQL)

The goal was to create a CMS for a business owner to view and manage the departments, roles, and employees at their company. The requirements were:
- On launch, the user will be presented with the following options:
    ```md
    View All Departments
    View All Roles
    View All Employees
    Add a Department
    Add a Role
    Add an Employee
    Update an Employee Role
    ```
- Choosing to view all departments presents departments names and ids.
- Choosing to view all roles presents job titles, role ids, departments of the roles, and the salaries of the roles.
- Choosing to view all employees presents employee ids, names, job titles, departments, salaries, and managers.
- Choosing to add a department prompts the user for a department name; the department is added to the database.
- Choosing to add a role prompts the user for the role name, salary, and department; the role is added to the database.
- Choosing to add an employee prompts the user for the employee's first name, last name, role, and manager; the employee is added to the database.
- Choosing to update an employee prompts the user to select an employee to update, then prompts for their new role to be selected; the role is updated in the database.

## Installation

To use the Logo Maker, you will need to follow these instructions:
1. Download the project repo to your computer.
2. In command line:
    ```
    npm install
    ```
3. Confirm that ```inquirer``` and ```mysql2``` are installed and active.
4. In MySQL Workbench:
    - Copy the code from ```schema.sql``` into Workbench and run the code.
    - Copy the code from ```seed.sql``` into Workbench and run the code.

## Usage

- To start the Employee Tracker, enter

  ```
  node index.js
  ``` 

  in the command line. You will answer prompts to maneuver the Employee Tracker CMS. This includes:
    - viewing existing departments, roles, and employees
    - creating new departments, roles, and employees
    - updating current employees' roles

- To stop the Employee Tracker, enter

    ```
    ctrl + c
    ```

## Video Demo

[Link to Demo Video](https://watch.screencastify.com/v/kxhnIpZg1SZFTZUmTNBh)