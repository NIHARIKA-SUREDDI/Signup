
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