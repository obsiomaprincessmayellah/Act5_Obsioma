document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(this);

  // Simulate form submission (replace with actual form submission logic)
  // For demonstration purposes, we're just logging the form data
  console.log("Submitted Form Data:");
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }

  // Display success message
  document.getElementById('message').textContent = "Application submitted successfully!";
});
