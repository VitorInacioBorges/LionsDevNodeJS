const showMenu = require('./showMenu');
const employees = require('../data/employees');
const askQuestion = require('./askQuestion');

async function register(){
    showMenu();
    const name = await askQuestion('Type the employees name: ');
    const job = await askQuestion('Type its job: ');
    const salary = await askQuestion('Type its salary: ');
    if(salary <= 0 || isNaN(salary)){
        console.log('Invalid salary!');
        return register();
    }

    const employee = {
        name,
        job,
        salary: parseFloat(salary)
    };

    employees.push(employee);
    console.log('Registering Complete!');
                
    const answer = await askQuestion('Need to register another employee? (y/n) ');
    if (answer.toLowerCase() == 'y') return register();
}

module.exports = register;