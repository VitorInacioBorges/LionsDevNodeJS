const employees = require('../data/employees');
const askQuestion = require('./askQuestion');

async function highest_lowest(){
    if(employees.length === 0){
        console.log('No employees registered!');
    } else {
        let highest = 0;
        let lowest = 0;

        for(let i=0; i<employees.length; i++){
            if(employees[i].salary >= highest) return highest = i;
            if(employees[i].salary <= lowest) return lowest = i;
        }

        console.log(`\nHighest Salary: ${employees[highest].name}'s\nSalary = ${employees[highest].salary}`);
        console.log(`\nLowest Salary: ${employees[lowest].name}'s\nSalary = ${employees[lowest].salary}`);
        
        const answer = await askQuestion('Press ANY KEY to go back');
    }
}

module.exports = highest_lowest;