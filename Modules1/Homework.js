/**
let fTempIntoCTemp = (fTemp - 32) / 1.8
console.log(`\n${fTemp}°F is equals to ${fTempIntoCTemp}°C`);

// F -> K
Ex.
// T(K) = (T(°F) + 459.67)× 5/9
let fTempIntoKTemp = (fTemp + 459.67) * 5/9;
console.log(`${fTemp}°F is equals to ${fTempIntoKTemp}°K`);
*
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
/Ex.
/ F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp = 47;
 */



/**
 * C - > F
 * T(°F) = T(°C) × 9/5 + 32
 */

let cTemp = 8
let fTemp = (cTemp) * 9/5 + 32;
console.log(`${cTemp}°C is equals to ${fTemp}°F`); /* 8°C is equals to 46.4°F */

/** C -> K
 * T(K) = T(°C) + 273.15
 */
let kTemp = (cTemp) + 273.15
console.log(`${cTemp}°C is equals to ${kTemp}°K`); /** 8°C is equals to 281.15°K */


/**
 *  * K -> F
 * T(°F) = T(K) × 9/5 - 459.67
 */
let k_temp = 281.15;
let f_temp = (k_temp) * 9/5 -459.67;
console.log(`\n${k_temp}°K is equals to ${f_temp}°F `); /** 281.15°K is equals to 46.39°F*/

/**
 * K -> C
 * T(°C) = T(K) - 273.15
 */

let c_temp = (k_temp) - 273.15;
console.log(`${c_temp}°C is equals to ${k_temp}°K `);












