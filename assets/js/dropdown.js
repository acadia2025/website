// Dropdown menu functionality
// Opens dropdown only on click, closes other open dropdowns

document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (!toggle || !menu) return;
    
    // Toggle dropdown on click
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Close all other dropdowns first
      dropdowns.forEach(function(otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });
    
    // Keep dropdown open when clicking inside it
    menu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('active');
      });
    }
  });
});

