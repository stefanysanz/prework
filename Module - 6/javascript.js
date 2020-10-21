function Main() {
  console.log("Main");

  var box = document.getElementById("box")

  var btn1 = document.getElementById("button1")
  btn1.onclick = function () {
    console.log("grow")
    box.style.height = "300px";
    box.style.width = "300px";
  }

  var btn2 = document.getElementById("button2")
  btn2.onclick = function () {
    console.log("blue")
    box.style.backgroundColor = "blue";
  }

  var btn3 = document.getElementById("button3")
  btn3.onclick = function () {
    console.log("fade")
    box.style.opacity = .5;
  }

  var btn4 = document.getElementById("button4")
  btn4.onclick = function () {
    console.log("reset")
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "orange";
    box.style.margin = "25px";
    box.style.opacity = 1;
  }
}
window.onload = Main;