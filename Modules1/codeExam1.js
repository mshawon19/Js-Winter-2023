/**
 * Shawon's Code Exam 1
 */


/**
 * Q1: Write code to remove given value from the given array
 * Points: 30
*/
console.log('\nQ1');
const arr1 = [21, 32, 12, 43, 45, 65, 23, 34];
const num1 = 32;
let arr1Result = [];        // final ans should be in this variable (get values in arr1Result from arr1 which are NOT equals to num1)

const indexOfnum1 = arr1.indexOf(num1);
if (indexOfnum1 > -1) {
    arr1Result = arr1.splice(indexOfnum1, indexOfnum1);
}

// code
console.log(`New arr1 after removing ${arr1Result} is ${arr1}`);          
console.log(`Removed value is ${arr1Result}`);    

/**
 * Q2: Write code to calculate the total of all balances in the accounts-array
 * Points: 40
 */
console.log(`\nQ2 - Write code to calculate the total of all balances in the accounts-array`);
const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
var total = 0;
for (let index = 0; index < accounts.length; index++) {
    const element = accounts[index];
    var sum = element.balance;
    total += sum  
}

console.log(`Total of all accounts is ${total}`)

/**
 * Q3.
 * Write code to find the index of second-occurrence of 'baSeBalL' (ignoring cases) in the arr3-array
 * if baseball is not present twice or more in the array; code should ans -1
 * otherwise code should ans the index of second-occurrence of baseball in arr3-array
 * Points: 30
 */
console.log('\nQ3');

var arr3= ['Baseball', 'FOOTBALL', 'rUGBy', 'sOCcEr', 'baSeBall', 'BaskETBall', 'baseball', 'mARAthon'];
var matches = []
for (var i=0; i<arr3.length; i++){
     var arr4 = arr3[i].toLowerCase ()
     if (arr4 === 'baseball') {
        matches.push(i);
    }
}

const arr3Result = matches[1]
console.log(`Result is index ${arr3Result}`);
console.log(`Given value baseball is present in idex ${matches}`);