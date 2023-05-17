"use strict";
// DOM Interaction and Type Casting
// let anchor=document.querySelector('a');
// console.log(anchor);
//To access the DOM element thru typescript,
// 1. You add exclamation mark
let anchor = document.querySelector('a');
console.log(anchor.href);
// 2. write IF statement
if (anchor) {
    console.log(anchor.href);
}
// Type casting
const form = document.querySelector('.nav-item-form');
console.log(form.children);
// collect input (select field in a form)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
