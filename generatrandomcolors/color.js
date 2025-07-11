
let btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let h3 = document.querySelector('h3');
    let randomcolor = getRandomColors();
    h3.innerText =  randomcolor ;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomcolor;

    console.log("the color is updated ");

});

function getRandomColors() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let Color = `rgb(${red}, ${green}, ${blue})`;
    return Color;
}

console.log("Generated Random Color:", getRandomColors());
