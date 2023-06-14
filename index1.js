$(document).ready(function() {
    $('#prc-p1, #qtd-p1').on('click', function() {
        calculateTotalPrice();
    });

      function calculateTotalPrice() {
       
        var price = parseFloat($('.prc-p1').text().trim());
        var quantity = parseInt($('.qtd-p1').val());
    
        // Check if the price and quantity are valid numbers
        if (!isNaN(price) && !isNaN(quantity)) {
          // Calculate the total price
          var subtotal = price * quantity;
        var tax = subtotal * 0.1;
          var total = subtotal + tax;
    
          // Display the total price in the appropriate element
          $('#total-p1').text('$' + total.toFixed(2));
        }
      }
    });