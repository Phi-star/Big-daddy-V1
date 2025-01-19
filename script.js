let donationAmount = null;

    // Handle donation type selection (One-time, Monthly, Annually)
    document.querySelectorAll('.donation-type').forEach(button => {
      button.addEventListener('click', function() {
        // Reset all button styles
        document.querySelectorAll('.donation-type').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the selected donation type button
        this.classList.add('active');
        
        // Show donation amount options after a selection
        document.getElementById('amount-buttons').style.opacity = 1; // Show with animation
      });
    });

    // Set donation amount when a user selects an amount button
    function setDonationAmount(amount) {
      donationAmount = amount;

      // Highlight the selected button
      document.querySelectorAll('.donation-amount').forEach(btn => {
        btn.classList.remove('selected');
      });
      document.querySelector(`#amount-${amount}`).classList.add('selected');

      // Update the Donate Now button's link with the selected amount
      document.getElementById('donate-now-btn').setAttribute('href', `https://example.com/${amount}`);
    }

    // Initial animation effect for the amounts
    window.onload = function() {
      setTimeout(() => {
        document.querySelectorAll('.donation-amount').forEach(btn => {
          btn.style.transition = 'opacity 1s ease-in-out';
          btn.style.opacity = 1; // Make them fade in after page load
        });
      }, 500);
          }
