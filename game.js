const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  var randomNumber = MAth.floor(Math.random() * 4);
  var randomChosenColour = buttonColours(randomNumber);
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("./sounds" + randomChosenColour + ".mp3");
  audio.play();
}