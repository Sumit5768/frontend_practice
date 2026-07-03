// function

function greet(name){
    console.log("hello",name);
}

greet('sumit');
greet('ankit');

console.log("-".repeat(80));

function car(brand){
    console.log(brand, "is the fastest car in racing")
}


car("BMW");
car("dodge challenger srt demon 170")

console.log("-".repeat(80));


let a = 5;
let b = 1;
let c = 3;

function add(a , b,c){
    console.log((a+b)*c + b*(c+a))
}

add(a ,b,c);

add(5,5,5);

console.log("-".repeat(80));




function vote(age){
    if (age >= 18){
        console.log("you are elligible for voting")
    }
    else{
        console.log("you are not elligible for voting")
    }
}

vote(15)


console.log("-".repeat(80));





// 2. Function Expression-------Assign a function to a variable:

let movie = function(name){
    console.log(name,"is the best movie")
};

movie("fast and furious")
movie("marvel all movies")


console.log("-".repeat(80));


let age = function(age){
    console.log("you are",age,"year old")
}

age(21);


console.log("-".repeat(80));





// 3. Arrow Function (ES6 Feature)-----------Shorter syntax for function expressions.

let square = (num) => {
    return num*num;
}

console.log(square(5));

let plus= (d,f) =>{ 
    console.log(d+f)
};
plus(12,40);


// 🔹 Return Statement--------------If you want to send a value back from the function, use return.

 function hy(name){ 
      return name + "welcome to js jurney"
}

console.log(hy("sumit"));



function calculateTotal(price, quantity) {
  let total = price * quantity;
  return total;
}

let cartTotal = calculateTotal(500, 3);
console.log("Your cart total is ₹" + cartTotal)



// 🔹 Callback Functions (Function inside Function)
// A callback function is passed as an argument to another function, and is called after some operation is completed.

function showMessage(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

showMessage("Sonia", sayBye);