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

// Type casting
const form = document.querySelector('.nav-item-form') as HTMLFormElement;
console.log(form.children);

// collect input (select field in a form)
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
