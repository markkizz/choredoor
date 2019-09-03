//declare the object
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var botDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoor = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

//door event
doorImage1.onclick = () =>{
    doorImage1.src = botDoor;
}
doorImage2.onclick = () =>{
    doorImage2.src = beachDoor;
}
doorImage3.onclick = () =>{
    doorImage3.src = spaceDoor;
}
// TODO: create through a task"Let's Make This ACT Like a Game! - Part I"