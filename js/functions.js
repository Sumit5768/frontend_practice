// function

function greet(name){
    console.log("hello",name);
}

greet('sumit');
greet('ankit');

function car(brand){
    console.log(brand, "is the fastest car in racing")
}


car("BMW");
car("dodge challenger srt demon 170")

let a = 5;
let b = 1;
let c = 3;

function add(a , b,c){
    console.log((a+b)*c + b*(c+a))
}

add(a ,b,c);

add(5,5,5);



function vote(age){
    if (age >= 18){
        console.log("you are elligible for voting")
    }
    else{
        console.log("you are not elligible for voting")
    }
}

vote(15)




// 2. Function Expression-------Assign a function to a variable:

let movie = function(name){
    console.log(name,"is the best movie")
};

movie("fast and furious")
movie("marvel all movies")

let age = function(age){
    console.log("you are",age,"year old")
}

age(21);




// 3. Arrow Function (ES6 Feature)-----------Shorter syntax for function expressions.

let square = (num) => {
    return num*num;
}

console.log(square(5));

let plus= (d,f) =>{ 
    console.log(d+f)
};
plus(12,40);