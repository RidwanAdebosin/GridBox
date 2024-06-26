// Question 1:
// Write a function that given two arrays, returns a new array containing elements that are present in both arrays.
function getCommonElement(array1, array2) {
  let commmonElement = array1.filter((element) => array2.includes(element));
  return commmonElement;
}
console.log(getCommonElement([1, 2, 3, 4, 0], [2, 3, 5, 0]));

// Question 2:
// Write a function that given an array of strings, return a new array with only the strings that have a length greater than 5.
function getArrayOfStrings(arrayOfStrings, secondArray) {
  let stringGreaterThanFive = arrayOfStrings.filter(
    (element) => element.length > 5
  );
  let stringGreaterThanFiveSecond = secondArray.filter(
    (element) => element.length > 5
  );
  return stringGreaterThanFive.concat(stringGreaterThanFiveSecond);
}
console.log(
  getArrayOfStrings(
    ["Emmanuel", "Tobi", "Vick", "Folawiyo"],
    ["Yepa", "Dolla", "Benjamin", "Jet"]
  )
);

// Question 3:
// Write a function that uses the reduce() method to calculate the sum of an array of numbers.

function getTotalSumofNumbers(arrayOfNumbers) {
  let sumOfNumbers = arrayOfNumbers.reduce(
    (acc, currValue) => acc + currValue,
    0
  );
  return sumOfNumbers;
}
console.log(getTotalSumofNumbers([1, 2, 3, 4, 5]));

// Question 4:
// Use the find() method to find the first object in an array that meets a certain condition.
const playersStats = [
  { firstname: "Cristiano", lastName: "Ronaldo", goalsScored: 55 },
  { firstname: "Lionel", lastName: "Messi", goalsScored: 85 },
  { firstname: "Kylian", lastName: "Mbbape", goalsScored: 40 },
];

let worldBest = playersStats.find(
  (playerStats) => playerStats.goalsScored > 70
);
console.log(worldBest);

// Question 5:
// Write a function that uses the some() method to check if at least one element in an array meets a certain condition.
const getElement = (arrayOfElements) => {
  let elementThatMeetCriteria = arrayOfElements.some(
    (element) => typeof element === "number"
  );
  return elementThatMeetCriteria;
};

console.log(getElement(["Lagos", "Calabar", 12567128, "Cassava"]));

// Question 6:
// Use the every() method to check if all elements in an array meet a certain condition.
const meetCriteria = (arrayOfElements) => {
  let allElementMeetCriteria = arrayOfElements.every(
    (element) => typeof element === "string"
  );
  return allElementMeetCriteria;
};

console.log(meetCriteria(["Lagos", "Calabar", "12567128", "Cassava"]));

// Question 7:
// Write a function that when given an array of strings, returns a new array with only the strings that start with a vowel.
const elementStartWIthVowel = (arrayOfElements) => {
  let vowels = ["A", "E", "I", "O", "U"];
  let elementThatMeetCriteria = arrayOfElements.filter((element) =>
    vowels.includes(element.charAt(0))
  );
  return elementThatMeetCriteria;
};
console.log(
  elementStartWIthVowel([
    "Canada",
    "USA",
    "Denmark",
    "Ghana",
    "India",
    "England",
  ])
);

// Question 8:
// Write a function that when given an array of numbers, returns a new array with the elements sorted in descending order.
const sortInDescendingOrder = (arrayOfNumbers) => {
  let sortedArrays = arrayOfNumbers.sort((a, b) => b - a);
  return sortedArrays;
};
console.log(sortInDescendingOrder([4, 5, 1, 0, 8, -2, -5, 8]));

// Question 9:
// Write a function that takes two arrays as input and returns the combination of the two arrays.
// function concatElements(array1, array2) {
//     let addedElements = array1.concat(array2)
//     return addedElements;
//  }
//  console.log(concatElements([1, 2, 3, 4, 0], [2, 3, 5, 0]));
const concatArray = (array1, array2) => {
  let addedElements = array1.concat(array2);
  return addedElements;
};
console.log(concatArray([1, 2, 3, 4, 0], [2, 3, 5, 0]));

// Question 10:
// Write a function that given an array of strings and a string containing one letter
// e.g 'a', returns a new array with only the strings that contain the letter 'a'.
const getElementWithLetterB = (arrayOfElements) => {
  let getLetterB = arrayOfElements.filter((element) => element.includes("B"));
  return getLetterB;
};
console.log(
  getElementWithLetterB(["Ago", "Kate", "Benue", "Bamba", "Kathrina"])
);

