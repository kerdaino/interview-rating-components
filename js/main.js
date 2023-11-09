// Execute the following code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to various elements
  const buttons = document.querySelectorAll('.text button'); // Get all buttons in the text section
  const submitButton = document.querySelector('button[type="submit"]'); // Get the submit button
  const ratingSection = document.querySelector('.rating'); // Get the rating section
  const thankSection = document.querySelector('.thank'); // Get the thank you section
  const selectedRatingElement = document.querySelector('.thank h4 span'); // Get the span element for selected rating

  let selectedRating = 0; // Initialize selectedRating to 0

  // Iterate through each button and add a click event listener
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          selectedRating = parseInt(this.innerText); // Update selectedRating when a button is clicked
      });
  });

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      if (selectedRating > 0) {
          // If a rating is selected (greater than 0)
          // Hide the rating section and show the thank you section
          ratingSection.classList.add('hide'); // Add 'hide' class to rating section
          thankSection.classList.remove('hide'); // Remove 'hide' class from thank you section

          // Update the selected rating text in the thank you section
          selectedRatingElement.innerText = selectedRating;
      }
  });
});
