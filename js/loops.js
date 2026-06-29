// loop

// for loop--- The for loop is used when we know in advance how many times we want to execute a block of code.

for(let  i = 0; i <= 10 ; i++){
    console.log(`the number is ${i}`);
}

for (let i = 2; i <=20; i+=2){
    console.log(` ${i}`);
}

let b = 5;
for (let i = 1; i<=10; i++){
    console.log(`${b}*${i}=${b*i}`)
}
let c = 15;
for (let i = 1; i<=10; i++){
    console.log(`${c}*${i}=${c*i}`)
}


let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (let i = 0; i < month.length; i++) {
  console.log(month[i]);
}


console.log("--".repeat(50));

// while loop--The while loop executes a block of code as long as the given condition is true. It is used when we do not know beforehand how many times the loop should run.

let time = 1;

while(time<50){
    console.log(` remaining time is ${time}`);
    time++ ;    
}



// example practice

let dayys = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
for (let i = 0; i<dayys.length ; i++)
    if (dayys[i] === 'saturday'|| dayys[i] === 'sunday'){
        console.log(dayys[i],"booking is closed ")
    }
    else{
        console.log(dayys[i],"booking is open")
    }



// do while loop----The do...while loop is similar to the while loop, but it ensures that the code runs at least once before checking the condition.

let a = 1;
do {
    console.log(a);
    a++;
}while(a<=10);

let contdown = 1;
do{
    console.log(contdown);
    contdown++;
}while(contdown<10);

// for in loop--The for...in loop is used to iterate over the properties of an object


let person = {
    name : "sumit",
    age : 21,
    address : "Unhel"
}
 for(let key in person){
    console.log(`${key}:${person[key]}`);
 }

//  for...of Loop--The for...of loop is used to iterate over iterable objects like arrays and strings.


let fruits = ['mango', 'orange','apple', 'watermelon'];
for (let fruit of fruits){
    console.log(`${fruit}`)
}