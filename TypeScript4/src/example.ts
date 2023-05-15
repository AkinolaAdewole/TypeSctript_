// Types Aliases


// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type carYear = number;
type carType = string;
type carModel = string;
type objWithName= {uid:carType, name:String};



type Car = {
  year: carYear,
  type: carType,
  model: carModel
}



const logDetails =(uid:carYear, item:String)=>{
    console.log(logDetails);
}

const greet =(user:objWithName)=>{
    console.log(`${user.name} say Hello`);
}

