// Get a reference to the #add-employees-btn element
// document.querySelector returns the first Element within the document that matches the specified CSS selector.
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// This function collects the employee information 
const collectEmployees = function() {
  const employeesArray = [];
  let addAnotherEmployee = true;
 
  //google taught me that "prompt" allows the pop up to appear
  // The challenge called for this function to display a first name, last name and salary. My original trial was with name, age and job position. 
  while (addAnotherEmployee) {
    const firstName = prompt("Enter employees first name:")
    const lastName = prompt("Enter employees last name:")
    let salary = prompt ("Enter employees salary:")

    // thank you webMDN for the lesson on isNaN
    salary = isNaN(Number(salary)) ? 0 : Number(salary);

    // This allows the input message to pop up
     // TODO: Get user input to create and return an array of employee objects
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employeesArray.push(employee);
  
    // This function: ContinueAdding confirms whether or not the person wants to add another employee or cancel and see their results in the table
    const continueAdding = confirm("Do you want to add another employee?")
    if (!continueAdding){
      addAnotherEmployee = false;
    }
  }
  return employeesArray;
}

// Display the average salary
// TODO: Calculate and display the average salary
// => is an arrow function. Instead of using a traditional function expression, you can use an arrow function.
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  // this allows the salary to be displayed in the table

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is: ${(totalSalary / employeesArray.length).toLocaleString(undefined, {maximumFractionDigits: 2})}`);
}
// MaximumFractionDigits returns the maximum number of digits allowed in the fraction portion of a number.

// Select a random employee
  // TODO: Select and display a random employee
  //math.random selects a random number within the array of employees and displays the congratulations message
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to the ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

  //This sorts the names of employees in aphabetical order using their last name
  employeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return employeesArray;
}
//localecompare method returns a number which indicates whether a referene string belongs alphabetically before, or after, or is the same as the given string in sort order.


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
