function validateForm() {
    var requiredFields = document.querySelectorAll('input[required]');
  
    for (var i = 0; i < requiredFields.length; i++) {
      if (requiredFields[i].value === '') {
        alert('Please fill in all required fields.');
        return false; // Prevent form submission
      }
    }
  
    // Ask for confirmation before submitting the form
    var confirmation = confirm('Are you sure you want to submit the form?');
    if (!confirmation) {
      return false; // Prevent form submission
    }
  
    return true; // Allow form submission
  }