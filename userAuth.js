const database = [
  { email: "dan@gmail.com", password: "dan223", name: "dan" },
  { email: "oba@gmail.com", password: "oba223", name: "oba" },
  { email: "ekun@gmail.com", password: "ekun223", name: "ekun" },
  { email: "tiger@gmail.com", password: "tiger223", name: "tiger" },
  { email: "lion@gmail.com", password: "lion223", name: "lion" },
];

const userAuthentication = (userEmail, userPassword) => {
  // Find the user in the database
  const userData = database.find(
    (user) => user.email === userEmail && user.password === userPassword
  );

  // Check if user exists
  if (userData) {
    console.log("You are welcome");
  } else {
    // If the provided log-in credentials are incorrect, display this error message
    console.log("User not found or wrong credentials! Try Again");
    return;
  }

  // Check if the email or password is incorrect
  if (userData.email !== userEmail) {
    console.log("Incorrect email. Please try again.");
  }
  if (userData.password !== userPassword) {
    console.log("Incorrect password. Please try again.");
  }
  // return userAuthentication;
};

console.log(userAuthentication("dan@gmail.com", "ekun223"))
