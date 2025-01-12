const obj = {
    Name: 'John',
    Age: 28,
    Gender: "Male",
    Address: {
        City: 'New York',
        Country: 'USA'
    },
    "account number" : 12345234658,
    0:'Vikram'
} 
console.log(obj);
console.log(typeof(obj));
console.log(obj.Address);
console.log(obj['Address']);
console.log(obj[0]);  //same as array but in array key is index
// key can be named as undefined or null but isn't recommended


const person = new Object();
// properties of our person object
// creating key mvalue pair
person.Name = 'Jyotsna';
person.age = '21';
person.Gender = 'Female';
person.job = 'SDE3 at Google'

console.log(person);

// deleting a property
delete person.Gender;
console.log(person);

// Updation
person.age = '20';
console.log(person);
