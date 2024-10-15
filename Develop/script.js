// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employeesArray = [];
  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    const firstName = prompt("Enter employees first name:")
    const lastName = prompt("Enter employees last name:")
    let salary = prompt ("Enter employees salary:")

    salary = isNaN(Number(salary)) ? 0 : Number(salary);

    const employees = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employeesArray.push(employees);
  
    const continueAdding = confirm("Do you want to add another employee?")
    if (!continueAdding){
      addAnotherEmployee = false;
    }
  }
  return employeesArray;
}
  // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: ${(totalSalary / employeesArray.length).toLocaleString(undefined, {maximumFractionDigits: 2})}`);
}

  // TODO: Calculate and display the average salary


// Select a random employee
  // TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to the ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

  employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return employeesArray;
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

addEmployeesBtn.addEventListener('click', trackEmployeeData());
