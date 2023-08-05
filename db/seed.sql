USE employees_db;

INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Management');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Customer Rep', '80000', 1),
  ('Senior Developer', '120000', 2),
  ('Accountant', '75000', 3),
  ('Legal Advisor', '130000', 4),
  ('Site Manager', '90000', 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
	  ('Sandy', 'Cheeks', 5, null),
    ('Patrick', 'Star', 1, 1),
    ('Spongebob', 'Squarepants', 2, 1),
    ('Eugene', 'Krabs', 3, 1),
    ('Squidward', 'Tentacles', 4, 1);
  
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;