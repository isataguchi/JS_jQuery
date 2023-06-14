$(document).ready(function() {
    $('.qtd-p1').on('input', function() {
      var quantity = $(this).val();
      $('.qtd-p1-display').text(quantity);
      $(this).siblings('.qtd-p1-display').text(quantity);
    });
  });
  $(document).ready(function() {
    $('.qtd-p2').on('input', function() {
      var quantity = $(this).val();
      $('.qtd-p2-display').text(quantity);
      $(this).siblings('.qtd-p2-display').text(quantity);
    });
  });
  
  $(document).ready(function() {
    $('.qtd-p3').on('input', function() {
      var quantity = $(this).val();
      $('.qtd-p3-display').text(quantity);
      $(this).siblings('.qtd-p3-display').text(quantity);
    });
  });
  
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

    $(document).ready(function() {
        $('#prc-p2, #qtd-p2').on('click', function() {
            calculateTotalPrice();
        });
    
          function calculateTotalPrice() {
           
            var price = parseFloat($('.prc-p2').text().trim());
            var quantity = parseInt($('.qtd-p2').val());
        
            // Check if the price and quantity are valid numbers
            if (!isNaN(price) && !isNaN(quantity)) {
              // Calculate the total price
              var subtotal = price * quantity;
            var tax = subtotal * 0.1;
              var total = subtotal + tax;
        
              // Display the total price in the appropriate element
              $('#total-p2').text('$' + total.toFixed(2));
            }
          }
        });
        $(document).ready(function() {
            $('#prc-p3, #qtd-p3').on('click', function() {
                calculateTotalPrice();
            });
        
              function calculateTotalPrice() {
               
                var price = parseFloat($('.prc-p3').text().trim());
                var quantity = parseInt($('.qtd-p3').val());
            
                // Check if the price and quantity are valid numbers
                if (!isNaN(price) && !isNaN(quantity)) {
                  // Calculate the total price
                  var subtotal = price * quantity;
                var tax = subtotal * 0.1;
                  var total = subtotal + tax;
            
                  // Display the total price in the appropriate element
                  $('#total-p3').text('$' + total.toFixed(2));
                }
              }
            });
            $(document).ready(function() {
                $('.qtd-p1, .qtd-p2, .qtd-p3').on('input', function() {
                  calculateTotalPrice();
                });
              
                function calculateTotalPrice() {
                  var price1 = parseFloat($('#prc-p1').text().trim());
                  var quantity1 = parseInt($('.qtd-p1').val()) || 0;
                  var price2 = parseFloat($('#prc-p2').text().trim());
                  var quantity2 = parseInt($('.qtd-p2').val()) || 0;
                  var price3 = parseFloat($('#prc-p3').text().trim());
                  var quantity3 = parseInt($('.qtd-p3').val()) || 0;
              
                  var taxRate = 0.1; // 10% tax rate

                  // Calculate the total prices for each product
                  var total1 = price1 * quantity1 * (1 + taxRate);
                  var total2 = price2 * quantity2 * (1 + taxRate);
                  var total3 = price3 * quantity3 * (1 + taxRate);
              
                  // Display the total prices in the appropriate elements
                  $('.total-p1').text('$' + total1.toFixed(2));
                  $('.total-p2').text('$' + total2.toFixed(2));
                  $('.total-p3').text('$' + total3.toFixed(2));
              
                  // Calculate the total quantity
                  var totalQuantity = quantity1 + quantity2 + quantity3;
                  $('#total-quantity').text(totalQuantity);
              
                  // Calculate the total price
                  var totalPrice = total1 + total2 + total3;
                  $('#total-price').text('$' + totalPrice.toFixed(2));
                }
              });