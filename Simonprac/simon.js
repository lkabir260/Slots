//Declare variables being used
let order = []; // [[] for array...let to initialize variable
//order of lights
let playerOrder = []; // order player is pressing lights in 
let flash;
let turn;
let good; //player hit right colors?
let compTurn; //comp turn?
let strict = false // starts turned off
let noise = true
let on = false; //if program power button on
let win; // player won game?

const turnCounter = document.querySelector("#turn"); //html element referred in js
//creating name reference for turnCounter
//#turn is a CSS selector
const topLeft = document.querySelector ("topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//variable for all elements referenced, because can interact with all these element sexcept for the turn counter
// used const cause all these variables will stay the same


//start with strict button
//make up variable
//event listener listening for some event on that element
//const.addEventListener('event', function,)
//variable (strictButton (defined above)) 
//event is change; arrow function (); 
//used an arrow function:  (pasing into function) => {this is what happens when selected}
strictButton.addEventListener('change', (event) => {if (strictButton.checked == true) {
    strict = true;
} else {
    strict = false;
})
    //.checked can only be used with check boxes 
    // === is strict equality
    //performs type conversion (changes entity from one data type to an)
})
onButton.addEventListener('click', (event) => {
    if (onButton.checked == true){
        on = true;
        turnCounter.innerHTML = "-";
        //inner HTML can use on any HTML element to set to something different
     } else{
            on = false;
            turnCounter.innerHTML = "";
            clearColor();
            clearInterval(intervalID);
        }
    }
})
startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    //for loop to fill up order
    //for loop passes through three different things var i = 0; loop while i is less than 20, increment i)
    for (var i =0; i = 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1); //
    }
    compTurn = true; //

    intervalID = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash == true) {
        clearInterval(intervalID);
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
            }, 200);
        })
    }
}
function one() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
    }
}
function two() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "tomato";
    }
}
function three() {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "yellow";
    }
}
function four() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightskyblue";
    }
function clearColor(){
    topLeft.style.backgroundColor = "darkcgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}
topLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
topRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two(); 
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
bottomLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
bottomRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})
function check() {
    if (playerOrder[playerOrder.length = 1] !== order[playerOrder.length - 1])
    good = false;
    if (playerOrder.length = 20 && good) {
        withGame();
    }
    if (good == false) {
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            clearColor();

            if (strict) {
                play ();
            } else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalID = setInterval(gameTurn, 800);
                }
            }
        }, 800);
        noise = false;
    }
if (turn == playerOrder.length && good && !win) {
    turn**;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalID = setInterval(gameTurn, 800);
    }
}
function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false
    win = true;
}
