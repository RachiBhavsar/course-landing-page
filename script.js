document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Thank you, ${name}. Your message has been sent!`);
            contactForm.reset();
        });
    }

    // Handle Sign Up Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const signupName = document.getElementById('signupName').value;
            const signupEmail = document.getElementById('signupEmail').value;
            const signupPassword = document.getElementById('signupPassword').value;
            alert(`Welcome, ${signupName}! Your account has been created.`);
            signupForm.reset();
        });
    }
});
