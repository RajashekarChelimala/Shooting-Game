$(document).ready(function() {
    // Signup Form Submit Handler
    $('#signupForm').submit(function(event) {
      event.preventDefault();
  
      // Get form values
      var fullName = $('#fullName').val();
      var username = $('#username').val();
      var phoneNumber = $('#phoneNumber').val();
      var age = $('#age').val();
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Retrieve existing user details from local storage
      var existingUsers = localStorage.getItem('userDetails');
      var userDetails = [];
  
      // If there are existing user details, parse them from JSON
      if (existingUsers) {
        userDetails = JSON.parse(existingUsers);
      }
  
      // Create a new user object
      var newUser = {
        fullName: fullName,
        username: username,
        phoneNumber: phoneNumber,
        age: age,
        email: email,
        password: password
      };
  
      // Add the new user to the array of user details
      userDetails.push(newUser);
  
      // Store updated user details in local storage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
      // Redirect to Main page
      window.location.href = 'main.html';
    });
  });
  