$(document).ready(function() {
    // Get user details from local storage
    var userDetails = JSON.parse(localStorage.getItem('userDetails'));
  
    if (userDetails) {
      // Display the user's name
      $('#userName').text(userDetails.fullName);
    }
  
    // Logout Button Click Handler
    $('#logoutButton').click(function() {
      // Clear user details from local storage
    //   localStorage.removeItem('userDetails');
  
      // Redirect to Index page
      window.location.href = 'index.html';
    });
  });
  