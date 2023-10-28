$(document).ready(function() {
    // Login Form Submit Handler
    $('#loginForm').submit(function(event) {
      event.preventDefault();
  
      // Get form values
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Retrieve stored user details from local storage
      var userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
      // Check if user details exist in local storage
      if (userDetails) {
        // Iterate through stored user details
        for (var i = 0; i < userDetails.length; i++) {
          var storedUsername = userDetails[i].username;
          var storedPassword = userDetails[i].password;
  
          // Check if entered username and password match stored user details
          if (username === storedUsername && password === storedPassword) {
            // Redirect to Main page or display a welcome message
            window.location.href = 'main.html';
            return;
          }
        }
      }
  
      // Display error message if login fails
      alert('Invalid username or password. Please try again.');
    });
  });
  