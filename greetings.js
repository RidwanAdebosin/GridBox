// function greetBasedOnTime() {
//     // Get the time
//     const time = new Date();
//     let greeting = "Good ";

//     // Getting the morning if the hour is before 12
//     if (time.getHours() < 12) {
//         greeting = greeting + "Morning";
//     }
//     // Getting the afternoon if the hour is after 12 but before 18
//     else if (time.getHours() < 18) {
//         greeting = greeting + "Afternoon";
//     }
//     // Getting the evening if the hour is after 18
//     else {
//         greeting = greeting + "Evening";
//     }

//     // Log the greeting to the console
//     console.log(greeting);
// };

// const Multiply = function(number){
//     for(let i = 20; i > 0; i--){

//     }

// // Call the function to execute it
// greetBasedOnTime();

const multiplesOfNum = function (num) {
  let multiple;

  //initialization, condition, decrement
  for (let i = 20; i > 0; i--) {
    multiple = num * i;

    // Check if the current multiple is even or odd
    if (multiple % 2 === 0) {
      console.log(
        `These are 20 multiples of ${num} = ${multiple} and it is an even number.`
      );
    } else {
      console.log(
        `These are 20 multiples of ${num} = ${multiple} and it is a odd number.`
      );
    }
  }
};
multiplesOfNum(9);

let validPassword = "Adebosin";
let validUsername = "Ridwan";

const loginUser = (username, password) => {
  if (username === validUsername && password === validPassword) {
    console.log(`Welcome on board ${username}`);
  } else {
    console.log("Invalid username or password");
  }
};

loginUser("Ridwan", "Adebosin");

let word = "rotator";

const isItPalindrome = (direction) => {
  let left = 0;
  let right = direction.length - 1;
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isItPalindrome(word));

// Use the Nonmutative JavaScript array methods with 3 examples each.

const students = [
  { firstName: "Ridwan", lastName: "Adebosin", age: 21 },
  { firstName: "Tyson", lastName: "Furry", age: 19 },
  { firstName: "Johnny", lastName: "Bravo", age: 9 },
];

// Array.map() creates a new array by applying a function to each element in the original array
let studentFullNameWithAge = students.map(
  (student) => `${student.firstName} ${student.lastName} ${student.age}`
);
console.log(studentFullNameWithAge);

// Array.filter() creates a new array with elements that pass a given condition
let studentsAboveAge18 = students.filter((student) => student.age >= 18);
console.log(
  "The following students are above the age of 18:",
  studentsAboveAge18
);

// Array.slice() extracts a section of the array and returns a new array
let studentThatTopsTheChart = students.slice(0, 1);
console.log(studentThatTopsTheChart);

const grades = [1, 2, 3, 4, 5];
const states = ["Lagos", "Delta", "Rivers", "Edo"];

let gradesWithLetter = grades.map((grade) => grade + "A");
// console.log(gradesWithLetter);

let stateWithGrades = grades.concat(states);
// console.log(stateWithGrades);

let gradesToString = grades.toString();
// console.log(gradesToString);

// Question 1:
// Write a function that given two arrays, returns a new array containing elements that are present in both arrays.

function commmonNumbers(array1, array2) {
  let commmonNumbers = array1.filter((element) => array2.includes(element));
  return commmonNumbers;
}

const commonElements = commmonNumbers([1, 2, 3, 4, 5, 0], [2, 5, 7, 8, 11, 0])
console.log(commonElements);

// Question 2:
// Write a function that given an array of strings, return a new array with only 
// the strings that have a length greater than 5.

const stringsGreaterThanFive = (arrayElements) => {
  let stringsGreaterThanFive = arrayElements.filter((element) => element.length > 5);
  return stringsGreaterThanFive;
}

const arrayOfStringsGreaterThanFive = stringsGreaterThanFive(["Ridwan", "Chuks", "Adewale", "Tony"]);
console.log(arrayOfStringsGreaterThanFive)

// Question 3:
// Write a function that uses the reduce() method to calculate the sum of an array of numbers.
const sumOfNumbers = (arrayOfNumbers) => {
  let sumOfNumbers = arrayOfNumbers.reduce((acc, currValue) => acc + currValue, 0 );
  return sumOfNumbers;
}
console.log(sumOfNumbers[2, 3, 5, 7, 10])

// Question 4:
// Use the find() method to find the first object in an array that meets a certain condition.

// Question 5:
// Write a function that uses the some() method to check if at least one element in an array meets a certain condition.

// Question 6:
// Use the every() method to check if all elements in an array meet a certain condition.

// Question 7:
// Write a function that when given an array of strings, returns a new array with only the strings that start with a vowel.

// Question 8:
// Write a function that when given an array of numbers, returns a new array with the elements sorted in descending order.

// Question 9:
// Write a function that uses the takes to arrays as input and returns the combination of the two arrays.

// Question 10:
// Write a function that given an array of strings and a string containing one letter e.g 'a', returns a new array with only the strings that contain the letter 'a'.

// Question 11:
// Write a function that takes an array of strings and returns the shortest word.
