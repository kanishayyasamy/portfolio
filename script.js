// Mobile navigation menu
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
if (menu && nav) {
  menu.addEventListener("click", () => { nav.classList.toggle("open"); menu.setAttribute("aria-expanded", nav.classList.contains("open")); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }));
}
// Highlight current page
const page = location.pathname.split("/").pop() || "index.html";
const pageMap = {"index.html":"home", "about.html":"about", "skills.html":"skills", "projects.html":"projects", "contact.html":"contact"};
nav?.querySelectorAll("a[data-page]").forEach(link => { if (link.dataset.page === pageMap[page]) link.classList.add("current"); });
// Theme toggle
document.getElementById("theme")?.addEventListener("click", () => document.body.classList.toggle("dark"));
// Project filters (only present on projects.html)
const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");
filterButtons.forEach(button => button.addEventListener("click", () => {
  filterButtons.forEach(b => b.classList.remove("active")); button.classList.add("active");
  projects.forEach(project => { project.hidden = button.dataset.filter !== "all" && project.dataset.category !== button.dataset.filter; });
}));
// Contact form demo (only present on contact.html)
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  document.getElementById("status").textContent = "Thank you, " + document.getElementById("name").value + "! Your form is valid. This demo does not send messages.";
  event.target.reset();
});
document.getElementById("year").textContent = new Date().getFullYear();
