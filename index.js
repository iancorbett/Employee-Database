/*IMPORTANT INFO:
 more information about my sources and the various contributions from the people who 
 helped me will be available in the read me page.There is currently one bug that home 
 aware of this bug is that the app is currently unable to add multiple employees at the same 
time and must be done one at a time after answering all the prompts. 

YOU MUST HIT THE REFRESH BUTTON in the top left corner of the page,
 
and then when you hit the add employees button again, the employee info
 will populate in the chart. The choose random employee function works but it is currently 
 hardcoded and only works with 10 employees or less*/



// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// we are using the query selector to grab the HTML element with the class of '#add-employees-btn'.

// Collect employee data
function collectEmployees() {
  // TODO: Get user input to create and return an array of employee objects
  document.getElementById('add-employees-btn').addEventListener("click", function() {
  // here we are adding an event listener that listens for a click and when it detects a click 
  //it runs an anonymous function
  while(currentEmployee = true) {
// we are using a while loop and later we will set current employee to equal false so that 
//we do not end up with an infinite loop

const employee = {};
/* here I am creating an employee object
 we will take the answers of the prompts and save them as properties of this employee object
 these properties will include first name last name and salary*/

  const firstName = prompt("Enter First Name")
  // Upon clicking the add employee button a prompt will appear asking to enter the first name
  //console.log(response);
  employee.firstName = firstName;
// The user input to this prompt will be saved as the employees first name property

  if (firstName != '') {
    // line 39 ensures that an input must be given in order for the next prompt to appear.
    const lastName = prompt("Enter Last Name");
    // after entering the first name and hitting done a second prompt will appear asking for the last name
    //console.log(response2);
    employee.lastName = lastName;
    // the user input to this prompt will be saved as the employees last name property
    
    if (lastName != '') {
      let salary = prompt("Enter Salary");
      // here we are creating a property called salary
       salary = Number(salary);
      /* here we are making sure that the salary input is saved as a number and not a string
      // if the salary were to be saved as a string and not a number calculations would not be 
      able to be done*/
       //console.log(typeof(salary));

       if (isNaN(salary)) {
        alert('Not a number')
        break
        // if the user input for salary is not a number, an alert will be returned saying 
        //not a number and then a break causes the function to end.
       }

      //console.log(response3);
      employee.salary = salary;
      // here we are saving the user input for salary as a property of the employee object

    if (salary != '') {
      const yesOrNo = prompt("Thank you, employee has been added. Would you like to add another employee?")
      //console.log(response4);

      if (yesOrNo === 'yes' || 'YES' ||'Yes') {
        // these are all the inputs that will be accepted for yes.
        //console.log('yes')
        employees.push(employee);
        // This pushes the employee object into the employees array.
        //console.log(employee);
        localStorage.setItem('employee-data', JSON.stringify(employees));
        /* on this section I received help from a tutor.
         It was the tutors idea to use the localStorage to save the employee objects
         This turns the employee data into a string and stores it in the local storage.
         before receiving helped from the tutor I was attempting to store these without using local storage
         although it was adding these objects into the array
         because it was not stored in the localStorage it was never able to actually populate on the chart.
         Therefore unless you looked in the console you are not able to see any of the information 
        of any of the employees*/
        //console.log(employees);
        currentEmployee = false;
        break
      }
    
          else if (yesOrNo !== 'yes' || 'Yes' || 'YES') {
            
          // If the user input is not yes that will return an alert saying you are all done
          alert("You are all done! Thank You!");
          employees.push(employee);
          // This pushes the employee object into the employees array
          localStorage.setItem('employee-data', JSON.stringify(employees));
          // on this section I did receive help from a tutor
          // This stores the employee object in the local storage
          //console.log(employee);
          //console.log(employees);
          break
        }
        //break
      }
      /* there is a bug in the section which is that only one person can be added at a time.
       after saving an employee object to the local storage you will have to refresh the page 
      and then hit the add employees button to get it to populate in the chart.*/
    
      

    
        }
      }
    }
  }
)

return employees;
  // This here returns the employee objects
}

const employees = JSON.parse(localStorage.getItem('employee-data')) || [];
// on this part I did receive help from a tutor name Dennis.
// This code retrieves the data that we had stored in the localStorage using the setItem function.
  


// Display the average salary
const displayAverageSalary = function(employeesArray) {
// TODO: Calculate and display the average salary
let total = 0;
// will set the initial total salary of all the employees to 0
for (const employee of employeesArray) {
  // This iterates through every employee in the employees array
  console.log(employee.salary);
  total += employee.salary;
  // for every employee the employee salary will be added to the total.
}
console.log(total / employeesArray.length);
// In order to get the average we/the total salary by the number of employees and the employees array
console.log(`The average employee salary is $${total / employeesArray.length}!`)
// This displays in the console the average employee salary
// this code uses a template literal so that the average will be different based on the input.
}




// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
let totalEmployees = 0
// set the total number of employees to 0
  for (const employee of employees) {
    // iterate through every employee in the employees array
    //console.log(employee);
    totalEmployees++;
    // Determine the total number of employees in the array
    //console.log(totalEmployees);
  }
  //put for loop
  //IMPORTANT: An error message will be displayed if there is no employee saved in local storage,
  //because first name is not defined. However, once the first employee is entered, this error is resolved.
// use the math random function to choose a random winner.
  let random = (Math.random() * employees.length)
// The master random function chooses a number between 0 and 1
// then we multiply this by the amount of employees
// This gives every employee in equal chance to win
    console.log(random);
  
    if (random < 1) {
      console.log(`${employees[0].firstName} wins!`)
    }
    else if (random > 1 && random < 2){
      console.log(`${employees[1].firstName} wins!`)
    }
    else if (random > 2 && random < 3){
      console.log(`${employees[2].firstName} wins!`)
    }
    else if (random > 3 && random < 4){
      console.log(`${employees[3].firstName} wins!`)
    }
    else if (random > 4 && random < 5){
      console.log(`${employees[4].firstName} wins!`)
    }
    else if (random > 5 && random < 6){
      console.log(`${employees[5].firstName} wins!`)
    }
    else if (random > 6 && random < 7){
      console.log(`${employees[6].firstName} wins!`)
    }
    else if (random > 7 && random < 8){
      console.log(`${employees[7].firstName} wins!`)
    }
    else if (random > 8 && random < 9){
      console.log(`${employees[8].firstName} wins!`)
    }
    else if (random > 9 && random < 10){
      console.log(`${employees[9].firstName} wins!`)
    }
    else {
      console.log('Nobody wins!');
    }
  }
// to an extent some of these are hardcoded and I was not able to figure out how to condense this code


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