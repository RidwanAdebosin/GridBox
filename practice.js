
// Question 1:
// Write a function that given two arrays, returns a new array containing elements that are present in both arrays.
function getCommonElement(array1, array2) {
   let commmonElement = array1.filter((element) => array2.includes(element))
   return commmonElement;
}
console.log(getCommonElement([1, 2, 3, 4, 0], [2, 3, 5, 0]));


// Question 2:
// Write a function that given an array of strings, return a new array with only the strings that have a length greater than 5.
function getArrayOfStrings(arrayOfStrings, secondArray) {
    let stringGreaterThanFive = arrayOfStrings.filter((element) => element.length > 5);
    let stringGreaterThanFiveSecond = secondArray.filter((element) => element.length > 5);
    return stringGreaterThanFive.concat(stringGreaterThanFiveSecond);
};
console.log(getArrayOfStrings(["Emmanuel", "Tobi", "Vick", "Folawiyo"], ["Yepa", "Dolla", "Benjamin", "Jet"]));


// Question 3:
// Write a function that uses the reduce() method to calculate the sum of an array of numbers.

function getTotalSumofNumbers(arrayOfNumbers) {
    let sumOfNumbers = arrayOfNumbers.reduce((acc, currValue) => acc + currValue, 0)
    return sumOfNumbers;
};
console.log(getTotalSumofNumbers([1, 2, 3, 4, 5]))


// Question 4:
// Use the find() method to find the first object in an array that meets a certain condition.
const playersStats = [
    {firstname: "Cristiano", lastName: "Ronaldo", goalsScored : 55},
    {firstname: "Lionel", lastName: "Messi", goalsScored : 85},
    {firstname: "Kylian", lastName: "Mbbape", goalsScored : 40},
]

let worldBest = playersStats.find((playerStats) => playerStats.goalsScored > 70);
console.log(worldBest);

// Question 5:
// Write a function that uses the some() method to check if at least one element in an array meets a certain condition.
const getElement = (arrayOfElements) => {
 let elementThatMeetCriteria = arrayOfElements.some((element) => typeof element === "number");
 return elementThatMeetCriteria;
}

console.log(getElement(["Lagos", "Calabar", 12567128, "Cassava"]));


// Question 6:
// Use the every() method to check if all elements in an array meet a certain condition.
const meetCriteria = (arrayOfElements) => {
    let allElementMeetCriteria = arrayOfElements.every((element) => typeof element === "string");
    return allElementMeetCriteria;
   }
   
   console.log(meetCriteria(["Lagos", "Calabar", "12567128", "Cassava"]));

// Question 7:
// Write a function that when given an array of strings, returns a new array with only the strings that start with a vowel.
const elementStartWIthVowel = (arrayOfElements) => {
    let vowels = ["A", "E", "I", "O", "U"];
    let elementThatMeetCriteria = arrayOfElements.filter((element) => vowels.includes(element.charAt(0)));
    return elementThatMeetCriteria;
};
console.log(elementStartWIthVowel(["Canada", "USA", "Denmark", "Ghana", "India", "England"]))

// Question 8:
// Write a function that when given an array of numbers, returns a new array with the elements sorted in descending order.
const sortInDescendingOrder = (arrayOfNumbers) => {
    let sortedArrays = arrayOfNumbers.sort((a, b) => b - a);
    return sortedArrays;
};
console.log(sortInDescendingOrder([4, 5, 1, 0, 8, -2, -5 , 8]))

// Question 9:
// Write a function that takes two arrays as input and returns the combination of the two arrays.
// function concatElements(array1, array2) {
//     let addedElements = array1.concat(array2)
//     return addedElements;
//  }
//  console.log(concatElements([1, 2, 3, 4, 0], [2, 3, 5, 0]));
const concatArray = (array1, array2) => {
    let addedElements = array1.concat(array2)
    return addedElements;
}
console.log(concatArray([1, 2, 3, 4, 0], [2, 3, 5, 0]));

