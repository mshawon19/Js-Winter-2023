/**
 * Due date: Jan-26 (Eod)
 */

const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
 */

let sentence1_replace = sentence1.replace(/A/ig, 'Queen and King');
console.log(` Q1) sentence after replace /A/ig with 'Queen and King' -> ${sentence1_replace}`);


const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/**
 * Q2: print the result of following in console:
 * 1. length of sentence2-String
 * 2. does sentence2 start with 'COM' (ignoring cases)                      -> boolean
 * 3. does sentence2 endsWith 'Google news' (ignoring cases)                -> boolean
 * 4. does word 'from' present only once in sentence2 (ignoring cases)      -> boolean
 * 5. the character present at second-last index in the String
 */


let sentence2Length = sentence2.length;       /* Q2) 1. length of sentence2-String */
console.log(`Q2) 1. sentence2Length is ${sentence2.length}`); /* Sentence2 length = 98 */


/* Q2) 2. does sentence2 start with 'COM' (ignoring cases) 
Steps: lowercase sentece2 -> lower case given pattern 
*/
let sentence2_lowerCase = sentence2.toLowerCase();
let pattern_lowercase = 'COM'.toLowerCase();
let doesStartswith_sentence2 = sentence2_lowerCase.startsWith(pattern_lowercase); 
console.log(`2. does senetence2 starts with "COM" (ignoring cases) -> ${doesStartswith_sentence2}`); /* True */


let sentence2_lowerCase2 = sentence2.toLowerCase();
let pattern2_lowercase = 'Google new'.toLowerCase();
let doesEndsWith_sentence2 = sentence2_lowerCase2.endsWith(pattern2_lowercase);  /* Q2) 3. does sentence2 endsWith 'Google news' (ignoring cases) */
console.log(`3. does sentence 2 ends with "Google news"  -> ${doesEndsWith_sentence2}`); /* false  b/c condition is missing the last character "."*/

/*Q2 4. does word 'from' present only once in sentence2 (ignoring cases)? */

let sentence2_lower2case = sentence2.toLowerCase();
let pattern2_lower2case = 'from'.toLowerCase();
let senetence2_indexOf = sentence2_lower2case.indexOf('from');
let sentece2_lastIndexOf = sentence2_lower2case.lastIndexOf('from');
let is_word_PRESENT_Once = senetence2_indexOf === sentece2_lastIndexOf && senetence2_indexOf >0;
console.log (`\nis word "from" present only once -> ${is_word_PRESENT_Once}`);


/* Q2) 5. the character present at second-last index in the String */
let secondLastIdex_sentence2 = sentence2.length - 2;
console.log(`\n5.sencod last index from sentence2 is -> ${secondLastIdex_sentence2}`); /* 96 */

let secondLastCharacter = sentence2.charAt(96);
console.log(`second last character from sentence2 is -> ${secondLastCharacter}`); /* s */ 









