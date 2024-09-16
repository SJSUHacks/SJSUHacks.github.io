
function displayContent() {
    console.log("Started bro!!")
    const content = document.getElementById("contents")
    if (content.classList.contains("move-anime")) {
        content.classList.remove("move-anime");
        console.log("Here you go brooooo")
    }
    else {
        content.classList.add("move-anime");
        console.log("Nahh, times up!!")
    }
}

function validateEmail() {

    let emailInput = document.getElementById("emailInput");

    let submitButton = document.getElementById("submitBtn");



    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput.value)) {

        submitButton.disabled = false; // Enable button if email is valid

    } else {

        submitButton.disabled = true; // Keep button disabled if email is invalid

    }

}
