document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        // Remove 'active' class from all tabs
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
  
        // Hide all tab contents
        tabContents.forEach(function(content) {
          content.style.display = 'none';
        });
  
        // Add 'active' class to the clicked tab
        this.classList.add('active');
  
        // Show the corresponding tab content
        const category = this.getAttribute('data-category');
        const tabContent = document.getElementById(category);
        tabContent.style.display = 'block';
      });
    });
  });