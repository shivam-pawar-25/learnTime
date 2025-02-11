document.addEventListener('DOMContentLoaded', () => {
    const contactFormCard = document.querySelector('.contact-form-card');
    setTimeout(() => {
        contactFormCard.classList.add('show');
    }, 65); 
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutBoxes = document.querySelectorAll(".about-box");

    aboutBoxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#2575fc"; 
            this.style.color = "white"; 
            this.style.transition = "background-color 0.3s ease, color 0.3s ease";
        });

        box.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "white"; 
            this.style.color = "black"; 
        });
    });
});
