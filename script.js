
document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation menu
  const menuButton = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-links");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      const isOpen = navMenu.classList.contains("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scrolling for internal navigation links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});

// Copy email address
function copyEmail() {
  const email = "akhilagutthi@gmail.com";
  const message = document.getElementById("copyMessage");

  if (!message) {
    alert("Email: " + email);
    return;
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email)
      .then(function () {
        message.textContent = "Email address copied successfully!";
      })
      .catch(function () {
        message.textContent = "Please copy this email: " + email;
      });
  } else {
    message.textContent = "Please copy this email: " + email;
  }
}
