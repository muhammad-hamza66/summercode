localStorage.setItem("username", "hamzakhan");

let user = localStorage.getItem("username");
console.log(user);

localStorage.setItem("rollno", "24pwbcs1079");
let roll = localStorage.getItem("rollno");
console.log(roll);

let student = {

    name: "salman",
    fatherName: "shergul",
    dept: " computerscience",
    gender: "male"
}
localStorage.setItem("user", JSON.stringify(student));
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.dept);



let users = [
    { name: "khan", age: 33 },
    { name: "hassan", age: 44 },
    { name: "sikandar", age: 22 }
];


localStorage.setItem("users", JSON.stringify(users));

let user1 = JSON.parse(localStorage.getItem("users"));
console.log(user1[0]);




let products = [
    {
        id: 1,
        name: "laptop",
        price: 45000
    },
    {
        id: 1,
        name: "mobile",
        price: 50000
    },
    {
        id: 1,
        name: "tablet",
        price: 4500
    },
]



localStorage.setItem("products", JSON.stringify(products));
let storedproducts = JSON.parse(localStorage.getItem("products"))

console.log(storedproducts);
console.log(storedproducts[1].price);

let storedproductsArray = JSON.parse(localStorage.getItem("products"));
storedproductsArray.push({
    id: 4,
    name: "headset",
    price: 6000,
},)

localStorage.setItem("products", JSON.stringify(storedproductsArray));




let std = [
    {
        id: 1,
        gender: "male"
    },
    {
        id: 2,
        gender: "female"
    },
    {
        id: 3,
        gender: "male"
    },
    {
        id: 4,
        gender: "male"
    },
    {
        id: 5,
        gender: "female"
    }
]


localStorage.setItem("std" , JSON.stringify(std));
let storedstd = JSON.parse(localStorage.getItem("std" ))

console.log(storedstd);

let stdArray = JSON.parse(localStorage.getItem("std"));
stdArray.push( {
        id: 6,
        gender: "female"
    })
localStorage.JSON.stringify(stdArray);

// let url = 'https://fakerapi.it/api/v2/addresses?_quantity=1';

// async function getData() {

//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }

// async function data(){
//     let rez =await fetch(url);
//     let result = await rez.json();
//     console.log(result);
// }
// fetch(url)
//     .then((responce) => {
//         console.log(responce);
//         return responce.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })sdsdsd
//     .catch((err) => {
//         console.log(" error found ", err);
//     })








// let h1 = document.querySelector('h1');

// function changeColor(color, delay) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color is changed   ${color}`)
//             resolve("color changed");
//         }, delay);
//     });
// }



// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("purple", 1000);
// }

// demo();






// let h1 = document.querySelector("h1");


// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             h1.style.color = color
//             resolve("the color is changed")
//         }, delay);
//     })
// }

// changeColor("red", 1000)
//     .then(() => {

//         console.log(" the color is change");
//         changeColor("blue", 1000)
//     })
//     .then(() => {
//         console.log("the color is change to blue")
//         changeColor("green", 1000)
//     })
//     .then(() => {
//         console.log("the color is change to blue")
//     })


// function savetoDb(data) {

//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1

//         if (internetSpeed < 4) {
//             resolve("connection sussesful")
//         } else {
//             reject("connection weak")
//         }
//     })
// };


// savetoDb("hamza ")
//     .then((result) => {
//         console.log("congrates connection is establish");
//         console.log(result);
//         return savetoDb("khizer ");
//     })
//     .then((result) => {
//         console.log("data 2 saved ");
//         console.log(result);
//         return savetoDb("salman");
//     })
//     .then((result) => {
//         console.log("data 3 saved  ");
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log("try again connectiion is failed");
//         console.log(error);
//     });