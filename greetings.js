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

const multiplesOfNum = function(num) {
    let multiple;

    //initialization, condition, decrement
    for(let i = 20; i > 0; i--) {
         multiple = num * i;

        // Check if the current multiple is even or odd
        if(multiple % 2 === 0){
            console.log(`These are 20 multiples of ${num} = ${multiple} and it is an even number.`);
        } else{
            console.log(`These are 20 multiples of ${num} = ${multiple} and it is a odd number.`);
        }
    }
};
multiplesOfNum(9);


let validPassword = "Adebosin";
let validUsername = "Ridwan";

const loginUser = (username, password) => {
    if(username === validUsername && password === validPassword){
        console.log(`Welcome on board ${username}`);
    } else {
        console.log("Invalid username or password");
    }
}

loginUser("Ridwan", "Adebosin");

let word = "rotator";

const isItPalindrome = (direction) => {
    let left = 0;
    let right = direction.length-1;
    while(left < right){
        if(word[left] !== word[right]){
            return false
        } left++;
        right--;
    }
    return true
    }

console.log(isItPalindrome(word));

// Use the Nonmutative JavaScript array methods with 3 examples each.



// Array.map() creates a new array by applying a function to each element in the original array
let students = [
    {firstName : "Ridwan", lastName: "Adebosin", age: 21},
    {firstName : "Tyson", lastName: "Furry", age: 19}
    {firstName : "Johnny", lastName: "Bravo", age: 9},
]

//applying the map method to add both firstName and lastName together
let studentFullNameWithAge = students.map((student) => `${student.firstName} ${student.lastName} ${student.age}`);
console.log(studentFullNameWithAge);


// Array.filter() creates a new array with elements that pass a given condition
let studentsAboveAge18 = students.filter((student) => student.age >= 18)
console.log("The following students are above the age of 18:", studentsAboveAge18)

// Array.slice() extracts a section of the array and returns a new array
let studentBelowAge18 = students.slice(0, 1);
console.log(studentBelowAge18);



