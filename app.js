let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {

    if (character.classList.contains("animate")) {
        return;
    }

    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}
let checkIfDead = setInterval(function () {
    let characterStyle = getComputedStyle(character);
    let characterStyleValue = parseInt(characterStyle.getPropertyValue('top')) * -1;
    let blockStyle = getComputedStyle(block);
    let blockStyleValue = parseInt(blockStyle.getPropertyValue('left')) * -1;

    console.log('left' + blockStyleValue + ' top ' + characterStyleValue);


    if ((blockStyleValue > 86 && blockStyleValue <= 130) && characterStyleValue < 190) {
        block.style.animation = "none";
        block.style.display = "none";
        alert('u lose');
        
    }
}, 10);
