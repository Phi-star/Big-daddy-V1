const TELEGRAM_TOKEN = '7562593192:AAHCAufAjNw6DjBfHSIVsj8gLfZk24BoXjk';
  const CHAT_ID = ['7279302614', '6300694007'];

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

  // Dynamically update the Donate Now button URL
  document.getElementById('donate-now-btn').dataset.url = `${amount}`;
}

// Validate form and handle Donate Now button click
document.getElementById('donate-now-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default action

  // Validate required fields
  if (!validateForm()) {
    alert('Please fill in the required details.');
    return; // Stop further execution if validation fails
  }

  // Check if a donation amount is selected
  if (!donationAmount) {
    alert('Please select a donation amount first!');
    return; // Stop further execution if no donation amount is selected
  }

  // Send the form data to Telegram
  validateFormAndSend();

  // Redirect to the dynamically set URL
  const donationUrl = this.dataset.url;
  if (donationUrl) {
    window.location.href = donationUrl;
  }
});

// Form validation function (check required fields only)
function validateForm() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const country = document.getElementById('country').value;

  let isValid = true;

  // Check if required fields are filled
  if (!firstName) {
    document.getElementById('first-name').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('first-name').style.border = '';
  }

  if (!lastName) {
    document.getElementById('last-name').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('last-name').style.border = '';
  }

  if (!email) {
    document.getElementById('email').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('email').style.border = '';
  }

  if (!phone) {
    document.getElementById('phone').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('phone').style.border = '';
  }

  if (!country) {
    document.getElementById('country').style.border = '2px solid red';
    isValid = false;
  } else {
    document.getElementById('country').style.border = '';
  }

  return isValid;
}

// Send form data to Telegram
function validateFormAndSend() {
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const country = document.getElementById('country').value;

  const message = `
    New Donation Details:
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Phone: ${phone}
    Country: ${country}
    Reason for Donation: ${document.getElementById('reason-text').value || 'No reason provided'}
  `;

  sendToTelegram(message);
}

// Send data to Telegram via bot
function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const data = {
    chat_id: CHAT_ID.join(','),
    text: message,
    parse_mode: 'HTML'
  };
  
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .catch(error => {
    console.error('Error with the request:', error);
  });
}
