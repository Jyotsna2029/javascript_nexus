let obj1 = {1:"a",2:"b"};
let obj2 = {3:"c", 4:"d"};

const obj3 = Object.assign({},obj1,obj2);
const obj4 = {...obj1,...obj2};

console.log(obj3);
console.log(obj4);