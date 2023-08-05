USE employees_db;

-- view all departments
SELECT name FROM departments;

-- view all roles
SELECT title FROM roles;

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