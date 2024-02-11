let darkMode = localStorage.getItem("darkMode");
const toggleDarkMode = document.getElementById("toggle-darkmode");

const enableDarkMode = () => {
    toggleDarkMode.classList.add("active");
    document.body.classList.add("darkmode");
    darkMode = localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    toggleDarkMode.classList.remove("active");
    document.body.classList.remove("darkmode");
    darkMode = localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
