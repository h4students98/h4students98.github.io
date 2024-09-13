// Ensure the dark theme is applied by default on page load
      document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('dark-theme');
        // Update the icon to reflect the current theme
        darkthemeIconDesktop.src = "../assets/sun-icon.svg";
        darkthemeIconHamburger.src = "../assets/sun-icon.svg";
      });

  // Function to toggle theme and icon
  function toggleTheme(icon) {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "../assets/sun-icon.svg";
    } else {
      icon.src = "../assets/moon-icon.svg";
    }
  }

  // Add event listeners for both icons
  const darkthemeIconDesktop = document.getElementById("darktheme-icon");
  const darkthemeIconHamburger = document.getElementById("darktheme2-icon");

  darkthemeIconDesktop.addEventListener('click', () => toggleTheme(darkthemeIconDesktop));
  darkthemeIconHamburger.addEventListener('click', () => toggleTheme(darkthemeIconHamburger));