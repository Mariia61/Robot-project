/* 
var randomWords = ["Hello", "Nice to meet you", "How are you"];

function timeFunction() {
   setTimeout(function () { alert(randomWords[Math.floor(Math.random() * 3)]); }, 2000);
}

let robot1 = { robot_name, color, type };

var load = document.getElementById("body");

function assign_phrase() {
   robot2.phrase = "Hello, " + robot2.robot_name + " !";
}

load.addEventListener("load", assign_phrase);
*/


var robots = [];

const createBtn = document.getElementById("createNewRobotButton");
createBtn.addEventListener("click", createRobot);

const showRobotVariable = document.getElementById("showNewRobotButton");
showRobotVariable.addEventListener("click", showRobot);



//method for disabling and enabling the phrase input field
function onCheckBoxTalkChecked() {
    const checkbox = document.querySelector('#checkbox-talk');
    if (checkbox.checked) {
        const phrase = document.querySelector('#phrase');
        phrase.disabled = false;
    } else {
        phrase.disabled = true;
    }
}

var namee;
var gender;
var color; 

function createRobot(event) {
     namee = form.querySelector('#robot-name');
     type = document.getElementById('robot-type');
     gender = select.options[select.selectedIndex].value;
     color = document.getElementById('#color-picker').value;

    var robotN = {
        robot_name: namee,
        robotColor: color,
        robotGender: gender
    };

    robots.push(robotN);

    event.preventDefault();

}

function showRobot(event) {

const section = document.querySelector(".contentWrapper");
const newDiv= document.createElement("div");

section.appendChild(newDiv);


    event.preventDefault();
}

function removeElements() {

    var firstItem = document.querySelector('.flexbox-item-1');
    firstItem.remove();

    const secondItem = document.querySelector('.flexbox-item-2');
    secondItem.remove();

    const thirdItem = document.querySelector('.flexbox-item-3');
    thirdItem.remove();

    const fourthItem = document.querySelector('.flexbox-item-4');
    fourthItem.remove();


}









