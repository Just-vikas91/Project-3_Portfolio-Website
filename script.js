function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
// Contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // These IDs from the previous steps
  const serviceID = 'service_3a5zfbw';
  const templateID = 'template_0rn3mt9';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          alert('Message sent successfully!');
          document.getElementById('contactForm').reset();
      }, (err) => {
          alert(JSON.stringify(err));
      });
});
