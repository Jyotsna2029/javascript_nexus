const arr = [2,35,1,8,9,'ROHIT',true];
// length of array
console.log(arr.length);
// elt of array
console.log(arr[5]);
// OR
// this one can take negative index also
console.log(arr.at(5));

// pass by reference
const newarr = arr;
console.log(newarr == arr);

// create clone of arr (makeing copy of the array)
const new_arr = structuredClone(arr);
console.log(new_arr ==  arr);

// push
arr.push('jyotsna')
arr.push('palak')
console.log(arr);

// pop
arr.pop();
console.log(arr);

// add element at start
arr.unshift('Maliram');
arr.unshift('Vikram')
console.log(arr);

// delete elt from start
arr.shift();
console.log(arr);

// delete with hole
delete arr[0];
console.log(arr);

// index of first occurence
console.log(arr.indexOf('jyotsna'));

// elt is included or not
console.log(arr.includes('jyotsna'));

// slice
console.log(arr.slice(1,5));
console.log(arr);

// splice
console.log(arr.splice(1,5));
console.log(arr);
console.log(arr.splice(1,5,'v','a','j','p','d'));
console.log(arr);

// to string
console.log(arr.toString());

// join (to string with "##" anything in between)
console.log(arr.join('$$')) 