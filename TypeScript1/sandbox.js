var character = 'Akinola';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3));
//Arrays
var arr = ['Chair', 'Table', 'Television'];
console.log(arr);
arr.push('pillow');
console.log(arr);
var num = [10, 20, 30, 40];
console.log(num);
num.push(50);
console.log(num);
//Objects
var obj = {
    name: 'Akinola',
    age: 10,
    belt: 'black',
};
console.log(obj);
obj.name = 'Ade';
obj.belt = 'brown';
console.log(obj);
// objects interface (properties)
var tutor1;
//Explicit types
var chr;
var numbr;
var isLoggedIn;
// Arrays of string
var basket = [];
basket.push('spoon');
console.log(basket);
// Union Types
var mixed = [];
mixed.push('Adewole');
mixed.push(10);
mixed.push(false);
console.log(mixed);
