

var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNum1 + ".png";

var randomImageSource = "images/" + randomImage;

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource);






var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNum2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelector(".img2")

image2.setAttribute("src", randomImageSource2);



if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
