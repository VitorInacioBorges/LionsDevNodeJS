const askQuestion = require('./askQuestion');
const employees = require('../data/employees');
const showMenu = require('./showMenu');

async function remove(){
    if(employees.length === 0){
        console.log('No employees registered!');
    } else {
        showMenu();

        console.log('\n======== EMPLOYEES REGISTERED ========');
        employees.forEach((employee, index) => {
            console.log(`${index + 1} - Name: ${employee.name}, Job: ${employee.job}, Salary: ${employee.salary}.`);
        });

        const deleteNum = await askQuestion('Type the number of the employee you want to delete => ');
        const index = parseInt(deleteNum) - 1;

        if(isNaN(index) || (index < 0 || index >= employees.length)){
            console.log('Invalid Index!');
            remove();
        } else {
            const [removed] = employees.splice(index);
            console.log('Employee Removed Succesfully!');
        }
    }
}

module.exports = remove;