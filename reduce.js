  
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

//  you can also write it as a one line code 
const numbers = [0,1,2,3,4,5,6,7,8];
let sum1 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

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
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience); 
// here we use the dot notation to get the yrsExperience like that curr.yrsExperience
// always specify the initial value you want to the accumulator to start at.

// Grouping by a property, and totaling it too

/*
In the example below I use the longer arrow function form which includes curly braces which the
boundaries of the callback function and the 2nd set of curly braces after the comma is our
initial value , an empty object. This what the accumulator will be on the first pass. 
Right now the accumulator is an empty object and curr is the first team menber in the array.
So, to create a property in my object for developer, I need to get curr.profession.
Now, I need to check if the key already exist, so, i'll set it to equal to curr.yrsExperience
This means the first time we see a new profession, that property will be added into the accumulator and 
its value will be set to the team member's experience.
*/ 
// {Developer: 12, Designer: 4} <-- this is what we want as a result!
let exoerienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return 'Max:', acc;
}, {});

console.log(exoerienceByProfession); // as expected it works

// now let's add a new menber

// reduce challenge 
let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, curr) => {
  acc = acc.max > curr.results.english ? acc: {name:curr.name, max:curr.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring 
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
  if(max < english) {
      acc = {name:n, max: english};
  }
  return acc;
  }, {name: '', max: 0});
  
console.log(biggest);
*/

