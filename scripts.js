// Simple form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    alert('Your message has been sent!');
    // You can add further logic here to send the form data to a server
  });
  