
function signup(userName) {
  
    const users = ["John", "JaneSmith", "Bob"];

   
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}


console.log(signup("John")); 
console.log(signup("NewUser")); 

// Login function
function login(userName, password) {
   
    const users = ["John", "JaneSmith", "Bob"];
    const correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}


console.log(login("John", "Emp@123")); 
console.log(login("JaneSmith", "WrongPass")); 
console.log(login("NewUser", "Emp@123")); 
