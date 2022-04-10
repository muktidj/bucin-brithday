import confetti from 'https://cdn.skypack.dev/canvas-confetti';
var colors = ["yellow", "green"];


function frame() {
  confetti({
    particleCount: 1,
    // angle: 60,
    // spread: 55,
    angel: 50,
    spread: 110,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 1,
    // angle: 120,
    // spread: 55,
    angel: 140,
    spread: 110,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 15000) {
    requestAnimationFrame(frame);
  }
}

window.onload = frame();
