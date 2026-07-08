let student = {
    "name": "Sumit",
    "age": 21,
    "address": "unhel"
};

JSON.parse(student); // pase() is used to convert JSON to javascrits object
console.log(student)




let user = {
    name2: "Sumit",
    age : 21
}

JSON.stringify(user)// stringify() is used to convert JS object to JSON object
console.log(user);



a = {
    "name" : "sandeep"
}
a = {
    name : {
        nickname : "sandu",
        fullname : "sandeep patel",
        name :"sandeep"    }
}

JSON.parse(a)
JSON.stringify(a)