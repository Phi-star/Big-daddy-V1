let donationAmount = null;

    // Handle donation type selection (One-time, Monthly, Annually)
    document.querySelectorAll('.donation-type').forEach(button => {
      button.addEventListener('click', function() {
        // Reset all button styles
        document.querySelectorAll('.donation-type').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the selected donation type button
        this.classList.add('active');
        
        // Show donation amount options after a selection
        document.getElementById('amount-buttons').style.display = 'block';
      });
    });

    // Set donation amount when a user selects an amount button
    function setDonationAmount(amount) {
      donationAmount = amount;
      document.getElementById('donate-now-btn').setAttribute('href', `https://example.com/${amount}`);
    }

    // Show the selected amount in the donate now button
    document.getElementById('donate-now-btn').addEventListener('click', function(e) {
      if (!donationAmount) {
        e.preventDefault(); // Prevent default action if no amount is selected
        alert('Please select a donation amount first!');
      }
    });
            
