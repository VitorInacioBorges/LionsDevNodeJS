// A program that verifies the sum and average of even and odd numbers from 0 to 999
// It counts the total number of even and odd numbers, calculates their sums, and computes their averages.

let contEven=0;
let contOdd=0;
let totalOdd=0;
let totalEven=0;

for(let i=0; i<1000; i++){
    if(i % 2 == 0){
        contEven++;
        totalEven += i;
    } else {
        contOdd++;
        totalOdd += i;
    }
}

let averageOdd = totalOdd / contOdd;
let averageEven = totalEven / contEven;

console.clear();
console.log(`The total of EVEN numbers is ${contEven}\nThe total of ODD numbers is ${contOdd}\nThe sum of the EVEN is ${totalEven}\nThe sum of the ODD is ${totalOdd}\nThe EVENs average is ${averageEven}\nThe ODDs average is ${averageOdd}\n\nTherefore...\n`);

if(totalEven > totalOdd){
    console.log("The sum of the EVEN is bigger than the sum of the ODD!");
} else {
    console.log("The sum of the ODD is bigger than the sum of the EVEN!");
}
if(averageEven > averageOdd){
    console.log("The average of the EVEN is bigger than the average of the ODD!");
} else {
    console.log("The average of the ODD is bigger than the average of the EVEN!");
}