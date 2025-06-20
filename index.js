const elements = document.querySelectorAll("h2, h4");

let currentDirection = Math.random() < 0.5 ? "Left" : "Right";

function applyAnimation(direction) {
  elements.forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = `textShine${direction} 4s linear infinite`;
  });
}

applyAnimation(currentDirection);

setInterval(() => {
  currentDirection = currentDirection === "Left" ? "Right" : "Left";
  applyAnimation(currentDirection);
}, 4000);

