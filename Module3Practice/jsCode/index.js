// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


 



// Collect employee data
function collectEmployees() {
  // TODO: Get user input to create and return an array of employee objects
  document.getElementById('add-employees-btn').addEventListener("click", function() {
  while(currentPerson = true) {

const person = {};

  
  const response = prompt("Enter First Name")
  //console.log(response);
  person.firstName = response;

  if (response != '') {
    const response2 = prompt("Enter Last Name");
    //console.log(response2);
    person.lastName = response2;

    if (response2 != '') {
      let response3 = prompt("Enter Salary");
      
       response3 = +response3;
       //console.log(typeof(response3));

       if (isNaN(response3)) {
        alert('Not a number')
        break
       }

      //console.log(response3);
      person.salary = response3;
      

    if (response3 != '') {
      const response4 = prompt("Thank you, employee has been added. Would you like to add another employee?")
      //console.log(response4);

      if (response4 == 'yes') {
        console.log('yes')
        employeesArray.push(person);
        console.log(person);
        console.log(employeesArray)
        currentPerson = false;
      }

        else {
          alert("You are all done! Thank You!")
          employeesArray.push(person);
          console.log(person);
          console.log(employeesArray)
          break 
        }
      }
      
      

    
        }
      }
    }
  }
)

employeesArray = [];
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
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