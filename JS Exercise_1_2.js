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

var createBtn = document.getElementById("createNewRobotButton");
createBtn.addEventListener("click", createRobot);
createBtn.addEventListener("click", showRobots);

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


function createRobot() {
    const name = form.querySelector('#robot-name');
    var select = document.getElementById('robot-type');
    var type = select.options[select.selectedIndex].value;
    var color = document.getElementById('#color-picker').value;

    var robotN = {
        robot_name: name,
        color: color,
        gender: type
    };

    robots.push(robotN);

    // event.preventDefault();

}

function showRobots() {
    console.log(robots);
}

function hideSection() {

    const roboSection = document.querySelector('#robotLoadSection');
    roboSection.style.display = "none";
}




