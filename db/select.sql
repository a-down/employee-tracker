USE employees_db;

-- view all departments
SELECT id AS 'Department Id', department_name AS 'Department Name' 
	FROM departments;

-- view all roles
SELECT r.id AS 'Role Id', role_title AS 'Role Title', d.department_name AS 'Department Name', salary AS 'Salary'
	FROM roles r
  INNER JOIN departments d ON r.department_id = d.id;

-- view all employees
SELECT first_name, last_name from employees;

-- add a department
INSERT INTO departments (name)
	VALUES ('.......');

-- add a role
INSERT INTO roles (title, salary, department_id)
	VALUES ('.......', 65000, 6);

-- add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES ('...', '...', 6, 1);

-- update employee role
UPDATE employees
	SET role_id = 6
    WHERE id = 6;