let phrases = ["Hello, Gosho 2", "Nice to meet you, Gosho 2", "How are you Gosho 2"];

function timeFunction() {
    setTimeout(function () { alert(phrases[2]); }, 2000);
}


let robot1 = { robot_name: "Gosho", color: "orange", type: "male", phrase: "" };
let robot2 = { robot_name: "Gosho 2", color: "green", type: "male", phrase: "" };

var load = document.getElementById("body");

function assign_phrase() {
    robot2.phrase = "Hello, " + robot2.robot_name + " !";
}

load.addEventListener("load", assign_phrase);