var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector("#header");
var systemMessageDispaly = document.querySelector("#colorDisplay");

// start
var colors = generateRandomColors(6);
pickedColor = pickColors()

// reset5y5
resetButton.addEventListener('click',function(){
    colors = generateRandomColors(6);
    pickedColor = pickColors();
    systemMessageDispaly.innerHTML = pickedColor;
    headers.style.backgroundColor = "steelblue";
    for (i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

systemMessageDispaly.innerHTML = pickedColor;

for (i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i]; 
    squares[i].addEventListener('click',function(){
    });
}

//helper function
function changeColors(color){
    for(i=0;i<=squares.length;i++){
        squares[i].style.backgroundColor = color;     
    }
}
function pickColors(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function randomColors(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // RGB is a string
    return "rgb("+red+","+green+","+blue+")";
}

function generateRandomColors(num){
    var arr = [];
    for(i=0;i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}