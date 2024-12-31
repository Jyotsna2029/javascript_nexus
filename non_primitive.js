// Non-primitive data type

// 1.Object (as dictionary in python)
let obj = {
    name: "Jyotsna",
    age: 20,
    gender: "female"
};
console.log(typeof obj);
console.log(obj);
// 2.Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);
// 3.Function
let fun = function(){   // defining function and storing it in variable
    console.log("Hello");
    return 'jjjjjjjjjjjjjjjjjj';
};
// fun(); // calling function
console.log(fun());
console.log(typeof fun);

// 4.Date
let date = new Date();
console.log(date);
// 5.RegExp (Regular Expression)
let reg = /ab+c/;
console.log(reg);
