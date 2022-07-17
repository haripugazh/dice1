var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdice="images/dice"+randomnumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdice);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice1="images/dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdice1);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}
