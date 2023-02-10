console.log(`\n**Shawon's Homework6**\n`);
// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
// let str1 = 'My nAme IS shawon';
// let titleCaseStr1 = '';             // final answer must be in the variable
// code
// console.log(str1);                  // 'YOu ONlY lIVe ONcE'
// console.log(titleCaseStr1);         // 'You Only Live Once'

//code and breakdown
/**
 * my notes
 * Titlecase code using for loop
 * Step 1: Turn the entire sentence to lowercase using (.toLowercase)
 * Step 2: Split the sentence using (.split)
 * Step 3: Upper case the first letter of each word at each index zero sung substring(0,1).
 * Step 4: Use [] to select each word/string and use + to combine 
 * Step 5: Use concat to add space between words
 * 
 * For loop will be best for this question as sentence can be of any number of words.
 * 
 * let i = 0 b/c sentence cannot be less than 0, 
 * the number of words in the sentence canot be greater than the length of the sentence (  i<sentence.leght)
 * increment = i++ 
 */
console.log(`**Q1 :Convert any given sentence into Titlecase`);
let str1 = 'My nAme IS shawon';
let titleCaseStr1 = '';
console.log(`Given sentence is -> ${str1}`);
let str1_lower_split = str1.toLowerCase().split(' ');

for (let i =0;  i<=str1_lower_split.length-1; i++) {
    titleCaseStr1 = titleCaseStr1 + str1_lower_split[i].charAt(0).toUpperCase() + str1_lower_split[i].slice(1) + ' ';
    console.log(`Tittlecased sentence -> ${titleCaseStr1}`);

}

/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> 'doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
// const str2 = 'My Name Name Is Shawon';
//let reverseStr2 = '';           // final answer must be in the variable

// code logic
/**
 * Step 1: Turn the string to a array
 * Step 2: then use the reverse function on the array.
 * Step 3: Turn the array back to a string using join function 
 */
//console.log(str2);              // 'hello dear how are you doing'
//console.log(reverseStr2);       // 'doing you are how dear hello'
console.log(`\nQ2| Reverse a String (word by word)`)
const str2 = 'I like wine';

for (let index = 0; index < str2.length-1; index++) {
    reverseStr2 = str2.split(' ').reverse().join(' ');
    
}
console.log(`Original string is -> ${str2}`);
console.log(`Reversed string is -> ${reverseStr2}`)

/**
 * Q3:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues

/**
 * Logic - Breakown
 * Step 1: i has to equal to 0, i also has to be less than the length of the set of numbers in the array.
 * Step 2: Finding the sum is important as we have to use it to find the average.
 *              -> Using += the operator in for loop we can determine the sum.
 * Step 3: By simply dividing the sum by the numbers.length (the tota number of values in the array )
 * 
 * 
 */
//code
console.log(`\nQ3. Find the average of the given array.`);
let numbers = [2,4,6,8,10,12];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let avg = sum / numbers.length;
console.log(`Given numbers are -> ${numbers}`);
console.log(`The average of numbers is -> ${avg}`);

/**
 * Q4:
 * Create abbreviation for a given sentence.
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY ONcE' ->  'YLOO'
 * 'gooD mORNIng' -> 'GM'
 * 'aPPlE bANAna chErRY' -> 'ABC'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
 * 'qUEen' -> 'Q'
 */
           // final answer must be in the variable
// code
//console.log(str4);          // 'apple banana cherry'
//console.log(abbr);          // ABC

console.log(`\nQ4: Create abbreviation for a given sentence.`);
const str4 = 'your Patience is Your power';
let str4_split = str4.toUpperCase().split(' ');
let abbr = '';   
for (let i = 0; i < str4_split.length-1; i++) {
    abbr = abbr + str4_split[i].charAt(0);
    
}
console.log(`Abbreviation of str4 is -> ${abbr}`);


/**
 * Q5:
 * Convert all string values in the given array into Uppercase
 * 
 * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
 * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
 * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
 * 
 * 
 * Note: final answer must be in the SAME variable (arr5)
 */

//console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
// code
//console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']

console.log(`\nQ5: Convert all string values in the given array into Uppercase`);
let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];

for (let a = 0; a < arr5.length; a++) {
    arr5[a] = arr5[a].toUpperCase();
    
}
console.log(`All values in uppercase -> ${arr5}`);