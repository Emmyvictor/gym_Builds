// NAV SCROLL
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// HERO BG ZOOM IN
window.addEventListener("load", () => {
  document.getElementById("heroBg").classList.add("loaded");
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
reveals.forEach((el) => observer.observe(el));

// PLAN BTN FEEDBACK
document.querySelectorAll(".plan-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const orig = btn.textContent;
    btn.textContent = "✓ Added!";
    setTimeout(() => {
      btn.textContent = orig;
    }, 2000);
  });
});

// SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
