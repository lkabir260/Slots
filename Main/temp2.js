/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

var doing = false;
let status = document.getElementById("status")
var info = true;
//this function is for the slots
function doSlot(){
    //if true this is what happens 
	if (doing){return null;}
    doing = true;
    
    // variables  defined for each slot
    //(min,max)*number
    var numChanges = randomInt(1,4)*7
	var numeberSlot1 = numChanges+randomInt(1,7)
	var numeberSlot2 = numChanges+2*7+randomInt(1,7)
	var numeberSlot3 = numChanges+4*7+randomInt(1,7)

	var i1 = 0;
	var i2 = 0;
	var i3 = 0;
    var sound = 0
    //status bar
    //returns html content for status 
    status.innerHTML = "SPINNING"
    //evaluates function for speicifed intervals setInterval (function,seconds)
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
    slot3 = setInterval(spin3, 50);
    

    //funtion for each spin
	function spin1(){
        //increment by 1
        i1++;
        //greater than or equal too
		if (i1>=numeberSlot1){
            //coin[array].play() function plays for a certain period of time
            coin[0].play()
            //stops execution
			clearInterval(slot1);
			return null;
        }
        //get element with slot1 ID
        slotTile = document.getElementById("slot1");
        //.className gets and sets class attribute for the class attribute (list of classes)
		if (slotTile.className=="a6"){
			slotTile.className = "a0";
        }
        //parseInt parses string and returns integer
        // slotTile.className.substring(1)   - substring returns new string from indices of a string
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			coin[1].play()
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a6"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			coin[2].play()
			clearInterval(slot3);
			testWin();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a6"){
			slotTile.className = "a0";
		}
		// sound++;
		// if (sound==spin.length){
		// // 	sound=0;
		// // }
		// spin[sound].play();
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
	}
}

//win logic
function testWin(){
    //gets element from each slot
	var slot1 = document.getElementById("slot1").className
	var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className
    //||or

	if (((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2) ||
		(slot1 == slot3) ||
		(slot2 == slot3) ||
		(slot1 == slot2) ||
		(slot1 == slot3) ||
		(slot2 == slot3) ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a6")){
		status.innerHTML = "YOU WIN!";
		win.play();
	}else{
		status.innerHTML = "YOU LOSE!"
		lose.play();
	}
	doing = false;
}

(((slot1 == slot2 && slot2 == slot3) ||
		(slot1 == slot2 && slot3 == "a6") ||
		(slot1 == slot3 && slot2 == "a5") ||
		(slot2 == slot3 && slot1 == "a4") ||
		(slot1 == slot2 && slot1 == "a3") ||
		(slot1 == slot3 && slot1 == "a2") ||
		(slot2 == slot3 && slot2 == "a1") )

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}