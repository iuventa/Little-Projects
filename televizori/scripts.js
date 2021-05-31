
var color=document.getElementsByClassName("button").value;
function myFunction(color) {
    
 
    console.log(color);
    
    document.getElementById("screen").style.backgroundColor = color;
  }
function On() {
    document.getElementById("screen").style.backgroundColor="white";
    // document.getElementById("screen").style.backgroundImage = "repeating-linear-gradient(black, grey, 10%, white 13%)";
}
function Off() {
    console.log(0);
    document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
