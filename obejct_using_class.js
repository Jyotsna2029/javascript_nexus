class People{
    constructor(N,A,G){
        this.name = N;
        this.age = A;
        this.gender = G; 
    }
}

let person1 = new People('Jyotsna',20,'Female');
console.log(person1);
let person2 = new People('Palak',18,'Female');
console.log(person2);
let person3 = new People('Divyanshu',14,'Male');
console.log(person3);


// ALL KEYS AT ONCE
const arr1 = Object.keys(person1);
console.log(arr1);
// ALL Values at ONCE
const arr2 = Object.values(person2);
console.log(arr2);

// All key: value pairs at once
const arr3 = Object.entries(person3);
console.log(arr3);


