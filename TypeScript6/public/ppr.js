import { Invoice } from './ppr/invoice.js';
import { Payment } from './ppr/payment.js';
let docOne;
let docTwo;
let docs = [];
docOne = new Invoice('luigi', 'web design', 300);
docTwo = new Payment('mario', 'UI/UX design', 200);
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// const invOne= new  Invoice('Mario', 'works on Mario website', 300);
// const invTwo= new Invoice('Luigi', 'works on Digital Art', 200);
// console.log(invOne,invTwo);
// let invoices:Invoice[]=[];
// // Example1:
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
//  
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber, doc);
});
