// Select theme button
const themeToggle = document.getElementById("themeToggle");

// Check saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-theme");

  // Save theme preference
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

});
