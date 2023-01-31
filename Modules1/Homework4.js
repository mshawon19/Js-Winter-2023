/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */

/*Break down
coditions are username1 MUST have ONLY(=) 2 names(frist & last)
so length of username1 must have 2 values
*/


let userName1 = 'Md Shawon';
let split_username1 = userName1.split(' ');
let userName1_length = split_username1.length === 2;
console.log(`the user has provided only first name and last Name? -> ${userName1_length} \n`);



/**
 * Q2: Create abbreviation for a 4-word sentence
 * sentence1 = mY Name iS ShawoN
 */
let sentence1 = 'mY Name iS Shawon'
let lowerCase_sentence1 = sentence1.toLowerCase();
let split_sentence1 = lowerCase_sentence1.split(' ');
split_sentence1[0] = split_sentence1[0].substring(0,1).toUpperCase() + split_sentence1[0].substring(1);
split_sentence1[1] = split_sentence1[1].substring(0,1).toUpperCase() + split_sentence1[1].substring(1);
split_sentence1[2] = split_sentence1[2].substring(0,1).toUpperCase() + split_sentence1[2].substring(1);
split_sentence1[3] = split_sentence1[3].substring(0,1).toUpperCase() + split_sentence1[3].substring(1);

sentence1 = split_sentence1[0] + ' ' + split_sentence1[1] + ' ' + split_sentence1[2] + ' ' + split_sentence1[3];
console.log(`${sentence1}`);

let abv_sentence1 = split_sentence1[0].charAt(0)+split_sentence1[1].charAt(0)+split_sentence1[2].charAt(0)+split_sentence1[3].charAt(0);
console.log(`Abbreivation for sentence1 is -> ${abv_sentence1}`)



/**
 * Q3: Count the number of words in the sentence
 */
let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
let split_sentence3 = sentence3.split(' ');
let length_sentence3 = split_sentence3.length;
console.log(`\nLength of sentence3 is -> ${length_sentence3}`);      /* Sentence 3 has 14 words*/


