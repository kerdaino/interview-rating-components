document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.text button');
    const submitButton = document.querySelector('button[type="submit"]');
    const ratingSection = document.querySelector('.rating');
    const thankSection = document.querySelector('.thank');
    const selectedRatingElement = document.querySelector('.thank h4 span');
  
    let selectedRating = 0;
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        selectedRating = parseInt(this.innerText);
      });
    });
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      if (selectedRating > 0) {
        // Hide the rating section and show the thank you section
        ratingSection.classList.add('hide');
        thankSection.classList.remove('hide');

  
        // Update the selected rating text
        selectedRatingElement.innerText = selectedRating;
      }
    });
  });
  