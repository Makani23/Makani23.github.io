// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

// Display dynamic greeting
document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const greeting = now.getHours() < 12 ? "Good Morning!" : "Welcome!";
    alert(greeting);
});
