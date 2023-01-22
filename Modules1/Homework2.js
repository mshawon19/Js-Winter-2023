/*
* Question-1:
 * 
 * if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
 *      assign 25 into result1
 * otherwise
 *      assign 35 into result1
 * 
 * sentence1 = 'go to home'
 * result1 = 25
 * 
 * 
 * BREAKDOWN
 * Conditon1 = if the length of sentence1 is greater than 100
 *    condition1 -> sentence1.length >= 100 
 * 
 * Condition2 = sentence1 starts with "go to"
 *    condition2 -> sentence1.startsWith('go to)
*/

/*  
Summary
let sentence length = sentence.length;
let sentence starts with = startsWith "go to"
*/

let sentence1 = 'go to home';

let result1 = sentence1.length >= 100 || sentence1.startsWith('go to') ? 25: 35;

console.log (result1);




