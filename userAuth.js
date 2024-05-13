let dataBase = [
    {email:"nelsom@gmail.com", password:"nel223", name:"nelson"},
    {email:"ibrahim@gmail.com", password:"ola223", name:"ibrahim"}
]

const represent = (email, password) => {
    // Getting the index of the login details
    let userIndex = dataBase.findIndex((user) => user.email === email && user.password === password);

    // Check if user exists
    if (userIndex !== -1) {
        return "Login successful";
    } else {
        // Check if email exists
        let emailIndex = dataBase.findIndex((user) => user.email === email);
        if (emailIndex !== -1) {
            return "Password is incorrect";
        } else {
            return "Email not found in the database";
        }
    }
}

console.log(represent("nelsom@gmail.com", "nel223"));
