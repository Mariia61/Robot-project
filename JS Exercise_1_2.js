let phrases = ["Hello", "Nice to meet you", "How are you "];

function timeFunction() {
    setTimeout(function () { alert(phrases[2]); }, 2000);
}

let robot1 = { robot_name, color, type };
/*
var load = document.getElementById("body");

function assign_phrase() {
    robot2.phrase = "Hello, " + robot2.robot_name + " !";
}

load.addEventListener("load", assign_phrase);
*/

const robots = [];


const form = document.querySelector("#robot-form");
const phrase = form.querySelector("comment");
form.addEventListener("createNewRobot", createRobot);



function onCheckBoxTalkChecked() {
    const checkbox = form.querySelector("input[name ='checkboxTalk']");
    phrase.disabled = checkbox.checked;
}


function createRobot(event) {
    const name = form.querySelector("input[name ='robot-name']");
    const type = form.querySelector(".drop-downs-options select").value;
    const color = form.querySelector("input[name ='color-picker']");


    let robotN;
    robotN.robot_name = name;
    robotN.color = color;
    robotN.type = type;
    robots.push(robotN);

    event.preventDefault();

}