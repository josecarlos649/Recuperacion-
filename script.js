let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");


play_btn.addEventListener("click", () => {
    cancion.play();
});