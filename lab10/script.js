document.getElementById("start").addEventListener("click", () => {
  const width = parseInt(document.getElementById("width").value, 10);
  const growth = parseInt(document.getElementById("growth").value, 10);
  const rate = parseInt(document.getElementById("rate").value, 10);
  const numCircles = parseInt(document.getElementById("numCircles").value, 10);

  const container = document.getElementById("container");
  container.innerHTML = "";

  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = `${width}px`;
    circle.style.height = `${width}px`;
    circle.style.left = `${Math.random() * (container.clientWidth - width)}px`;
    circle.style.top = `${Math.random() * (container.clientHeight - width)}px`;

    circle.addEventListener("click", () => {
      circle.remove();
    });

    container.appendChild(circle);
    growCircle(circle, growth, rate);
  }
});

function growCircle(circle, growth, rate) {
  setInterval(() => {
    const currentWidth = parseInt(circle.style.width, 10);
    circle.style.width = `${currentWidth + growth}px`;
    circle.style.height = `${currentWidth + growth}px`;
  }, rate);
}

// Helper function to generate a random color
function randomColor() {
  return Math.random();
}
