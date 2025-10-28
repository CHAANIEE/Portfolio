const buttons = document.querySelectorAll(".nav-btn, .about-btn");
const sections = document.querySelectorAll(".content-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-section");

    // Remove active state from all buttons
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    if (btn.classList.contains("nav-btn")) btn.classList.add("active");

    // Hide all sections
    sections.forEach(sec => sec.classList.remove("active"));

    // Show target section
    const showSection = document.getElementById(target);
    if (showSection) showSection.classList.add("active");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
