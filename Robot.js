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


function createRobot(event) {
    const name = form.querySelector('#robot-name');
    const select = document.getElementById('robot-type');
    const type = select.options[select.selectedIndex].value;
    const color = document.getElementById('#color-picker').value;

    var robotN = {
        robot_name: name,
        color: color,
        gender: type
    };

    robots.push(robotN);

    event.preventDefault();

}

function showRobot(event) {

    event.preventDefault();




    /*const section = document.querySelector(".contentWrapper");
    const box = document.querySelector(".flexbox-item-1");
    section.append(box);
    */

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









