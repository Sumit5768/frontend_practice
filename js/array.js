let array = [1,2,5,6,8,"sumit","shubham","sandeep"];

// Adding and Removing Elements-----------------------------------------------------------

// push() - Adds elements to the end of an array

 array.push("ajay",21);
 console.log(array);


// pop() - Removes the last element
array.pop();
console.log(array)
;

// unshift() - Adds elements to the beginning

array.unshift("Ankit");
console.log(array);


// shift() - Removes the first element

array.shift();
console.log(array);

// splice() - Removes/replaces elements at any position

array.splice(1,3,"Vikas");
console.log(array);

// slice() - Returns a portion of an array (without modifying it)

let array1 = array.slice(1,3);
console.log(array1);



// Searching and Finding Elements---------------------------------------------------------------------------

//  indexOf() - Finds the index of

console.log(array.indexOf("sumit"));

//  lastIndexOf() - Finds the last occurrence of an element

console.log(array.indexOf(8));

// includes() - Checks if an element exists

console.log(array.includes("sumit"));

// find() - Finds the first element that meets a condition


let arr2 = [1,2,5,6,8,"sumit","shubham","sandeep",50];

let found = arr2.find( arr2 => arr2 >25);
console.log(found);

let found1 = arr2.findIndex(arr2 => arr2 >25);
console.log(found1);









