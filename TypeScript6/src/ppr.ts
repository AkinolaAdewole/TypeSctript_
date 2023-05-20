// Public, Private and ReadOnly
// In Classes, all properties are public by default
// Access Modifiers are: Public, Private and ReadOnly
// Private allows to read and change inside the class.
// readOnly allows to read only both inside and outside the class

class Invoice{
   
    // readonly client:string;
    // private details:string;
    // public amount:number;
  
    // constructor(c:string,d:string, a:number){
    //     this.client=c;
    //     this.details=d;
    //     this.amount=a;
    // }

    // Example two
    
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}



    format(){
      return   `${this.client} owes ${this.amount} for ${this.details}`
    }
}

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
