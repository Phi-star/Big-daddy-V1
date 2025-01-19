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
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value;

    // Check if required fields are filled
    if (!firstName || !lastName || !email || !phone || !country) {
      // Highlight missing fields and display an error message
      if (!firstName) document.getElementById('first-name').style.border = '2px solid red';
      if (!lastName) document.getElementById('last-name').style.border = '2px solid red';
      if (!email) document.getElementById('email').style.border = '2px solid red';
      if (!phone) document.getElementById('phone').style.border = '2px solid red';
      if (!country) document.getElementById('country').style.border = '2px solid red';

      // Display error message
      alert('Please fill in the required details.');
      return false; // Stop further execution
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
      // Log errors silently
      console.error('Error with the request:', error);
    });
  }

  // Add event listener to the Donate Now button
  document.getElementById('donate-now-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default button action
    if (validateFormAndSend()) {
      // Redirect to thank-you page if validation passes
      window.location.href = 'thank-you-page-url';
    }
  });
