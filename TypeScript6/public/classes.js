"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'works on Mario website', 300);
const invTwo = new Invoice('Luigi', 'works on Digital Art', 200);
console.log(invOne, invTwo);
let invoices = [];
// Example1:
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
