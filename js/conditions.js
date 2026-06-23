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

 console.log("-".repeat(100));


 // shopping disscount    

 let amount = 100000;
  let member = "vip";
  let cupon_code = 111;
  let address = "ujjain";
 

  if ((amount == 50000 && member == "vip")&& (111 >= cupon_code || address == "ujjain")){
      console.log("sorry! you are not a prime member any disscount not avalible")
  }
    else if ((amount == 100000 && member == "vip")&& (110 <= cupon_code || address == "indore")){
         console.log(" great !you are a prime member flat 20% disscount")
    }
    else if ((amount == 100000 && member == "local")&& (112 <= cupon_code || address == "indore")){
         console.log("sorry! you are not a prime member any disscount not avalible")
    }
    else if ((amount == 100000 && member == "vip")&& (112 == cupon_code || address == "indore")){
         console.log("sorry! you are not a prime member any disscount not avalible")
    }
    else if ((amount >= 20000 && member == "local")&& (112 == cupon_code || address == "bhopal")){
         console.log("sorry! you are not a prime member any disscount not avalible")
    }
    else if ((amount == 10000 && member == "local")&& (112 == cupon_code || address == "ujjian")){
         console.log("sorry! you are not a prime member any disscount not avalible")
    }
    else {
        console.log("you can not buy any item")
    };


    // switch---- The switch statement evaluates an expression and matches it against multiple cases.

    let day = 4;

switch (day){
    case 1 :
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break
    case 3:
        console.log("wednesday");
        break
    default:
        {
            console.log("invalid day");
        }
}
    