
const character = 'Akinola';
console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input=>{
    console.log(input);
    
})

const circ =(diameter:number)=>{
  return   diameter * Math.PI;
}
console.log(circ(3));


//Arrays
let arr=['Chair','Table', 'Television']
console.log(arr);
arr.push('pillow')
console.log(arr);

let num=[10,20,30,40];
console.log(num);
num.push(50)
console.log(num);


//Objects
let obj={
    name:'Akinola',
    age:10,
    belt:'black',
}
console.log(obj);
obj.name='Ade';
obj.belt='brown';
console.log(obj);

// objects interface (properties)
let tutor1:{
    name:string,
    age:number,

}


//Explicit types
let chr:string;
let numbr:number;
let isLoggedIn:boolean;

// Arrays of string
let basket:string[]=[];
basket.push('spoon');
console.log(basket);

// Union Types
let mixed:(string|number|boolean)[]=[];
mixed.push('Adewole');
mixed.push(10);
mixed.push(false);
console.log(mixed);







