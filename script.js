var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");
var counter = 0;
var isDead = false;

function jump() {
  //Can't jump if dead
  if (isDead) {
    return;
  }
  if (dino.classList != "animate") { //If the character is not jumping, give it the jumping animation
    dino.classList.add("animate");
  }
  setTimeout(function() { //Set a delay equal to the animation time so the character jumps are consistent 
    dino.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function() {
  if (isDead) {
    return;
  }
  var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  // The use of parseInt gets rid of the "px" that would have been there
  var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 100 && cactusLeft > 0 && dinoTop >= 50) {
    /*
    Below, insert all the functionality described within the slides.

    If confused on how to access CSS attributes, look at which id's need to be changed and the specified attributes. How to 'remove' attributes: use 'none' as the value.
    
    Ex: 
    id: dino
    Accessing CSS: style
    CSS Attribute: backgroundImage
    dino.style.backgroundImage = "url('[insert image]')"

  Using 'alert("[string of your choice]")' will send a prompt that the user must click on in order to access the page functions.

    ~Code below~
    */

    
    
  } else {
    // Increment score below since the dinosaur and cactus have not collided (game has not ended)

    
    
    if (counter % 2 == 0) {
      //dino.style.backgroundImage = "url('[insert image]')"
    } else {
      //dino.style.backgroundImage = "url('[insert image]')"
    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 25);
  }
}, 10);