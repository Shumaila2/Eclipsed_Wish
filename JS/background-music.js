const button = document.getElementById("music-button");
const music = document.getElementById("bg-music");
const buttonIcon = button.querySelector("img"); // targeting the image inside the button
let isPlaying = false;

button.addEventListener("click", () => {
if (!isPlaying) {
    music.volume = 0.4;
    music.play();
    buttonIcon.src = "img/pause-fill.svg"; // change to pause image
    buttonIcon.alt = "Pause";
} else {
    music.pause();
    buttonIcon.src = "img/music-note-beamed.svg"; // change back to play image
    buttonIcon.alt = "Play";
}
isPlaying = !isPlaying;
});

// Auto-pause background music when any slider audio plays
const sliderAudios = document.querySelectorAll(".slider-audio");
sliderAudios.forEach(audio => {
    audio.addEventListener("play", () => {
        if (!music.paused) {
            music.pause();
            buttonIcon.src = "img/music-note-beamed.svg";
            buttonIcon.alt = "Play";
            isPlaying = false;
        }
    });
});