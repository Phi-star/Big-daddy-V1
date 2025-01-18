<script>
  // Handle donation type selection (One-time, Monthly, Annually)
  document.querySelectorAll('.donation-type').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.donation-type').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Update donation link dynamically based on the selected amount
  function updateDonateNowLink(url) {
    window.location.href = url; // You can change this to redirect to the correct URL
  }

  // Initial animation effect for the amounts
  window.onload = function() {
    setTimeout(() => {
      document.getElementById('amount-35').style.opacity = 1;
      document.getElementById('amount-50').style.opacity = 1;
      document.getElementById('amount-100').style.opacity = 1;
      document.getElementById('amount-230').style.opacity = 1;
    }, 500);
  }
</script>
