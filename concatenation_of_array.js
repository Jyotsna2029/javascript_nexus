let arr1 = [2,35,6,11];
let arr2 = ["v","a","j","p","d"];
let concatenated_arr = arr1.concat(arr2); 
console.log(concatenated_arr);
let c_arr = arr1.concat(arr1); 
console.log(c_arr);

// 2d array
let arr2d =[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[1]);
console.log(arr2d[1][1]);

// 2d array to 1d array
let newarray = arr2d.flat();
console.log(newarray);
console.log(Array.isArray(newarray));