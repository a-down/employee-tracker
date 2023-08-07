USE employees_db;

-- view all departments
SELECT id AS 'Department_Id', department_name AS 'Department' 
	FROM departments;

-- view all roles
SELECT r.id AS 'Role Id', role_title AS 'Role_Title', d.department_name AS 'Department Name', salary AS 'Salary'
	FROM roles r
  INNER JOIN departments d ON r.department_id = d.id;

-- view all employees
SELECT e.id, first_name AS 'First_Name', last_name AS 'Last_Name', role_title AS 'Role', department_name AS 'Department', salary AS 'Salary'
	FROM employees e
  INNER JOIN roles r ON e.role_id = r.id
    INNER JOIN departments d ON r.department_id = d.id;

-- add a department
INSERT INTO departments (department_name)
  VALUES ('.......');

-- find id of department
SELECT id
  FROM departments
  WHERE department_name = '.......'

-- add a role
INSERT INTO roles (role_title, salary, department_id)
  VALUES ('.......', .., ..);

-- find id of role
SELECT id
	FROM roles
	WHERE role_title = '.......'

-- add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES ('.......', '.......', .., ..);

-- find id of employee
SELECT id
  FROM employees
  WHERE first_name = '.......'

-- update employee role
UPDATE employees
  SET role_id = ..
  WHERE id = ..;