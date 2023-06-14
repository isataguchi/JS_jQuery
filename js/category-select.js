$(document).ready(function() {
    // Get the navigation links
    const navLinks = $('.nav-link');
  
    // Add click event listener to each navigation link
    navLinks.on('click', function(event) {
      event.preventDefault(); // Prevent the link from refreshing the page
  
      // Remove 'active' class from all navigation links
      navLinks.removeClass('active');
  
      // Add 'active' class to the clicked navigation link
      $(this).addClass('active');
  
      // Get the selected category
      const selectedCategory = $(this).data('category');
  
      // Show or hide content based on the selected category
      $('#content > div').hide();
      $(`#${selectedCategory}-content`).show();
    });
  });