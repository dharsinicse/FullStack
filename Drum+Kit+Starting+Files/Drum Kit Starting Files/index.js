// practice file

for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        ButtonInnerHTML = this.innerHTML ;

        switch (ButtonInnerHTML) {
            case "w":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break
            case "a": 
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case "s": 
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "d": 
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            case "j": 
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            case "k": 
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "l": 
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            default: console.log(ButtonInnerHTML);

        }
    });
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var ButtonInnerHTML = this.innerHTML;
    makeSound(ButtonInnerHTML);
    buttonAnimation(ButtonInnerHTML);
    alert("clicked");
  });
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}
