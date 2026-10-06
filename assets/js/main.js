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

const whatsappEnquiryForm = document.getElementById("whatsappEnquiryForm");

whatsappEnquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(whatsappEnquiryForm);
  const message = [
    "Hello Raman Agro Industries,",
    "",
    "I would like to make an enquiry.",
    `Name: ${formData.get("name").trim()}`,
    `Phone: ${formData.get("phone").trim()}`,
    `Enquiry about: ${formData.get("subject")}`,
    `Message: ${formData.get("message").trim()}`
  ].join("\n");
  const whatsappUrl = `https://wa.me/919922175195?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
