// Rotating word in the hero tagline
const rotateEl = document.getElementById("hero-rotate");
const words = ["Node.js", "Express.js", "Javascript", "MySQL", "MongoDB"];
let i = 0;

if (rotateEl) {
  setInterval(() => {
    i = (i + 1) % words.length;
    rotateEl.style.opacity = 0;
    setTimeout(() => {
      rotateEl.textContent = words[i];
      rotateEl.style.opacity = 1;
    }, 200);
  }, 2200);

  rotateEl.style.transition = "opacity 0.2s ease";
}

function closeItem(item) {
  const bullets = item.querySelector(".exp-bullets");
  bullets.style.maxHeight = "0px";
  item.classList.remove("is-open");
  item.querySelector(".exp-header").setAttribute("aria-expanded", "false");
}

function openItem(item) {
  const bullets = item.querySelector(".exp-bullets");
  item.classList.add("is-open");
  item.querySelector(".exp-header").setAttribute("aria-expanded", "true");
  bullets.style.maxHeight = bullets.scrollHeight + "px";
}

document.querySelectorAll(".exp-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".exp-item");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".exp-item").forEach(closeItem);

    if (!isOpen) openItem(item);
  });
});

// Open whichever item already has is-open in the HTML on page load
document.querySelectorAll(".exp-item.is-open").forEach(openItem);