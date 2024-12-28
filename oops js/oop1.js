const user = {
  username: "shubham",
  loginCount: 9,
  signedIn: true,

  getUserDetails: function(){
    // console.log("got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    
    
    
  }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("shiva", 13, false)
console.log(userOne);
console.log(userTwo);

