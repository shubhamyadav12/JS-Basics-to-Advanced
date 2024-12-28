function multipleBy5(num){
  return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(7));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
  this.usernae = username
  this.score = score
}

createUser.prototype.increment = function(){
  console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 25)


