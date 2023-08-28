  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

/* 
    As an advance javascript developer you should always specify 
    the intial value to use for the accumulator in order to be explicit
    with you intentions.To explain exactly what you want the code to achieve.
*/
// Summing an array of numbers:
const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total:', acc + curr
  );
  return acc + curr}, 12); // after the curly braces I added an initial value that the callback
  // funtion will use to start the calculation of the current value with the 
  // and adding the result to the next current value until there is nothing left to add.
  // ACC stand for accumulator and curr current value
  console.log(sum);

/*
In the example above, the function execute the callback 4 times, why is that?
  the reason is that the REDUCE method actually takes a second parameter:
                  -(the initial value to use as the accumulator)-
  So, if you don't specify an initial value, the accumulator will default to the first element in
  the array.   In this case that element was zero, and the accumulation process starts with
  the second element in the array, so 1 is added to 0.

--However, if I explicitly specify an initial value to use as the accumulator, then
  the callback function will execute five times, beginning with the first element of the array,
  and using out explicit initial value as the accumulator.
*/ 

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
