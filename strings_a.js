let string  = 'Hello Jyotsna';
console.log(string);
let str = `Hey!`;
console.log(str);

let price = 50;
// console.log("Price of the tomato is", price);
console.log(`Price of the tomato is ${price}`);

// string cancatenation
let s1 = `how `;
let s2 =`are `;
let s3 = `you `;
let s4 = `?`;
console.log(s1+s2+s3+s4);

// length of string
console.log(`the length of string is`,str.length);

// "I am a good person"
console.log('"I am a good person"');

// Next line
console.log('VIKRAM & ANITA \nJyotsna & Palak & Divyanshu');

// Escape character \
let comment = "ASD\\nasdfb";
console.log(comment);

let char_from_string = "VAJPD";
console.log(char_from_string[2]);
console.log(char_from_string.charAt(3));

// lowercase
//TOUPPERCASE
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// Origional string will reemain the same
console.log(str);

let s = "Hello CoderArmy!"
console.log(s.indexOf('oder'));
console.log(s.lastIndexOf('lo'));
console.log(s.includes('lo'));


// extracting the part of the string
let newstr = "HeloDon!";
console.log(newstr.slice(0,3));
console.log(newstr.substring(1,3));

// Replacing Content
let st = "   Hello! Ji! Kaise! Ho! Ji";
console.log(st.replace('Ji', 'Rohit'));
console.log(st.replaceAll('Ji', 'Rohit'));
console.log(st.split("!"));
console.log(st.trim());

// new way to create string
let lstr = new String("Hello Coder Army!");
console.log(lstr);