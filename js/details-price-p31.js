$(document).ready(function() {
    $('.qtd-p31').on('input', function() {
      var quantity31 = $(this).val();
      $('.qtd-p31-display').text(quantity31);
      $(this).siblings('.qtd-p31-display').text(quantity31);
    });
  });
  $(document).ready(function() {
    $('.qtd-p32').on('input', function() {
      var quantity32 = $(this).val();
      $('.qtd-p32-display').text(quantity32);
      $(this).siblings('.qtd-p32-display').text(quantity32);
    });
  });
  
  $(document).ready(function() {
    $('.qtd-p33').on('input', function() {
      var quantity33 = $(this).val();
      $('.qtd-p33-display').text(quantity33);
      $(this).siblings('.qtd-p33-display').text(quantity33);
    });
  });
  
$(document).ready(function() {
    $('#prc-p31, #qtd-p31').on('click', function() {
        calculateTotalPrice();
    });

      function calculateTotalPrice() {
       
        var price31 = parseFloat($('.prc-p31').text().trim());
        var quantity31 = parseInt($('.qtd-p31').val());
    
        // Check if the price and quantity are valid numbers
        if (!isNaN(price31) && !isNaN(quantity31)) {
          // Calculate the total price
          var subtotal31 = price * quantity31;
        var tax = subtotal31 * 0.1;
          var total31 = subtotal + tax;
    
          // Display the total price in the appropriate element
          $('#total-p31').text('$' + total31.toFixed(2));
        }
      }
    });

    $(document).ready(function() {
        $('#prc-p32, #qtd-p32').on('click', function() {
            calculateTotalPrice();
        });
    
          function calculateTotalPrice() {
           
            var price32 = parseFloat($('.prc-p32').text().trim());
            var quantity32 = parseInt($('.qtd-p32').val());
        
            // Check if the price and quantity are valid numbers
            if (!isNaN(price32) && !isNaN(quantity32)) {
              // Calculate the total price
              var subtotal32 = price32 * quantity32;
            var tax = subtotal32 * 0.1;
              var total32 = subtotal32 + tax;
        
              // Display the total price in the appropriate element
              $('#total-p32').text('$' + total32.toFixed(2));
            }
          }
        });
        $(document).ready(function() {
            $('#prc-p33, #qtd-p33').on('click', function() {
                calculateTotalPrice();
            });
        
              function calculateTotalPrice() {
               
                var price33 = parseFloat($('.prc-p33').text().trim());
                var quantity33 = parseInt($('.qtd-p33').val());
            
                // Check if the price and quantity are valid numbers
                if (!isNaN(price33) && !isNaN(quantity33)) {
                  // Calculate the total price
                  var subtotal33 = price33 * quantity33;
                var tax = subtotal33 * 0.1;
                  var total33 = subtotal33 + tax;
            
                  // Display the total price in the appropriate element
                  $('#total-p33').text('$' + total33.toFixed(2));
                }
              }
            });
            $(document).ready(function() {
                $('.qtd-p31, .qtd-p32, .qtd-p33').on('input', function() {
                  calculateTotalPrice();
                });
              
                function calculateTotalPrice() {
                  var price31 = parseFloat($('#prc-p31').text().trim());
                  var quantity31 = parseInt($('.qtd-p31').val()) || 0;
                  var price32 = parseFloat($('#prc-p32').text().trim());
                  var quantity32 = parseInt($('.qtd-p32').val()) || 0;
                  var price33 = parseFloat($('#prc-p33').text().trim());
                  var quantity33 = parseInt($('.qtd-p33').val()) || 0;
              
                  var taxRate = 0.1; // 10% tax rate

                  // Calculate the total prices for each product
                  var total31 = price31 * quantity31 * (1 + taxRate);
                  var total32 = price32 * quantity32 * (1 + taxRate);
                  var total33 = price33 * quantity33 * (1 + taxRate);
              
                  // Display the total prices in the appropriate elements
                  $('.total-p31').text('$' + total31.toFixed(2));
                  $('.total-p32').text('$' + total32.toFixed(2));
                  $('.total-p33').text('$' + total33.toFixed(2));
              
                  // Calculate the total quantity
                  var totalQuantity = quantity31 + quantity32 + quantity33;
                  $('#total-quantity-p20').text(totalQuantity);
              
                  // Calculate the total price
                  var totalPrice = total31 + total32 + total33;
                  $('#total-price-p20').text('$' + totalPrice.toFixed(2));
                }
              });