
// Hamburger menu script for navigation
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('header');

    navToggle.addEventListener('click', () => {
        header.classList.toggle('nav-open');
    });

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            header.classList.remove('nav-open');
        }
    });
});

// Send email script for contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent reload

    const serviceID = 'service_vaj153g';
    const templateID = 'template_ra7qydm';
    const publicKey = '8TX5EYp2A_heeHYUy';

    emailjs.init(publicKey);

    const templateParams = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    console.log("templateParams", templateParams);


    emailjs.send(serviceID, templateID, templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});


