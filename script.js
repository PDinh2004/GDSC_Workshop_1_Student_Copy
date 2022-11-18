var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var isDead = false;

function jump() {
  //Can't jump if dead
  if (isDead) {
    return;
  }
  if (character.classList != "animate") { //If the character is not jumping, give it the jumping animation
    character.classList.add("animate");
  }
  setTimeout(function() { //Set a delay equal to the animation time so the character jumps are consistent 
    character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function() {
  if (isDead) {
    return;
  }
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  //The use of parseInt gets rid of the "px" that would have been there
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    isDead = true;
    character.style.backgroundImage = "url('./dino-lose.png')"
    alert("You lose!");
  } else {
    counter++;
    if (counter % 2 == 0) {
      character.style.backgroundImage = "url('./dino-run-0.png')"
    } else {
      character.style.backgroundImage = "url('./dino-run-1.png')"
    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);