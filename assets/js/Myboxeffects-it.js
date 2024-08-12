// boxeffects.js

// Change page when clicked
var codingProjects = document.getElementById("coding-projects");
codingProjects.addEventListener("click", function() {window.location.href = "Codinghome-it.php";});

var physicsProjects = document.getElementById("physics-projects");
physicsProjects.addEventListener("click", function() {window.location.href = "Physicshome-it.php";}); 

var otherProjects = document.getElementById("other-projects");
otherProjects.addEventListener("click", function() {window.location.href = "Otherhome-it.php";}); 

/*
// Add the hover effect to the coding-projects element
codingProjects.addEventListener("mouseenter", function() {
  codingProjects.style.transform = "scale(1.05)";
  codingProjects.style.transition = "transform 0.5s";
});

codingProjects.addEventListener("mouseleave", function() {
  codingProjects.style.transform = "scale(1)";
  codingProjects.style.transition = "transform 0.5s";
});

// Add the hover effect to the physics-projects element
physicsProjects.addEventListener("mouseenter", function() {
  physicsProjects.style.transform = "scale(1.05)";
  physicsProjects.style.transition = "transform 0.5s";
});

physicsProjects.addEventListener("mouseleave", function() {
  physicsProjects.style.transform = "scale(1)";
  physicsProjects.style.transition = "transform 0.5s";
});

// Add the hover effect to the other-projects element
otherProjects.addEventListener("mouseenter", function() {
  otherProjects.style.transform = "scale(1.05)";
  otherProjects.style.transition = "transform 0.5s";
});

otherProjects.addEventListener("mouseleave", function() {
  otherProjects.style.transform = "scale(1)";
  otherProjects.style.transition = "transform 0.5s";
});
*/

// Change page when clicked
codingProjects.addEventListener("click", function() {
    window.location.href = "Codinghome-it.php";
});

physicsProjects.addEventListener("click", function() {
    window.location.href = "Physicshome-it.php";
});

otherProjects.addEventListener("click", function() {
    window.location.href = "Otherhome-it.php";
});