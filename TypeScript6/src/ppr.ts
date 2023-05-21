import { Invoice } from './ppr/invoice.js';
import { Payment } from './ppr/payment.js';
import { hasFormatter } from './interfaces/hasFormatter';

let docOne:hasFormatter;
let docTwo:hasFormatter;
let docs:hasFormatter[]=[];

docOne= new Invoice('luigi', 'web design', 300);
docTwo= new Payment('mario', 'UI/UX design', 200);

const invOne= new  Invoice('Mario', 'works on Mario website', 300);
const invTwo= new Invoice('Luigi', 'works on Digital Art', 200);
console.log(invOne,invTwo);

let invoices:Invoice[]=[];

// Example1:
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);


invoices.forEach(inv=>{
    console.log(inv.client,
                inv.details,
                inv.amount,
                inv.format());
    
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber);
});
