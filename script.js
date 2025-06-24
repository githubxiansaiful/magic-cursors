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


//  Footer
const footer = document.querySelector('.section.is-footer');
const wrap = document.querySelector('.wrap');

const lenis = new Lenis({
    duration: 1.7,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Animate on scroll using Lenis
lenis.on('scroll', () => {
    const wrapRect = wrap.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const distanceToBottom = wrapRect.bottom - windowHeight;

    // Progress from 0 to 1
    let progress = 1 - Math.min(Math.max(distanceToBottom / 300, 0), 1);

    // Animate footer slide-up
    footer.style.transform = `translateY(${(1 - progress) * 100}%)`;
});

// Kick off Lenis animation loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
