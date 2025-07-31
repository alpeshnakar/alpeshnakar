// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize the AOS (Animate on Scroll) library
  // This adds animations to elements as they appear in the viewport.
  AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 100, // Offset (in px) from the original trigger point
  });

});
