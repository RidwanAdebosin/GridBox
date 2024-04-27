function greetBasedOnTime() {
    // Get the time
    const time = new Date();
    let greeting = "Good ";

    // Getting the morning if the hour is before 12
    if (time.getHours() < 12) {
        greeting = greeting + "Morning";
    } 
    // Getting the afternoon if the hour is after 12 but before 18
    else if (time.getHours() < 18) {
        greeting = greeting + "Afternoon";
    } 
    // Getting the evening if the hour is after 18
    else {
        greeting = greeting + "Evening";
    }
    
    // Log the greeting to the console
    console.log(greeting);
};

// Call the function to execute it
greetBasedOnTime();

