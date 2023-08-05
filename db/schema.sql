DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
  manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Customer Rep', '80000', '1'),
  ('Senior Developer', '120000', '2'),
  ('Accountant', '75000', '3'),
  ('Legal Advisor', '130000', '4');

INSERT INTO

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;