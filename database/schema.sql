CREATE TABLE leave_requests (
  id SERIAL PRIMARY KEY,
  employee_name TEXT,
  department TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO leave_requests (employee_name, department, status)
VALUES
  ('Alice', 'HR', 'Pending'),
  ('Bob', 'Finance', 'Approved');
