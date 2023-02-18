//Shawon's Homework7.js

/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */
console.log(`Q1. Create function to get the smallest value in the given string-array. `);
let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars'];

function getSmallestStringValue(planets) {
    let smalleststring =planets[0];
    for(let smallest of planets){
      if(smallest.length !== 0){
        if(smallest.length<smalleststring.length){
            smalleststring=smallest;
        }
      }
    }
    return smalleststring;
}
console.log(`\nGiven string-array Planets:[${planets}] ; \nSmallest string value in Planest is -> ${getSmallestStringValue(['earTh', 'meRCUrY', 'VeNUs', 'Mars'])}`);

/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */
console.log(`\nQ2:Create function to get the first value in the numbers-array greater than 10`);
let numArr = [1, 3, 3, 6, 11, 10, 7, 23, 1, 20];
function getFirstgtrvalue() { 
let gtrthn10 = numArr[0];
for (let X = 0; X < numArr.length; X++) {
    if (numArr[X] > 10) {
        gtrthn10 = numArr[X];
        break
    }
}
return gtrthn10
}
console.log(`\n Given numArr is ${numArr} ; \nfirst value greater than 10 in numArr is -> ${getFirstgtrvalue([1, 23, 3, -6, 11, 10, -7, 23, -1, 20])}`);
/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */
console.log(`\nQ3:Create function to get the minimum value in the given numbers-array`);
let Nums = [1, 23, 3, -6, 10, -7, 23, -1, 20];

function getMinimumValue(Nums) {
    let miniNum = Nums[0];
for (let N = 0; N < Nums.length; N++) {
    if (Nums[N] < miniNum) {
        miniNum = Nums[N];
    }
}
return miniNum
}
console.log(`\nNums:[${Nums}] ; \nMinimum value in Nums is -> ${getMinimumValue([1, 23, 3, -6, 10, -7, 23, -1, 20])}`);