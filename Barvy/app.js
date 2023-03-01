const colors = ["green","red", "blue","yellow","black", "rgba(133,122,200)","#F1025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color")

btn.addEventListener("click", function(){
    console.log("Jsem ve funkci");
    let cisloBarvy = VratNahodneCislo();
    document.body.style.backgroundColor = colors[cisloBarvy];
    color.textContent = colors[cisloBarvy];
});

function VratNahodneCislo()
{
    return Math.floor(Math.random() * colors.length);
}