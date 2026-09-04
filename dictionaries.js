//using object literals

let dictionary ={};
dictionary["key1"]="value1";
dictionary["key2"]="value2";
console.log(dictionary);

//using object constructor
let diction = new Object();
diction["key1"]="value1";
diction["key2"]="value2";
console.log(diction);

//using ES6 map
let dict = new Map();
dict.set("key1","value1");
dict.set("key2","value2");
console.log("Key1 :",dict.has("key1"));

//using Object.assign()
Object.assign(dictionary,{"key1":"value1","key2":"value2"});
console.log(dictionary);

//using the spread operator
dictionary = { ...dictionary, "key1":"value1","key2":"value2"};
console.log(dictionary);

//using bracket notation
let key = "key1";
let value = "value2";
dictionary[key] = value;
console.log(dictionary);

//using dot notation
dictionary.key1="value1";
dictionary.key2="value2";
console.log(dictionary);