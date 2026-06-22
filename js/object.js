// object -- it store data in form of key and value

let student = {
    "name": "Sumit",
    "age": 21,
    "address": "unhel"
};


//2. Adding, Updating, and Deleting Properties
// Object.assign(target, source) - Copies properties from one object to another

let  obj1 = { a: 1, b: 2 ,e: 6 };
let obj2 = { c: 3, d: 4 };

Object.assign(obj1, obj2);
console.log(obj1);

// Object.defineProperty(obj, prop, descriptor) - Defines a new property with detailed control

let car = {};
 Object.defineProperty(car,"brand",{
    value : "tata",
    writable: false,
      enumerable: true
});

console.log(car.brand);
car.brand = "honda";
console.log(car.brand); 


// Object.defineProperties(obj, props) - Defines multiple properties at once

let book = {};
Object.defineProperties(book, {
  title: { value: "JavaScript Guide", writable: true },
  pages: { value: 500, writable: false }
});
console.log(book);


// delete obj.property - Removes a property from an object

let user = {
    name2: "Sumit",
    age : 21
}
delete user.age;
console.log(user);


// 3. Retrieving Object Properties and Keys

// Object.keys(obj) - Returns an array of keys

console.log( Object.keys(student));  


// Object.values(obj) - Returns an array of values

console.log( Object.values(student));  

// Object.entries(obj) - Returns an array of key-value pairs


console.log( Object.entries(student));  


// 4. Checking Object Properties

// hasOwnProperty(prop) - Checks if an object has a property

console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("address")); 


// in operator - Checks if a property exists

console.log("name" in user);

console.log("name2" in user);


// 5. Merging and Cloning Objects
// Object.assign() - Clones an object

let original = { a: 1, b: 2 };  
let clone = Object.assign({}, original);

console.log(clone);


// structuredClone(obj) - Deep clones an object

let deepCopy = structuredClone(original);
console.log(deepCopy)

// JSON.stringify() & JSON.parse() - Another way to deep clone


let deepClone = JSON.parse(JSON.stringify(original));
console.log(deepClone); 



// 6. Freezing and Sealing Objects
// Object.freeze(obj) - Prevents adding, deleting, or modifying properties


let frozen = { name: "Sumit" };
Object.freeze(frozen);

frozen.name = "Dhakad";
console.log(frozen.name);

// Object.seal(obj) - Prevents adding or deleting properties but allows modifications

let sealed = { name: "SUMIT" };
Object.seal(sealed);

sealed.name = "DHAKAD"; 
delete sealed.name; 
console.log(sealed); 


// 7. Comparing Objects
// Object.is(value1, value2) - Compares two values

console.log(Object.is(5, 5));
console.log(Object.is({}, {}));

// Using JSON.stringify() for object comparison


let objA = { a: 1 };
let objB = { a: 1 };

console.log(JSON.stringify(objA) === JSON.stringify(objB));

// 8. Advanced Object Methods
// Object.getOwnPropertyDescriptors(obj) - Returns property details



console.log(Object.getOwnPropertyDescriptors(student));



// Object.getPrototypeOf(obj) - Gets an object’s prototype




console.log(Object.getPrototypeOf([])); 


// Object.setPrototypeOf(obj, prototype) - Sets an object's prototype


let proto = { greet: () => "Hello!" };
let obj = {};
Object.setPrototypeOf(obj, proto);

console.log(obj.greet());

// Object.create(proto) - Creates a new object with the given prototype.

let newObject = Object.create(proto);
console.log(newObject.greet()); 