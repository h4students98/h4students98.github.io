// FUNCTIONALITIES OF DROPDOWN MENU
function toggleDropdown(dropdownId, boxId) {
    const dropdown = document.getElementById(dropdownId);
    const box = document.getElementById(boxId);

    // Toggle the "show" class for the dropdown-content
    if (!dropdown.classList.contains("show")) {
      // Close any other open dropdowns
      const openDropdowns = document.querySelectorAll(".dropdown-content.show");
      openDropdowns.forEach(function(openDropdown) {
        openDropdown.classList.remove("show");
      });

      // Open the clicked dropdown
      dropdown.classList.add("show");
    } else {
      // Close the clicked dropdown
      dropdown.classList.remove("show");
    }

    // Toggle the "active" class for the box
    box.classList.toggle("active");
  }

  // Close the dropdowns if the user clicks outside of them
  window.onclick = function(e) {
    if (!e.target.matches('.dropboxMath')) {
      const dropdown = document.getElementById("mathDropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
      const box = document.getElementById("mathBox");
      box.classList.remove("active");
    } else if (!e.target.matches('.dropboxPhys')) {
      const dropdown = document.getElementById("physDropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
      const box = document.getElementById("physBox");
      box.classList.remove("active");
    }
  }