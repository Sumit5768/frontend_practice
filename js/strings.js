// lenght --The length property returns the total number of characters in a string.

let name = "Sumit";
console.log(name.length);

//Password validation (must be 8+ characters)

let password = "hello";
if (password.lenght < 8);
console.log("password is too short");

// Check if a string is empty
let text = "";
console.log(text.length === 0); 

// 2. toUpperCase() --Converts a string to uppercase.

console.log(name.toUpperCase());


// 3. toLowerCase() --Converts a string to lowercase.
console.log(name.toLowerCase());

// 4. includes() --Checks if a string contains a given word/character.

let email = "sumitdhakad@576"
console.log(email.includes("576"));

// 5. startsWith() --Checks if a string starts with a specific word/character.

let number = "+91123456789"
console.log(number.startsWith("+91"));

console.log(name.startsWith("S"));

// 6. endsWith()--Checks if a string ends with a specific word/character.

console.log(name.endsWith("it"));
console.log(email.endsWith("576"));


// 7. indexOf()--Returns the position of the first occurrence of a character/word.

console.log(email.indexOf("@"));

// 8. slice()-- Extracts part of a string.
let sentence = "I am learnig js";
console.log(sentence.slice(5));
console.log(sentence.slice(3,8));
console.log(sentence.slice(-3));


// 9. replace()--Replaces part of a string with another.

console.log(sentence.replace("js","python"));
console.log(email.replace("576","123"));

// 10. trim() --Removes extra spaces from start and end

let name2 = " Aakash    ";
console.log(name2.trim());

let msg = "   ";
console.log(msg.trim().length === 0); 

// 11. concat()---Joins (merges) two or more strings together.

console.log(name.concat("  ",name2));



// 12. split()--Splits a string into an array based on a separator.

let sentence2 = " i am learnig js";
console.log(sentence2.split(""));
console.log(sentence.split());
console.log(sentence.split(","));


// 13. substring(start, end)--Extracts characters between two indexes.

console.log(sentence.substring(5,8));


// 14. charAt(index)--Returns the character at a given position.

console.log(name.charAt(3));
console.log(email.charAt(8));


// 15. repeat()---Repeats a string multiple times.

console.log(name.repeat(5));
console.log(".  ".repeat(5));

// 16. match()--Searches for a match with regex and returns array.

let text1 = "Order ID: 12345";
console.log(text1.match(/\d+/));

//  find vovels
console.log(name.match(/[aeiou]/gi));

//find hastages

let w = " i am learning #js"
console.log(w.match(/#\w+/g));


// Find emails
console.log(email.match(/\S+@\S+\.\S+/));

// 17. padStart() --Pads string with characters at the start until it reaches given length.

let bill = "33";
console.log(bill.padStart(5,"*"));


// 18. padEnd()--Pads string with characters at the end until it reaches given length.
console.log(bill.padEnd(5,"*"));
console.log(bill.padEnd(8,"#"));

// 19. search()--Finds the position of a match using regex.
// Find position of email domain

console.log(email.search(/@/));

//Find first digit
console.log(text1.search(/\d/));

// Find first uppercase letter
console.log(name.search(/[A_Z]/));

// Find hashtag position

console.log(sentence2.search(/#/));

console.log("----------------------------------------------------");


// 20. localeCompare()--Compares two strings (alphabetically).


console.log("apple".localeCompare("Helloo"));


// Compare equal strings
console.log("hello".localeCompare("hello"));