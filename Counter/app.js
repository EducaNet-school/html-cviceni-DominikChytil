let counter = 0;
document.getElementById("btn increase").onclick = function(){
    counter += 1;
    document.getElementById("value").innerHTML = counter;
    if (counter > 0) {
        document.getElementById("value").style.color = "green";
    } else if (counter < 0) {
        document.getElementById("value").style.color = "red";
    } else {
        document.getElementById("value").style.color = "black";
    }
}
document.getElementById("btn decrease").onclick = function(){
    counter -= 1;
    document.getElementById("value").innerHTML = counter;
    if (counter > 0) {
        document.getElementById("value").style.color = "green";
    } else if (counter < 0) {
        document.getElementById("value").style.color = "red";
    } else {
        document.getElementById("value").style.color = "black";
    }
}
document.getElementById("btn reset").onclick = function(){
    counter = 0;
    document.getElementById("value").innerHTML = counter;
    document.getElementById("value").style.color = "black";
}