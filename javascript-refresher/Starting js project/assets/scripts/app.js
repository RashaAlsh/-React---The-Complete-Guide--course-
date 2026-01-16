import { apiKey } from "./util.js";

console.log(apiKey);

console.log("Hello World")

let userMessage = "hello world";

console.log(userMessage);
console.log(userMessage);

console.log(10 * 5);

function greetUser(userName, message = "Hello!") {
  console.log(userName);
  console.log(message);
}
greetUser("Rasha");
greetUser("Nono");


function createGreeting(userName, message) {
  return "Hi, I am " + userName + ". " + message;
}

console.log(createGreeting("Rasha", "Nice to meet you!"));
console.log(createGreeting("Nono", "How are you today?"));

export default (userName, message) => {
  console.log(userName + message);
};

const user = {
  name: "max",
  age: 34,
  greet() {
    console.log("Hello" + " " + user.name);
  },
};

console.log(user.name);
user.greet();

class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hey");
    }
  }
  
  const user1 = new User("dodi", 29);
  console.log(user1);
  
  user1.greet();
  

// write a new function that should be named combine
// Accept three input values , Calculate a new value
// based on the three input values: a * b / c (if a, b & c are the input values)Return the calculated result

function combine ( a , b, c){
return a * b / c
}

console.log(combine(1 ,12 ,3))

const hobbies = ["cooking","sport","reading"]
console.log(hobbies[0])

hobbies.push("Video game")

console.log(hobbies)

const sportIndex = hobbies.findIndex((item) => item === 'sport');

console.log(sportIndex);

const editedHobbies = hobbies.map((item) => item + "!")
console.log(editedHobbies)

const numberArray = [12, 15, 67];

function transformToObjects(arr) {
  return arr.map(num => ({ val: num }));
}

const result = transformToObjects(numberArray);
console.log(result);

const [firstName , lastName ] = ["Max","deiz"];
console.log(firstName)
console.log(lastName)
