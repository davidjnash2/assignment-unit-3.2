console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++){
  console.log(i);
} // need to increase the '<' max to 6

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++){
  console.log(i);
} //need to assign starting integer value to '3', & set max '<' value to 6

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=1; i<11; i++){
  if (i % 2 === 0){
  console.log(i);
  }
} // changes: start 'i' at '1'; '<' max to '11'; &
  // add 'if' conditional using '%2' to calculate even numbers and then log them only


// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>=0; i--){
  console.log(i);
}//same formula as before, but instead 'i' starts at '5', min value is '<=0', and decrement integer


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i=0; i<stars.length; i++){
  console.log(stars[i]);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i=0;
while (i<stars.length){
  console.log(stars[i]);
  i++;
}//used 'i' to assign value to array items, set max value for 'i' at less than array 
 //length, log each 'i' of array, and increment 'i' so that it runs through full array

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i=0;
while (i<=5){
  console.log(i);
  i++;
} //re-set 'i' at 0, did not/could not use 'let' statement again since it was used on 
  //line 60, but was able to declare new(same) value for same variable name w/out 'let'
  //set 'when' to run for 'i' values less than or equal to 5
  //increment 'i'

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