// Question 11:
// Write a function that takes an array of strings and returns the shortest word.
const getShortestWord = (arrayOfElements) => {
  let shortestWord = arrayOfElements.reduce((a, b) =>
    a.length < b.length ? a : b
  );
  return shortestWord;
};
console.log(getShortestWord(["Goat", "Elephant", "Dog", "Lion"]));

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
  { name: "Ik", password: "Ik123", role: "admin" },
  { name: "Uche", password: "Uche123", role: "admin" },
  { name: "Paul", password: "Paul123", role: "admin" },
  { name: "John", password: "John123", role: "student" },
  { name: "Godwin", password: "Godwin123", role: "student" },
  { name: "Amaka", password: "Amaka123", role: "student" },
];

// Function to update user's property in the database
const updateUser = (userName, password, user, prop, value) => {
  // Using findIndex to check through the objects in the array if the name value matches the logged-in username and password
  //finding if the user exist
  if (
    db.findIndex((e) => e.name === userName) !== -1 &&
    db.findIndex((e) => e.password === password) !== -1
  ) {
    // Let's find the index of the user with matching username and password then assign the index to it
    let indexName = db.findIndex((e) => e.name === userName);
    let indexPassword = db.findIndex((e) => e.password === password);
    //
    // firstly, let's check if the userName and Password mathes then check If the user has admin role, update the user's property
    if (indexName === indexPassword) {
      if (db[indexName].role === "admin") {
        //only admin can have access to the arrow function
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
// console.log(db[4]);

// Update a user's role from student to admin
updateUser("Godwin", "Godwin123", "Ik", "role", "student");

// Display the updated database after it has been updated by the admin
// console.log(db[4]);

// Assignment
// 1. Write a function that takes an array of objects e.g [{name: "mike", age: 40},{ name: "gift", age: 32}]
//  and returns the name of the person with the highest age.
// let arrayOfObjects = [{name: "mike", age: 40},{ name: "gift", age: 32}]

const personWithHighestAge = (arrayOfObjects) => {
  arrayOfObjects.sort((a, b) => b - a);
  return arrayOfObjects[0].name;
};
console.log(
  personWithHighestAge([
    { name: "mike", age: 40 },
    { name: "gift", age: 32 },
  ])
);

// 2. Write a function that takes an array of objects e.g [ {name: "grace", tithe: 40000}, {name: "james", tithe: 32000}]
//  and returns the total tithe.

const addTithes = (arrayOfObjects) => {
  let totalTithesPaid = arrayOfObjects.reduce(
    (prev, curr) => prev + curr.tithe,
    0
  );
  return totalTithesPaid;
};

console.log(
  addTithes([
    { name: "grace", tithe: 40000 },
    { name: "james", tithe: 32000 },
  ])
);

// 3. Write a function that takes an array of objects e.g [ {name: "dan", salary: 30000, bonus: 5000}, { name: "linda", salary: 36000, bonus: 8000}]
// and returns a new array with their names and their salary plus their bonus as newSalary.
const getNewSalary = (arrayOfObjects) => {
  const newSalary = arrayOfObjects.map((e) => {
    const { name, salary, bonus } = e;
    const newSalary = salary + bonus;
    return { name, newSalary };
  });
  return newSalary;
};
console.log(
  getNewSalary([
    { name: "dan", salary: 30000, bonus: 5000 },
    { name: "linda", salary: 36000, bonus: 8000 },
  ])
);

// 4. Write a login function that looks at an array of objects e.g [ {email: "dan@gmail.com", password: "dan223", name: "dan"}]
// and takes two parameters that represents email and password. Throw errow messages
// If user doesn't exist in db, email and password not correct, email not correct, and
// password not correct, and say "login successful with the person's name" if email and password match.

let database = [
  { email: "dan@gmail.com", password: "dan223", name: "dan" },
  { email: "oba@gmail.com", password: "oba223", name: "oba" },
  { email: "ekun@gmail.com", password: "ekun223", name: "ekun" },
  { email: "tiger@gmail.com", password: "tiger223", name: "tiger" },
  { email: "lion@gmail.com", password: "lion223", name: "lion" },
];

const userAuthentication = (userEmail, userPassword) => {
  const emailIndex = database.findIndex((e) => e.email === userEmail);
  const passwordIndex = database.findIndex((e) => e.password === userPassword);

  if (emailIndex !== -1 && passwordIndex !== -1) {
    if (emailIndex === passwordIndex) {
      console.log(`Welcome ${database[emailIndex].name}`);
    } else {
      console.log("Credentials don't match");
    }
  } else {
    if (emailIndex === -1) {
      console.log("Email incorrect");
    } else {
      console.log("password incorrect");
    }
  }
};
userAuthentication("oba@gmail.com", "oba223");

// 5. write a function that takes an array of strings and returns the shortest word.
const getShortestWordFromTheArray = (arrayOfElements) => {
  let shortestWord = arrayOfElements.reduce((a, b) =>
    a.length < b.length ? a : b
  );
  return shortestWord;
};
console.log(
  getShortestWordFromTheArray(["Benue", "Onitsha", "Kano", "Anambra"])
);

// 1. Write a function that takes an array of objects representing students with their grades
// (e.g., {name: "Alice", grade: 85}) and returns
// a new array with their names and whether they passed (grade >= 60).

const passedExamination = (arrayOfStudents) => {
  let studentThatPassed = arrayOfStudents.map((e) => {
    if (e.grade >= 60) {
      return `${e.name} passed the examination`;
    } else {
      return `${e.name} failed the examination`;
    }
  });
  return studentThatPassed;
};
console.log(
  passedExamination([
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 45 },
    { name: "Charlie", grade: 75 },
  ])
);

// 2. Create a function that receives an array of objects representing books
// (e.g., {title: "Harry Potter", pages: 400}) and returns
//  a new array with titles and whether the book is considered long (pages > 300).

const noOfBookPages = (arrayOfBooks) => {
  let mappedBooks = arrayOfBooks.map((e) => {
    if (e.pages > 300) {
      return `${e.title} has a total number of ${e.pages} so its considered a long book`;
    } else {
      return `${e.title} has a total number of ${e.pages} so its considered a small book`;
    }
  });
  return mappedBooks;
};
console.log(
  noOfBookPages([
    { title: "Harry Potter", pages: 400 },
    { title: "The Great Gatsby", pages: 250 },
    { title: "Lord of the Rings", pages: 600 },
  ])
);

// 3. Implement a function that takes an array of objects containing products
// and their prices (e.g., {name: "Laptop", price: 1000}) and returns a
// new array with the names of products and whether they are expensive (price > 500).

const productsPrice = (arrayOfProducts) => {
  let productPrice = arrayOfProducts.map((e) => {
    if (e.price > 500) {
      return `${e.name} is an expensive products that cost ${e.price} dollars`;
    } else {
      return `${e.name} is not an expensive products because it cost just ${e.price} dollars`;
    }
  });
  return productPrice;
};
console.log(
  productsPrice([
    { name: "Laptop", price: 1000 },
    { name: "Headphones", price: 80 },
    { name: "Smartphone", price: 600 },
  ])
);

// 4. Develop a function that accepts an array of objects representing employees and their years of service
// (e.g., {name: "John", years: 5}) and returns a new array with names and whether they are eligible for a bonus (years >= 5).

const employeesData = (arrayOfObjects) => {
  let employeeEligibility = arrayOfObjects.map((e) => {
    if (e.years >= 5) {
      return `${e.name} has spent ${e.years} in service so he is eligible to take the company bonus`;
    } else {
      return `${e.name} has only spent ${e.years} in service so he is not eligible to take the company bonus`;
    }
  });
  return employeeEligibility;
};
console.log(
  employeesData([
    { name: "John", years: 5 },
    { name: "Alice", years: 2 },
    { name: "Bob", years: 7 },
  ])
);

// 5. Write a function that takes an array of objects representing cities and their populations
// (e.g., {name: "New York", population: 8000000})
// and returns a new array with city names and whether they are considered large cities (population > 1 million).

const citiesCensus = (arrayOfObjects) => {
  let population = arrayOfObjects.map((e) => {
    if (e.population >= 1000000) {
      return `${e.name} is a large city with the total population of ${e.population} people`;
    } else {
      return `${e.name} is not considered a large city because its population is ${e.population}  which is not up to 1000000`;
    }
  });
  return population;
};
console.log(
  citiesCensus([
    { name: "New York", population: 8000000 },
    { name: "Los Angeles", population: 4000000 },
    { name: "Chicago", population: 2700000 },
  ])
);

// 6. Create a function that receives an array of objects representing cars and their prices
// (e.g., {brand: "Toyota", price: 25000}) and returns a new array with the brands and whether they are affordable (price < 30000).

const carsInGarage = (arrayOfObjects) => {
  let carInGarage = arrayOfObjects.map((e) => {
    if (e.price > 30000) {
      return `${e.brand} is not affordable as the current market price is ${e.price} `;
    } else {
      return `${e.brand} is affordable as the current market price is ${e.price} which is a good rate`;
    }
  });
  return carInGarage;
};

console.log(
  carsInGarage([
    { brand: "Toyota", price: 25000 },
    { brand: "BMW", price: 40000 },
    { brand: "Honda", price: 20000 },
  ])
);

// 7. Develop a function that receives an array of strings and returns the word with the most vowels.

const getWordsWithMostVowelWords = (arrayOfStrings) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let countVowels = (word) => {
    return word.split("").filter((e) => vowels.includes(e)).length;
  };

  let sortedWords = arrayOfStrings.sort(
    (a, b) => countVowels(b) - countVowels(a)
  );
  const wordsWithMaxVowels = countVowels(sortedWords[0]);
  let wordsWithMostVowels = sortedWords.filter(
    (word) => countVowels(word) === wordsWithMaxVowels
  );

  return wordsWithMostVowels;
};

console.log(
  getWordsWithMostVowelWords(["cat", "dog", "bird", "elephant", "fish"])
);

// 8. Create a function that accepts an array of strings and returns the word with the fewest vowels.

const vowels = ["a", "e", "i", "o", "u"];
const getWordsWithMinVowels = (arrayOfStrings) => {
  let countVowels = (word) => {
    return word
      .split("")
      .filter((element) => vowels.includes(element.toLowerCase())).length;
  };
  let sortedWords = arrayOfStrings.sort(
    (a, b) => countVowels(a) - countVowels(b)
  );
  const minVowels = countVowels(sortedWords[0]);
  let wordsWithLeastVowels = sortedWords.filter(
    (word) => countVowels(word) === minVowels
  );
  return wordsWithLeastVowels;
};

console.log(getWordsWithMinVowels(["car", "bike", "train", "plane", "boat"]));

// 9. Implement a function that takes an array of strings and returns the word with the most consonants.
const maxConsonantWords = (arrayOfStrings) => {
  let countConsonants = (word) => {
    return word
      .split("")
      .filter((element) => !vowels.includes(element.toLowerCase())).length;
  };
  let sortedWords = arrayOfStrings.sort(
    (a, b) => countConsonants(b) - countConsonants(a)
  );
  const maxConsonants = countConsonants(sortedWords[0]);
  let wordsWithMaxConsonants = sortedWords.filter(
    (word) => countConsonants(word) === maxConsonants
  );
  return wordsWithMaxConsonants;
};
console.log(
  maxConsonantWords(["house", "apartment", "cabin", "mansion", "shack"])
);

// 10. Write a function that takes an array of strings and returns the word with the fewest consonants.
const leastConsonantWords = (arrayOfStrings) => {
  let countConsonants = (word) => {
    return word
      .split("")
      .filter((element) => !vowels.includes(element.toLowerCase())).length;
  };
  let sortedWords = arrayOfStrings.sort(
    (a, b) => countConsonants(a) - countConsonants(b)
  );
  const minConsonants = countConsonants(sortedWords[0]);
  let wordsWithMinConsonants = sortedWords.filter(
    (word) => countConsonants(word) === minConsonants
  );
  return wordsWithMinConsonants;
};
console.log(
  leastConsonantWords(["sun", "moon", "stars", "planet", "kea", "galaxy"])
);

// 11. Implement a function that takes an array of strings and returns the word with the most repeated letters.

const getRepeatedLetters = (arrayOfStrings) => {
  const countRepeatedLetters = (word) => {
    const letterCounts = {};
    let repeatedCount = 0;

    arrayOfStrings.split("").forEach((element) => {
      if (letterCounts[element]) {
        letterCounts[element]++;
      } else {
        letterCounts[letter] = 1;
      }
    });

    for (let count of Object.values(letterCounts)) {
      if (count > 1) {
        repeatedCount += count;
      }
    }
    return repeatedCount;
  };
};
console.log(getRepeatedLetters(["table", "chair", "desk", "couch", "stool"]));
/* 

12. Write a function that takes an array of strings and returns the word with the least repeated letters.

   Example Data:
   javascript
   const words = ["mouse", "keyboard", "monitor", "printer", "scanner"];
   

   
   Example Data:
   javascript
   const words = ["carrot", "broccoli", "lettuce", "spinach", "cabbage"]; */
   
   
   function sum(arr){
     return Array.from(new Set(arr)).reduce((acc, cv) => acc + cv, 0)
    }
    console.log(sum([1, 2, 2, 3, 1, 2])) 
    
    
    // 13. Develop a function that receives an array of strings and returns the word with the most unique letters.
    const uniqueLetters = (arrayOfStrings) => {
      let maxUniqueCount = 0;
      let wordWithMaxUniqueLetters = '';
    
      // Iterate through each word in the array
      arrayOfStrings.forEach(word => {
        let uniqueLetters = new Set(word); // Set automatically keeps unique values only
        let uniqueCount = uniqueLetters.size;
    
        // Check if the current word has more unique letters than the previous max
        if (uniqueCount > maxUniqueCount) {
          maxUniqueCount = uniqueCount;
          wordWithMaxUniqueLetters = word;
        }
      });
    
      return wordWithMaxUniqueLetters;
    };
    
    console.log(uniqueLetters(["boy", "bull", "array"]));
    