// Question 10:
// Write a function that given an array of strings and a string containing one letter 
// e.g 'a', returns a new array with only the strings that contain the letter 'a'.
const getElementWithLetterB = (arrayOfElements) => {
 let getLetterB = arrayOfElements.filter((element) => element.includes("B"));
 return getLetterB;
}
console.log(getElementWithLetterB(["Ago", "Kate","Benue", "Bamba", "Kathrina"]))

// Question 11:
// Write a function that takes an array of strings and returns the shortest word.
const getShortestWord = (arrayOfElements) => {
    let shortestWord = arrayOfElements.reduce((a, b) => a.length < b.length ? a : b)
    return shortestWord;
 }
 console.log(getShortestWord(["Goat","Elephant", "Dog", "Lion"]));


 

//  const db = [
//     { name: "Cristiano", password: "Ronaldo", role: "admin" },
//     { name: "Lionel", password: "Messi", role: "student" },
//     { name: "Kylian", password: "Mbbape", role: "student" },
// ];

// function updatedUser(username, password, nameOfUpdateTarget, property, updatedValue) {
//     // Check if the username and password match
//     const user = db.find(user => user.name === username && user.password === password);
//     if (user) {
//         console.log("Logged in successfully");
//     } else {
//         console.log("Invalid username or password.");
//     }
    
   
//     if (user?.role === "admin") {
//         // Admin can perform specic actions
//         console.log("Admin privileges granted.");

//         // Additional logic for updating user information
//         let userToUpdate = db.find(user => user.name === nameOfUpdateTarget);

//         if (userToUpdate) {
//             userToUpdate.password = updatedValue;
//             // return console.log("Use updated:", userToUpdate)
//             return ("User updated:", userToUpdate = updatedValue);
//         } else {
//             console.log("User not found for update.");
//         }
//     } else {
//         console.log("You do not have permission to perform this action.");
//     }
//     return updatedUser;
//     }

//     updatedUser("Cristiano", "Ronaldo", "Cristiano", "password", "Goat");
//     console.log(db[0])


// Initial database containing user information
let db = [
    {name: "Ik", password: "Ik123", role: "admin"},
    {name: "Uche", password: "Uche123", role: "admin"},
    {name: "Paul", password: "Paul123", role: "admin"},
    {name: "John", password: "John123", role: "student"},
    {name: "Godwin", password: "Godwin123", role: "student"},
    {name: "Amaka", password: "Amaka123", role: "student"},
];

// Function to update user's property in the database
const updateUser = (userName, password, user, prop, value) => {
    // Using findIndex to check through the objects in the array if the name value matches the logged-in username and password
    //finding if the user exist
    if(db.findIndex((e) => e.name === userName) !== -1 && db.findIndex((e) => e.password === password) !== -1){
        // Let's find the index of the user with matching username and password then assign the index to it
        let indexName = db.findIndex((e) => e.name === userName);
        let indexPassword = db.findIndex((e) => e.password === password);
        //
        // firstly, let's check if the userName and Password mathes then check If the user has admin role, update the user's property
        if (indexName === indexPassword) {
            if (db[indexName].role === "admin"){
                //only admin can have access to the arrown function
                const update = () => {
                    // Map through the database array to update the user's property
                    const newDb = db.map((e) => {
                        if (e.name === user) {
                            e[prop] = value;
                            return e;
                        } else {
                            return e;
                        }
                    });
                    // Update the database with the new data
                    db = newDb;
                };
                update();
            } else {
                // If user does not have admin role, display message indicating lack of authorization
                console.log("Not Authorized for this operation");
            }
        } else {
            // If username does not match password, display this error message
            console.log("UserName does not match password");
        } 
    } else {
        // If the provided log-in credentials are incorrect, display this error message
        console.log("Wrong Credentials! Try Again");
    }
};

// Display the initial user information before the admin updated it
console.log(db[4]);

// Update a user's role from student to admin
updateUser("Ik", "Ik123", "Godwin", "role", "admin");

// Display the updated database after it hasb been updated by the admin
console.log(db[4]);



