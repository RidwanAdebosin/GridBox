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
        console.log("Welcome on board");
    } else {
        console.log("Invalid username or password");
    }
}

loginUser("Ridwan", "Adebosin");


