// A program that manages employee records
// allowing registration, removal, viewing, editing, and finding highest/lowest salaries.
// It uses an array to store employee objects and provides a menu for user interaction.
// The program ensures that inputs are valid and provides feedback to the user.
// It uses the readline module for input/output operations.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const employees = [];

function showMenu(){
    console.clear();
    console.log(`
    ======== MANAGEMENT SYSTEM ========
    1 - Register Employee
    2 - Remove Employee's Registering
    3 - Show Employee's Registers
    4 - Edit Employee's Registering
    5 - Highest and Lowest Employee's Salary
    6 - Close
    `);
}

function menuInput(){
    showMenu();
    rl.question('Choose an option => ', (input) => {
        input = parseInt(input);
        switch(input){
            case 1: 
                register();
            case 2: 
                remove(); 
                break;
            case 3: 
                show(); 
                break;
            case 4: 
                edit(); 
                break;
            case 5: 
                highest_lowest(); 
                break;
            case 6:
                rl.close();
                break;
            default:
                menuInput();
                console.log('\nInvalid Option.');
        }
    });
}

function register(){
    showMenu();
    rl.question(`Type the employee's name: `, (name) => {
        rl.question(`Type it's job: `, (job) => {
            rl.question(`Type it's salary: `, (salary) => {
                if(salary <= 0 || isNaN(salary)){
                    console.log('Invalid salary!');
                    register();
                }

                const employee = {
                    name,
                    job,
                    salary: parseFloat(salary)
                };

                employees.push(employee);
                console.log('Registering Complete!');
                
                rl.question('Need to register another employee? (y/n) ', (answer) => {
                    (answer.toLowerCase() == 'y') ? register() : menuInput(); 
                });
            });
        });
    });
}

function remove(){
    if(employees.length === 0){
        console.log('No employees registered!');
        menuInput();
    } else {
        showMenu();
        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });
        rl.question('Type the number of the employee you want to delete => ', (deleteNum) => {
            const index = parseInt(deleteNum) - 1;
            if(isNaN(index) || (index < 0 || index >= employees.length)){
                console.log('Invalid Index!');
                remove();
            } else {
                const [removed] = employees.splice(index);
                rl.question('', menuInput);
                console.log('Employee Removed Succesfully!');
            }
        });
    }
}

function show(){
    if(employees.length === 0){
        menuInput();
        console.log('No employees registered!');
    } else {
        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });
    }
    rl.question('', menuInput);
}

function edit(){
    if(employees.length === 0){
        menuInput();
        console.log('No employees registered!');
    } else {
        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });
    }
    rl.question(`Choose employee's number to edit => `, (number) => {
        const index = parseInt(number) - 1;
        if(index < 0 || index >= employees.length){
            console.log('Invalid number!\nPress enter to go back to the menu.');
            rl.question('', menuInput);
        }
        rl.question(`Type the employee's new name: `, (name) => {
            rl.question(`Type it's new job: `, (job) => {
                rl.question(`Type it's new salary: `, (salary) => {
                    if(salary <= 0 || isNaN(salary)){
                        console.log('Invalid salary!');
                        return edit();
                    }
    
                    employees[index] = {
                        name: name,
                        job: job,
                        salary: parseFloat(salary)
                    };

                    rl.question('Need to edit another employee? (y/n) ', (answer) => {
                        (answer.toLowerCase() == 'y') ? edit() : menuInput();
                    });
                });
            });
        });
    });
}

function highest_lowest(){
    if(employees.length === 0){
        menuInput();
        console.log('No employees registered!');
    } else {
        let highest = 0;
        let lowest = 0;
        for(let i=0; i<employees.length; i++){
            if(employees[i].salary >= highest) highest = i;
            if(employees[i].salary <= lowest) lowest = i;
        }
        console.log(`\nHighest Salary: ${employees[highest].name}'s\nSalary = ${employees[highest].salary}`);
        console.log(`\nLowest Salary: ${employees[lowest].name}'s\nSalary = ${employees[lowest].salary}`);
    }
    rl.question('', menuInput);
}
menuInput();