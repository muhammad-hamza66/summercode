let h1 = document.querySelector("h1");


function changeColor(color, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            h1.style.color = color
            resolve("the color is changed")
        }, delay);
    })
}

changeColor("red", 1000)
    .then(() => {

        console.log(" the color is change");
        changeColor("blue", 1000)
    })
    .then(() => {
        console.log("the color is change to blue")
        changeColor("green", 1000)
    })
    .then(() => {
        console.log("the color is change to blue")
    })


function savetoDb(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1

        if (internetSpeed < 4) {
            resolve("connection sussesful")
        } else {
            reject("connection weak")
        }
    })
};


savetoDb("hamza ")
    .then((result) => {
        console.log("congrates connection is establish");
        console.log(result);
        return savetoDb("khizer ");
    })
    .then((result) => {
        console.log("data 2 saved ");
        console.log(result);
        return savetoDb("salman");
    })
    .then((result) => {
        console.log("data 3 saved  ");
        console.log(result)
    })
    .catch((error) => {
        console.log("try again connectiion is failed");
        console.log(error);
    });