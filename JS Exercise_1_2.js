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
const form = document.querySelector("#robot-form");
form.addEventListener("createNewRobot", createRobot);

function createRobot(event) {
    const name = form.querySelector("input[name ='robot-name']");
    const type = form.querySelector(".drop-downs-options select").value;
    const color = form.querySelector("input[name ='color-picker']");
    robot1.robot_name = name;
    robot1.color = color;
    robot1.type = type;
    event.preventDefault();

}