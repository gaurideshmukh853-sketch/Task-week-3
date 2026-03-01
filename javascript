console.log("JavaScript Connected");

// Show / Hide Content
function toggleContent() {
    const about = document.getElementById("about");
    about.style.display = about.style.display === "none" ? "block" : "none";
}

// Image Slider
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider").src = images[index];
}

// To-Do List
function addTask() {
    const input = document.getElementById("taskInput");
    const li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = () => li.remove();
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "All fields are required!";
        error.style.color = "red";
    } else {
        error.textContent = "Form submitted successfully!";
        error.style.color = "green";
    }
});

// Dark Mode + Local Storage
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}