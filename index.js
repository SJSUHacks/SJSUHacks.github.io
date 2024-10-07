// Import Firestore components from firebase.js
import { db, addDoc, collection } from "./firebase.js";

// DOM Elements
const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const customAlert = document.getElementById("customAlert");
const closeAlertBtn = document.getElementById("closeAlertBtn");
const alertMessage = document.getElementById("alertMessage");
const sponsorBtn = document.getElementById('sponsor');

const emailId = "organizer@siliconxhacks.com";

function goToEmail() {
    window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${emailId}&tf=cm`, "_blank");
}

// Email validation function
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {
        submitBtn.disabled = false; // Enable button if email is valid
    } else {
        submitBtn.disabled = true; // Keep button disabled if email is invalid
    }
}

// Function to add email to Firestore collection
function addEmail() {
    addDoc(collection(db, "emailsForNewsLetter"), {
        email: emailInput.value,
        timestamp: new Date(),
        active: true
    })
        .then(() => {
            showCustomAlert("Thanks for Subscribing to SiliconXHacks Newsletter");
            emailInput.value = ''; // Clear the input field
        })
        .catch((error) => {
            showCustomAlert(`Error adding email: ${error.message}`);
        });
}

// Function to show custom alert
function showCustomAlert(message) {
    alertMessage.textContent = message;
    customAlert.classList.remove("hidden"); // Show the custom alert
}

// Function to hide custom alert
closeAlertBtn.addEventListener("click", () => {
    customAlert.classList.add("hidden"); // Hide custom alert
});

// Attach event listener to email input for validation
emailInput.addEventListener("input", validateEmail);

// Event listener for email input on 'Enter' key press
emailInput.addEventListener('keypress', function (event) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (event.key === "Enter" && emailRegex.test(emailInput.value)) {
        addEmail(); // Add email when Enter is pressed and the email is valid
    }
});

// Event listener for button click to add email
submitBtn.addEventListener('click', addEmail);

sponsorBtn.addEventListener('click', goToEmail);
