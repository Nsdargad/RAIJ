function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("open");
  });
});

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(function (element) {
  observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
