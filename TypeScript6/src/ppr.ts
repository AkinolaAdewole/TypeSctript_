import { Invoice } from './ppr/invoice.js';
import { Payment } from './ppr/payment.js';
import { hasFormatter } from './interfaces/hasFormatter';

let docOne:hasFormatter;
let docTwo:hasFormatter;
let docs:hasFormatter[]=[];

docOne= new Invoice('luigi', 'web design', 300);
docTwo= new Payment('mario', 'UI/UX design', 200);
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


const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc:hasFormatter;
    if(type.value==='invoice'){
        doc=new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber,
        doc);
});
