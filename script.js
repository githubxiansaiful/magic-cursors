const cursorBG = document.getElementById('magic-cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX - 75; // center based on width/height (150px)
    mouseY = e.clientY - 75;
});

function animateCursor() {
    // Lerp: interpolate towards target position
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    cursorBG.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    requestAnimationFrame(animateCursor);
}

animateCursor();
