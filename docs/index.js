// For first dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomImageDice1 = "images/"+randomImage1;
document.querySelector("img.img1").setAttribute("src",randomImageDice1);

//For second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randomNumber2+".png";
var randomImageDice2 = "images/"+randomImage2;
document.querySelector("img.img2").setAttribute("src",randomImageDice2);


//Conditional
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}