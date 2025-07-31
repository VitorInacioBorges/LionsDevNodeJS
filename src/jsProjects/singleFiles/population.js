// a program that calculates the population growth of two cities A and B
// It uses a loop to simulate the growth over the years based on given growth rates.

const percentA = 3 / 100;
const percentB = 1.5 / 100;
let A = 80000;
let B = 200000;
let year = 0;

for(let i = 0; A < B; i++){
    A += A * percentA;
    B += B * percentB;
    console.log(`A population is: ${A}`);
    console.log(`B population is ${B}\n`);
    year++;
}

console.log(`It took ${year} years for A to surpass B!`);