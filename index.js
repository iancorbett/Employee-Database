// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


 



// Collect employee data
function collectEmployees() {
  // TODO: Get user input to create and return an array of employee objects
  document.getElementById('add-employees-btn').addEventListener("click", function() {
  while(currentEmployee = true) {
/* here I added an event listener that listens for a click. When the add employees button is clicked, a function is run.   */
const employee = {};

  
  const firstName = prompt("Enter First Name")
  //console.log(response);
  employee.firstName = firstName;

  if (firstName != '') {
    const lastName = prompt("Enter Last Name");
    //console.log(response2);
    employee.lastName = lastName;

    if (lastName != '') {
      let salary = prompt("Enter Salary");
      
       salary = Number(salary);
       console.log(typeof(salary));

       if (isNaN(salary)) {
        alert('Not a number')
        break
       }

      //console.log(response3);
      employee.salary = salary;
      

    if (salary != '') {
      const yesOrNo = prompt("Thank you, employee has been added. Would you like to add another employee?")
      //console.log(response4);

      if (yesOrNo === 'yes') {
        //console.log('yes')
        employees.push(employee);
        //console.log(employee);
        localStorage.setItem('employee-data', JSON.stringify(employees));
        console.log(employees);
        currentEmployee = false;
      }

        else {
          alert("You are all done! Thank You!");
          employees.push(employee);
          localStorage.setItem('employee-data', JSON.stringify(employees));
          //console.log(employee);
          console.log(employees);
          break
        }
        
      }
      
      

    
        }
      }
    }
  }
)

return employees;
}

const employees = JSON.parse(localStorage.getItem('employee-data')) || [];

  //console.log('The average employee salary is $55000!');


// Display the average salary
const displayAverageSalary = function(employeesArray) {
// TODO: Calculate and display the average salary
let total = 0;
for (const employee of employeesArray) {
  console.log(employee.salary);
  total += employee.salary;
}
console.log(total / employeesArray.length);
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
let totalEmployees = 0
  for (const employee of employees) {
    console.log(employee);
    totalEmployees++;
    console.log(totalEmployees);
  }
  //put for loop
  let random = (Math.random() * employees.length)
    console.log(random);
  
    if (random < 1) {
      console.log("Ian wins!")
    }
    else {
      console.log("Sylvia wins!")
    }
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
  displayAverageSalary(employees);
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