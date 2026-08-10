// ==========================================
// ATUL SINGH PORTFOLIO V2.0
// ==========================================

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Scroll progress
const progressBar = document.querySelector(".scroll-progress");

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? scrollTop / height : 0;
  progressBar.style.transform = `scaleX(${progress})`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

// Typing effect
const words = [
  "Full-Stack Developer",
  "Web Developer",
  "ERP Developer",
  "UI/UX Enthusiast"
];

const typingText = document.getElementById("typing-text");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  typingText.textContent = deleting
    ? word.substring(0, charIndex - 1)
    : word.substring(0, charIndex + 1);

  charIndex += deleting ? -1 : 1;

  let speed = deleting ? 45 : 85;

  if (!deleting && charIndex === word.length) {
    deleting = true;
    speed = 1700;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// AOS
if (window.AOS) {
  AOS.init({
    duration: 700,
    offset: 80,
    once: true,
    easing: "ease-out-cubic"
  });
}

// tsParticles
if (window.tsParticles) {
  tsParticles.load("tsparticles", {
    particles: {
      number: {
        value: 38,
        density: { enable: true, area: 900 }
      },
      color: { value: ["#00ff88", "#00d2ff"] },
      shape: { type: "circle" },
      opacity: { value: 0.22, random: true },
      size: { value: 2.5, random: true },
      links: {
        enable: true,
        distance: 130,
        color: "#00ff88",
        opacity: 0.08,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    detectRetina: true,
    background: { color: "transparent" }
  });
}

// WhatsApp contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Replace this placeholder with your WhatsApp number.
  // Format: country code + number, without +, spaces or dashes.
  const phone = "918726772406";

  const name = document.getElementById("senderName").value.trim();
  const contact = document.getElementById("senderContact").value.trim();
  const message = document.getElementById("senderMsg").value.trim();

  if (!name || !contact || !message) {
    alert("कृपया सभी details भरें!");
    return;
  }

  const text =
`*New Portfolio Enquiry*

*नाम:* ${name}
*संपर्क:* ${contact}
*प्रोजेक्ट:* ${message}`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
