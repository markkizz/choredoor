//declare the object
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
//store close img
var closeDoor = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
//Door random
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
//start buttom
var btStart = document.getElementById("start");
//door will not open when we found bot door
var currentPlay = true;


//check if found bot 
const isBot = (door) =>{
    if(door.src === botDoor){
        return true;
    }
    else {
        return false;
    }
}

//check the door if door clicked already
const isClicked = (door) =>{
    if(door.src === closeDoor){
        return false;
    }
    else {
        return true;
    }
}

const playDoor = (door) =>{
    numClosedDoors-- ;
    if(numClosedDoors===0){
        gameOver('win');
    }
    else if(isBot(door)) {
        gameOver('lose');
    }
}


const randomChoreDoorGenerator = () =>{
    var choreDoor = Math.floor(Math.random() * numClosedDoors);
    if(choreDoor === 0){
        openDoor1 = botDoor;
        openDoor2 = beachDoor;
        openDoor3 = spaceDoor;
    }
    else if(choreDoor ===1){
        openDoor2 = botDoor;
        openDoor1 = beachDoor;
        openDoor3 = spaceDoor;
    }
    else {
        openDoor3 = botDoor;
        openDoor2 = beachDoor;
        openDoor1 = spaceDoor;
    }
}

//door event
doorImage1.onclick = () =>{
    if(currentPlay && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
    
}
doorImage2.onclick = () =>{
    if(currentPlay && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
    
}
doorImage3.onclick = () =>{
    if(currentPlay && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }

}
//game over
const gameOver = (status) =>{
    if(status === 'win') {
        btStart.textContent = "You win! Play again?";
    }
    else{
        btStart.textContent = 'Game over! Play again?';
    }
    currentPlay = false;
}
//excute function
randomChoreDoorGenerator();