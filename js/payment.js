function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const creditCardInput = document.getElementById('creditCardInput');
  
    creditCardInput.addEventListener('input', formatCreditCardNumber);
  
    function formatCreditCardNumber() {
      let inputValue = this.value;
  
      // Remove any non-numeric characters
      inputValue = inputValue.replace(/[^0-9]/g, '');
  
      // Limit to 16 characters
      inputValue = inputValue.slice(0, 16);
  
      // Group the digits into sets of four with a space
      inputValue = inputValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  
      // Update the input value
      this.value = inputValue;
    }
  
    creditCardInput.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        mfa(); // Enter key pressed, call next function (e.g., login)
        return false;
      } else {
        if (creditCardInput.value == null) {
          creditCardInput.type = 'text';
          // Input is empty, convert to 'text' to prevent password autofill
        } else {
          creditCardInput.type = 'password';
          // Input is not empty, convert to 'password' to hide text entry
        }
      }
    });
  });
  
  
  