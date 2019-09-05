//declare the object
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var closeDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
var btStart = document.getElementById("start");
var doorAll = document.querySelectorAll(".door-frame");
var foundBot = false;
//Door random
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;

const randomChoreDoorGenerator = () => {
    var choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoor;
        openDoor2 = beachDoor;
        openDoor3 = spaceDoor;
    } else if (choreDoor === 1) {
        openDoor2 = botDoor;
        openDoor1 = beachDoor;
        openDoor3 = spaceDoor;
    } else {
        openDoor3 = botDoor;
        openDoor2 = beachDoor;
        openDoor1 = spaceDoor;
    }
}
//Winner diplay
var doorImgChange = [botDoor, beachDoor, spaceDoor];

var playDoor = (doorImg) => {
    //Decrease numClosedDoors
    for (let i = 0; i < doorImgChange.length; i++) {
        if (doorImg === doorImgChange[i]) {
            numClosedDoors -= 1;
        }
    }
    //winner
    if (numClosedDoors === 0 && doorImg === botDoor) {
        //yeah! you a winner
        btStart.textContent = "You win! Play again?";
        roundWin('win');
    }
    //game over when found Bot
    if (numClosedDoors !== 0 && doorImg === botDoor) {
        //sorry game over
        btStart.textContent = "Game over! Play again?";
        //and we found bot!
        foundBot = true;
    }
}

//door event
doorImage1.onclick = () => {
    if(!foundBot){
        doorImage1.src = openDoor1;
        playDoor(doorImage1.src);
    }

}
doorImage2.onclick = () => {
    if(!foundBot){
        doorImage2.src = openDoor2;
        playDoor(doorImage2.src);
    }
    
}
doorImage3.onclick = () => {
    if(!foundBot){
        doorImage3.src = openDoor3;
        playDoor(doorImage3.src);
    }
    
}


//reset game
const gameReset = () => {
    btStart.onclick = () => {
        for (let i = 0; i < doorAll.length; i++) {
            doorAll[i].src = closeDoor;
        }
        numClosedDoors = 3;
        btStart.textContent = "Good luck!";
        foundBot = false;
        randomChoreDoorGenerator();
    }

    // score collect
}

//excute function
randomChoreDoorGenerator();
gameReset();

//win streak collection
var scoreNum = document.getElementById("score-number");
var highScore = document.getElementById("high-score-number");
var roundWin = 0;
var collectWin = () =>{
    let i=0;
    i += roundWin;
    return i;
}

btStart.onchange = function(){
    if(btStart.textContent === "You win! Play again?"){
        roundWin += 1;
    }
}
scoreNum.textContent = roundWin;
highScore.textContent = collectWin();
//TODO: make the winner streak