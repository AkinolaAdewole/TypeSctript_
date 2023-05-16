// Function Type

// 

let greet:Function; 

greet=()=>{
    console.log('Hello World');
}

const add=(a:number,b:number)=>{
    console.log(a+b);
    
}

add(5,10)

// put a question in front a parameter OR can also add default value

const wave=(a:number,b:number,c:number=10)=>{
    console.log(a+b);
    console.log(c);
    
}
wave(1,2);


const plus=(a:number, b:number)=>{
    return (a+b);
}

let result=plus(10,20)
console.log(result);
