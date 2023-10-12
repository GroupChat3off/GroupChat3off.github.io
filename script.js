function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessageElement = document.getElementById("error-message");
    var loginButton = document.querySelector("button");

    if (username === "admin" && password === "admin") {
        errorMessageElement.classList.add("hidden"); // Hide the error message box if login is successful
        loginButton.classList.remove("slide-out"); // Slide the button back into place
    } else {
        errorMessageElement.textContent = "Incorrect Password. Please try again.";
        errorMessageElement.classList.remove("hidden"); // Make the error message box visible
        loginButton.classList.add("slide-out"); // Slide the button out of the way
        setTimeout(function() {
            errorMessageElement.classList.add("hidden"); // Hide the error message box after 2 seconds
            loginButton.classList.remove("slide-out"); // Slide the button back into place
        }, 2000); // 2000 milliseconds = 2 seconds
    }
}