let canvas = document.getElementById("canvas"), ctx = canvas.getContext('2d');

let cats;

// Fills the screen with hot pink and makes the canvas fullscreen
function init() {
    canvas.height = window.innerHeight, canvas.width = window.innerWidth;
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    cats = document.getElementsByClassName("cat");
}
init();
window.addEventListener("resize", init, false);

// Dimensions of the image/rectangle
let w = 100, h = 100
// Draws the actual cat onto the canvas
function draw(event) {
    let img = cats[Math.floor(Math.random() * cats.length)];
    ctx.drawImage(img, event.clientX - w / 2, event.clientY - h / 2, w, h);
    new Audio('meow.mp3').play();
}

window.addEventListener("click", draw, false);
window.addEventListener("touchstart", draw, false);