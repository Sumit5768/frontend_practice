function greet(nmae) {
    console.log(`hello ${nmae}`);
}

greet("sumit");

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 15);


let message = function () {
    console.log("Good Morning");
};

message();


function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result);


const square = (num) => {
    return num * num;
};

console.log(square(6));


const greeet = () => {
    console.log("Hello Sumit");
};

greeet();


function great(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye");
}

great("Sumit", bye);


let show = function () {
    console.log("Anonymous Function");
};

show();

(function () {
    console.log("IIFE Example 1");
})();


function calculate(a, b, operation) {
    operation(a, b);
}

calculate(10, 5, function (x, y) {
    console.log(x + y);
});




const numbers = [1, 2, 3, 4];

const squares = numbers.map(function (num) {
    return num * num;
});

console.log(squares);