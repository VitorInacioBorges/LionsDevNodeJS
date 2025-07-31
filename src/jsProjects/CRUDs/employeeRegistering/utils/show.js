const employees = require('../data/employees');
const askQuestion = require('./askQuestion');

async function show(){
    if(employees.length === 0){
        console.log('No employees registered!');
    } else {
        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });
        const answer = await askQuestion('Press ANY KEY to go back');
    }
}

module.exports = show;