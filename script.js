//declare the object
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var btStart = document.getElementById("start");
var doorAll = document.querySelectorAll(".door-frame");
var foundBot = true;
//Door random
var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;

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
//Winner diplay
var doorImgChange = [botDoor, beachDoor, spaceDoor];

const playDoor = (doorImg) =>{
    //Decrease numClosedDoors
    for(let i=0 ; i<doorImgChange.length ; i++){
        if(doorImg === doorImgChange[i]){
            numClosedDoors -= 1;
            console.log(numClosedDoors);//d
            console.log(!foundBot);//d
        }
    }
    //winner
    if(numClosedDoors === 0 && doorImg === botDoor){
        //yeah! you a winner
        btStart.textContent = "You win! Play again?"
    }
    //game over when found Bot
    if(numClosedDoors !== 0 && doorImg === botDoor){
        //sorry game over
        btStart.textContent = "Game over! Play again?"
    }
}

//reset game
const gameReset = () =>{
    btStart.onclick = () =>{
        for(let i=0 ; i<doorAll.length ; i++){
            doorAll[i].src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
        }
        numClosedDoors = 3;
        btStart.textContent = "Good luck!";
    }

    // score collect
}
//TODO: fixed the bug when open the door and bot is found but other door still working
//door event
if(foundBot){
    doorImage1.onclick = () =>{
        doorImage1.src = openDoor1;
        playDoor(doorImage1.src);
        foundBot = false;
    }
    doorImage2.onclick = () =>{
        doorImage2.src = openDoor2;
        playDoor(doorImage2.src);
    }
    doorImage3.onclick = () =>{
        doorImage3.src = openDoor3;
        playDoor(doorImage3.src);
    }
}

//excute function
randomChoreDoorGenerator();
gameReset();