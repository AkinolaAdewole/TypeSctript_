// Union Types
let mixed:(string|number|boolean)[]=[];
mixed.push(30);
mixed.push('yoshi');
mixed.push(false);
console.log(mixed);

let uid:number|string;
uid=123;
uid='luigi';
console.log(uid);

//Objects
let ninjaOne:{};
ninjaOne={
    name:'Joy',
    age:20,
}
console.log(ninjaOne);

let ninjaTwo:{
    name:string,
    age:Number,
    beltColour:string
};

ninjaTwo={name:'Ade',
          age:10,
          beltColour:'black'};
console.log(ninjaTwo);

