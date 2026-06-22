// conditions--- if---------- else if -------else

let age = 18;

if (age >=18 && age <=90){
    console.log("you can vote")
   }
else{
    console.log("not elligible for vote")
};

let a = 10;
let b = 50;
let c = 60;
let d = 10;

if ((a > b && b > c)||d > c){
    console.log("not possible")
}
else if ((a < b && b > c)||d > c){
    console.log("not possible")
}
else if ((a < b && b < c)||d < c){
    console.log("not possible")
}
else{
    console.log("possible")

}

let age1 = 18;
if (age >= 18 && age <= 40){
    console.log("you can drive car")
}
else if (age >= 40 && age <= 60){
    console.log("you can drive a truck")
}
else{
    console.log("you can only drive a cycle")
};

let x  = 50;
 x += 20;
 if (x >=70){
    console.log("answer is wright")
 }
 else{
    console.log("answer is wrong")
 }