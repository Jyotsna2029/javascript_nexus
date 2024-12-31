let a = "29";
let num = Number(a);
console.log(typeof a);
console.log(typeof num);



let b = true;
let boolToStr = String(b);
console.log(typeof b);
console.log(typeof boolToStr);
 
let c = "100xs";
console.log(Number(c)); //Nan (Not a number)



let d = null;
console.log(Number(d)); //0 (null is converted to 0)
console.log(String(d));

let e;
console.log(Number(e)); //Nan (undefined is converted to NaN)
console.log(String(e));

let f = true;
let number = Number(f);
console.log(number); //1 (true is converted to 1)
// if string is empty then it will be converted to 0