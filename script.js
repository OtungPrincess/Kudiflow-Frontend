//eye-icon script
    const passwordField = document.getElementById("password");
    const passwordIcon = document.getElementById("password-icon");

    passwordIcon.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            passwordIcon.src = "assets/images/eye-open.svg";
        } else {
            passwordField.type = "password";
            passwordIcon.src = "assets/images/eye-off.svg";
        }
    });
// return button script
    const backButton = document.querySelector('.return-button');

    backButton.addEventListener('click', () => {
        window.history.back();
    });
