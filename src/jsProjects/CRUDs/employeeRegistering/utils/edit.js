const employees = require('../data/employees');
const askQuestion = require('./askQuestion');

async function edit(){
    if(employees.length === 0){
        console.log('No employees registered!');
    } else {
        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });
    }
    const number = await askQuestion(`Choose employee's number to edit => `);
    const index = parseInt(number) - 1;

    if(index < 0 || index >= employees.length){
        console.log('Invalid number!\nPress enter to go back to the menu.');
    }

    const name = await askQuestion(`Type the employee's new name: `);
    const job = await askQuestion(`Type the employee's new job: `);
    const salary = await askQuestion(`Type the employee's new salary: `);
    
    if(salary <= 0 || isNaN(salary)){
        console.log('Invalid salary!');
        return edit();
    }

    employees[index] = {
        name: name,
        job: job,
        salary: parseFloat(salary)
    };

    const answer = await askQuestion('Need to edit another employee? (y/n) ');
    if (answer.toLowerCase() == 'y') edit();
}

module.exports = edit;