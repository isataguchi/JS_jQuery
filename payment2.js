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
    const showNumberCheckbox = document.getElementById('showNumberCheckbox');
  
    creditCardInput.addEventListener('input', maskAndLimitCreditCardNumber);
    showNumberCheckbox.addEventListener('change', toggleCreditCardNumberVisibility);
  
    function maskAndLimitCreditCardNumber() {
      const inputValue = this.value;
      const sanitizedValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      const limitedValue = sanitizedValue.slice(0, 16); // Limit to 16 characters
      const maskedValue = limitedValue.replace(/\d/g, '•'); // Mask all digits
      this.value = maskedValue;
    }
  
    function toggleCreditCardNumberVisibility() {
      const isChecked = this.checked;
      if (isChecked) {
        creditCardInput.type = 'text';
        creditCardInput.value = creditCardInput.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      } else {
        creditCardInput.type = 'password';
        maskAndLimitCreditCardNumber.call(creditCardInput);
      }
    }
  });
  
  