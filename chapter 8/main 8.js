//thao tác với object dùng {}, không quan trọng thứ tư
//thao tác với array dùng [], quan trong thứ tự

// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { eyeColor, name } = person;
console.log(name); //Eric
console.log(eyeColor); //26