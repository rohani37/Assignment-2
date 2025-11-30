// -----------------------------
// 100SMILES Dental Clinic JS
// Simple student-made script
// -----------------------------

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const mainNav = document.querySelector(".main-nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    // toggle small-screen menu
    mainNav.classList.toggle("open");
  });
}

// Booking form validation
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop the form from submitting

    // Get form values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const consent = document.getElementById("consent").checked;

    // Check full name
    if (fullname.length < 2) {
      showError("Please enter your full name.");
      return;
    }

    // Email validation (simple pattern)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // Phone validation – must be 10 digits
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      showError("Please enter a 10-digit phone number (numbers only).");
      return;
    }

    // Service selection
    if (service === "") {
      showError("Please select a service.");
      return;
    }

    // Time preference radio buttons
    const timeChosen = document.querySelector("input[name='time']:checked");
    if (!timeChosen) {
      showError("Please select a preferred time.");
      return;
    }

    // Consent
    if (!consent) {
      showError("You must agree to be contacted about your booking.");
      return;
    }

    // If all good → success message
    showSuccess("Your booking has been submitted successfully! We will contact you soon.");

    // Reset form
    bookingForm.reset();
  });
}

// Helper functions for form messages
function showError(msg) {
  formMessage.textContent = msg;
  formMessage.style.color = "#b22222"; // red
}

function showSuccess(msg) {
  formMessage.textContent = msg;
  formMessage.style.color = "#0b7a4a"; // green
}
