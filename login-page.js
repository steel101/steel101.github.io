const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Bad" && password === "Note" || username === "bad" && password === "note" || username === "Bad" && password === "note" || username === "bad" && password === "Note" ) {
        // If the credentials are valid, show an alert box and reload the page
        window.location.href = "https://steel101.github.io/Badday.txt";
    }
    else if (username === "svoc" && password === "123" || username === "Svoc" && password === "123") {
        // If the credentials are valid, show an alert box and reload the page
        window.location.href = "https://google.com";
    }
    else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})
