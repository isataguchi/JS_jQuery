$(document).ready(function () {
  $(".qtd-p21").on("input", function () {
    var quantity21 = $(this).val();
    $(".qtd-p21-display").text(quantity21);
    $(this).siblings(".qtd-p21-display").text(quantity21);
  });
});
$(document).ready(function () {
  $(".qtd-p22").on("input", function () {
    var quantity22 = $(this).val();
    $(".qtd-p22-display").text(quantity22);
    $(this).siblings(".qtd-p22-display").text(quantity22);
  });
});

$(document).ready(function () {
  $(".qtd-p23").on("input", function () {
    var quantity23 = $(this).val();
    $(".qtd-p23-display").text(quantity23);
    $(this).siblings(".qtd-p23-display").text(quantity23);
  });
});

$(document).ready(function () {
  $("#prc-p21, #qtd-p21").on("click", function () {
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    var price21 = parseFloat($(".prc-p21").text().trim());
    var quantity21 = parseInt($(".qtd-p21").val());

    // Check if the price and quantity are valid numbers
    if (!isNaN(price21) && !isNaN(quantity21)) {
      // Calculate the total price
      var subtotal21 = price * quantity21;
      var tax = subtotal21 * 0.1;
      var total21 = subtotal + tax;

      // Display the total price in the appropriate element
      $("#total-p21").text("$" + total21.toFixed(2));
    }
  }
});

$(document).ready(function () {
  $("#prc-p22, #qtd-p22").on("click", function () {
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    var price22 = parseFloat($(".prc-p22").text().trim());
    var quantity22 = parseInt($(".qtd-p22").val());

    // Check if the price and quantity are valid numbers
    if (!isNaN(price22) && !isNaN(quantity22)) {
      // Calculate the total price
      var subtotal22 = price22 * quantity22;
      var tax = subtotal22 * 0.1;
      var total22 = subtotal22 + tax;

      // Display the total price in the appropriate element
      $("#total-p22").text("$" + total22.toFixed(2));
    }
  }
});
$(document).ready(function () {
  $("#prc-p23, #qtd-p23").on("click", function () {
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    var price23 = parseFloat($(".prc-p23").text().trim());
    var quantity23 = parseInt($(".qtd-p23").val());

    // Check if the price and quantity are valid numbers
    if (!isNaN(price23) && !isNaN(quantity23)) {
      // Calculate the total price
      var subtotal23 = price23 * quantity23;
      var tax = subtotal23 * 0.1;
      var total23 = subtotal23 + tax;

      // Display the total price in the appropriate element
      $("#total-p23").text("$" + total23.toFixed(2));
    }
  }
});
$(document).ready(function () {
  $(".qtd-p21, .qtd-p22, .qtd-p23").on("input", function () {
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    var price21 = parseFloat($("#prc-p21").text().trim());
    var quantity21 = parseInt($(".qtd-p21").val()) || 0;
    var price22 = parseFloat($("#prc-p22").text().trim());
    var quantity22 = parseInt($(".qtd-p22").val()) || 0;
    var price23 = parseFloat($("#prc-p23").text().trim());
    var quantity23 = parseInt($(".qtd-p23").val()) || 0;

    var taxRate = 0.1; // 10% tax rate

    // Calculate the total prices for each product
    var total21 = price21 * quantity21 * (1 + taxRate);
    var total22 = price22 * quantity22 * (1 + taxRate);
    var total23 = price23 * quantity23 * (1 + taxRate);

    // Display the total prices in the appropriate elements
    $(".total-p21").text("$" + total21.toFixed(2));
    $(".total-p22").text("$" + total22.toFixed(2));
    $(".total-p23").text("$" + total23.toFixed(2));

    // Calculate the total quantity
    var totalQuantity = quantity21 + quantity22 + quantity23;
    $("#total-quantity-p20").text(totalQuantity);

    // Calculate the total price
    var totalPrice20 = total21 + total22 + total23;
    $("#total-price-p20").text("$" + totalPrice20.toFixed(2));
  }
});
