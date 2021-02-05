// main.js
// var doc = document.implementation.createDocument("","", null);
var volume = 50;
var slider = document.getElementById("volume-slider");
var volNum = document.getElementById("volume-number");
var volImg = document.getElementById("volume-image");

var honkBtn = document.getElementById("honk-btn");
var radioChoice = document.getElementById("audio-selection");
radioChoice.addEventListener("change", changeHorn);
var radioIcon = document.getElementById("sound-image");
var form = document.getElementById("party-horn-form");
var horn = document.getElementById("horn-sound");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(volume > 0) {
        horn.play(); 
    }
});

slider.oninput = function() {
    volNum.value = this.value;
    volume = this.value;
    horn.volume = volume / 100;
    changeIcon();
}

volNum.oninput = function() {
    slider.value = this.value;
    volume = this.value;
    horn.volume = volume / 100;
    changeIcon();
}

function changeHorn() {
    if(document.getElementById("radio-air-horn").checked) {
        radioIcon.src = "./assets/media/images/air-horn.svg"
        horn.src = "./assets/media/audio/air-horn.mp3"
    } else if (document.getElementById("radio-car-horn").checked) {
        radioIcon.src = "./assets/media/images/car.svg"
        horn.src = "./assets/media/audio/car-horn.mp3"
    } else {
        radioIcon.src = "./assets/media/images/party-horn.svg"
        horn.src = "./assets/media/audio/party-horn.mp3"
    }
}

function changeIcon() {
    if(volume > 66) {
        volImg.src = "./assets/media/icons/volume-level-3.svg"
    } else if (volume > 33) {
        volImg.src = "./assets/media/icons/volume-level-2.svg"
    } else if (volume > 0) {
        volImg.src = "./assets/media/icons/volume-level-1.svg"
    } else {
        volImg.src = "./assets/media/icons/volume-level-0.svg"
    }
}

// TODO
