"use strict";
// Function Type
// 
let greet;
greet = () => {
    console.log('Hello World');
};
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
// put a question in front a parameter OR can also add default value
const wave = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
wave(1, 2);
const plus = (a, b) => {
    return (a + b);
};
let result = plus(10, 20);
console.log(result);
