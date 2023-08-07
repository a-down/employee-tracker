USE employees_db;

INSERT INTO departments (department_name)
VALUES
    ('Management'),
    ('Kitchen'),
    ('Financial'),
    ('Quality Assurance'),
    ('Facilities');

INSERT INTO roles (role_title, salary, department_id)
VALUES
  ('Store Manager', '80000', 1),
  ('Fry Cook', '40000', 2),
  ('Register', '30000', 3),
  ('Product Tester', '20000', 4),
  ('Maintenance Tech', '45000', 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
  VALUES
	  ('Eugene', 'Krabs', 1, null),
    ('Spongebob', 'Squarepants', 2, 1),
    ('Squidward', 'Tentacles', 3, 1),
    ('Patrick', 'Stars', 4, 1),
    ('Sandy', 'Cheeks', 5, 1);
  
SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;