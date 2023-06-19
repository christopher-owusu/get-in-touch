document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation (you can add more validation logic as needed)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulate form submission (replace this with your actual form submission logic)
    setTimeout(function() {
      document.getElementById("success-message").style.display = "block";
    }, 1000);
  
    // Reset the form
    document.getElementById("contact-form").reset();
  });
  

  function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var subject = "New message from " + name;
    var mailtoLink = "mailto:owusuahenkorahchristopher@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent("Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message);
    
    window.location.href = mailtoLink;
  }
  