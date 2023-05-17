// DOM Interaction and Type Casting
// let anchor=document.querySelector('a');
// console.log(anchor);

//To access the DOM element thru typescript,
// 1. You add exclamation mark
let anchor=document.querySelector('a')!;
console.log(anchor.href);

// 2. write IF statement
if(anchor){
    console.log(anchor.href);
    
}