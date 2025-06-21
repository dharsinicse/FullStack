var r1=Math.floor(Math.random()*6)+1;
var r2=Math.floor(Math.random()*6)+1;
document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+r1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+r2+".png");
document.getElementsByTagName("h1")[0].textContent=r1===r2 ? " 🚩draw 🚩": r1>r2 ? '🚩player1 wins':'player2 wins🚩';