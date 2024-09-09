function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Ensure clicking a link closes the menu in the hamburger view
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  });
});
