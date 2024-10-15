// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let numEmployees = parseInt (prompt("Enter the number of employees:"));

  for (let i = 0; i <numEmployees; i++) {
    let employee = {};
    employee.name = prompt("Enter employee name:");
    employee.age = parseInt(prompt("Enter employee age:"));
    employee.position = prompt("Enter employee position:");

    employees.push(employee);
  }
  return employees;
}
let employees = collectEmployees();
console.log(employees);
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  if (salaries.length === 0) {
    return 0;
  }
  let totalSalary = 0;
  for (let salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary / salaries.length;
  // TODO: Calculate and display the average salary
}

const salaryArray = [50000, 60000, 75000, 80000];
const averageSalary = calculateAverageSalary(salaryArray);

console.log("Average Salary:", averageSalary);

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const employees = [
    { name: "John Doe", posistion: "Manager" },
    { name: "Jane Smith", position: "Developer" },
    { name: "Alice Lee", position: "Designer" },
  ];

  function selectRandomEmployee() {
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];

    console.log("Name:", randomEmployee.name);
    console.log("Position:", random.Employee.position);
  }
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
