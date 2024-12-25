// const myArray = [1, 2, 3, 4];
//const myList = myArray.map((item) => item*2);
//bên trong hàm map là function
// const myList = myArray.map((item, index)=> {
//     console.log(item, index);
//     return item*2;
// });

// console.log(myList);


const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     console.log(age >= 18);
//     return age >= 18;
// }

const result = ages.filter((item)=>{
    console.log(item);
    
    return item >= 18;
});
console.log(result);
