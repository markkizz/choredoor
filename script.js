//declare the object
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
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

//door event
doorImage1.onclick = () =>{
    doorImage1.src = openDoor1;
}
doorImage2.onclick = () =>{
    doorImage2.src = openDoor2;
}
doorImage3.onclick = () =>{
    doorImage3.src = openDoor3;
}


//excute function
randomChoreDoorGenerator();