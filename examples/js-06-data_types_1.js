// data_types

console.log(typeof 10); 
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof Symbol("iterator"));
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof undefined);

// Node.js

typeof 10; // number
typeof "JavaScript"; // string
typeof true; // boolean
typeof Symbol("iterator"); // symbol
typeof null; // object
typeof undefined; // undefined

(10).toFixed(2); // 10.00
('JavaScript').replace('a', '4'); // 'J4v4script'
(true).toString(); // 'true'
(Symbol("iterator")).toString(); // 'Symbol("iterator")

// Terminal

typeof function sum(a, b) {return a + b}; // function
typeof {name: "Linux Trovald"}; //object
typeof [1,2,3,4,5,6,7,8,9]; // object
typeof /[a-zA-Z_$]+/; // object
typeof (new Date()); // object
