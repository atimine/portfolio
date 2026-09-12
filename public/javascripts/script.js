// Rotating word in the hero tagline
const rotateEl = document.getElementById("hero-rotate");
const words = ["Node.js", "Express.js", "Javascript", "MySQL", "MongoDB"];
let i = 0;

const avatar = document.querySelector(".panel-avatar");
const popup = document.getElementById("imagePopup");
const close = document.querySelector(".close");

if (avatar && popup && close) {
  avatar.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    popup.style.display = "none";
  });
  
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}

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

// // Open whichever item already has is-open in the HTML on page load
document.querySelectorAll(".exp-item.is-open").forEach(openItem);

const projectsData = {
  "be-commerce": {
    title: "BE Commerce",
    image: "/images/project-be-commerce.svg",
    tagline: "A full-stack eCommerce platform with payments, product management, and reviews.",
    bullets: [
      "BE-Commerce started as my attempt to build a complete online shopping experience from scratch. I wanted users to browse, review, and actually make purchases in real time with Stripe.",
      "I designed a clean, responsive UI with Tailwind CSS that feels natural on any device. Featuring shimmer loaders, pagination, and real-time order tracking timeline.",
      "On the backend, I created a secure authentication system using JWT, bcrypt, Google OAuth and Mailtrap, ensuring users could safely register, log in, and manage their profiles.",
      "Built on the MERN stack with Express and MongoDB, the system handles products, users, and images efficiently through a well structured REST API and Cloudinary integration."
    ],
    tags: [
      { slug: "react", color: "61dafb", label: "React.js" },
      { slug: "redux", color: "764abc", label: "Redux" },
      { slug: "nodedotjs", color: "339933", label: "Node.js" },
      { slug: "express", color: "ffffff", label: "Express" },
      { slug: "mongodb", color: "47a248", label: "MongoDB" },
      { slug: "tailwindcss", color: "38bdf8", label: "Tailwind CSS" },
      { slug: "framer", color: "ff3399", label: "Framer Motion" }
    ],
    github: "https://github.com/your/repo",
    live: "https://your-live-url.com"
  }
  // add "rewarder", "fundverse", "fusion" here the same way
};

function openModal(id) {
  const data = projectsData[id];
  if (!data) return;

  document.getElementById("modal-image").src = data.image;
  document.getElementById("modal-image").alt = data.title + " preview";
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-tagline").textContent = data.tagline;

  document.getElementById("modal-bullets").innerHTML = data.bullets
    .map(
      (b) => `<li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <span>${b}</span>
      </li>`
    )
    .join("");

  document.getElementById("modal-tags").innerHTML = data.tags
    .map((t) => `<span class="skill-tag"><img src="https://cdn.simpleicons.org/${t.slug}/${t.color}" alt="" /> ${t.label}</span>`)
    .join("");

  document.getElementById("modal-github").href = data.github;
  document.getElementById("modal-live").href = data.live;

  document.getElementById("project-modal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("project-modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a.icon-circle")) return; // let GitHub/live links behave normally
    openModal(card.dataset.project);
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  });
});

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("project-modal").addEventListener("click", (e) => {
  if (e.target.id === "project-modal") closeModal(); // click outside closes it
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
