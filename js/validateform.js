function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validateForm() {
  var requiredFields = document.querySelectorAll("input[required]");

  var hasEmptyFields = false; // Flag to track if there are empty required fields

  requiredFields.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
      hasEmptyFields = true;
    } else {
      input.classList.remove("error");
    }
  });
  if (hasEmptyFields) {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // Ask for confirmation before submitting the form
  var confirmation = confirm("Are you sure you want to submit the form?");
  if (!confirmation) {
    return false; // Prevent form submission
  }

  // Payment completion handling
  console.log("Payment completed. Redirecting to thank you page...");

  // Redirect to the thank you page
  window.location.href = "./thankyou.html";

  return true; // Allow form submission
}

document.addEventListener("DOMContentLoaded", function () {
  const creditCardInput = document.getElementById("creditCardInput");

  creditCardInput.addEventListener("input", formatCreditCardNumber);

  function formatCreditCardNumber() {
    let inputValue = this.value;

    // Remove any non-numeric characters
    inputValue = inputValue.replace(/[^0-9]/g, "");

    // Limit to 16 characters
    inputValue = inputValue.slice(0, 16);

    // Group the digits into sets of four with a space
    inputValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Update the input value
    this.value = inputValue;
  }

  creditCardInput.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      validateForm(); // Enter key pressed, call the validateForm function
      return false;
    } else {
      if (creditCardInput.value == null) {
        creditCardInput.type = "text";
        // Input is empty, convert to 'text' to prevent password autofill
      } else {
        creditCardInput.type = "password";
        // Input is not empty, convert to 'password' to hide text entry
      }
    }
  });
});
