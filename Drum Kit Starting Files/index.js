var numOfButton = document.querySelectorAll(".drum").length

for (var i = 0;i<numOfButton; i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);

    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})

function makeSound(key){
    switch (key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom = new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
        case "j":
            var tom = new Audio("sounds/tom-2.mp3");
            tom.play();
            break;
        case "k":
            var tom = new Audio("sounds/tom-3.mp3");
            tom.play();
            break;
        case "l":
            var tom = new Audio("sounds/tom-4.mp3");
            tom.play();
            break  ;   
        default:
            console.log("Error") 
    }
}

function makeAnimation(key){
    var actButton = document.querySelector("." + key);
    actButton.classList.add("pressed");

    setTimeout(function(){
        actButton.classList.remove("pressed");
    },100)
}