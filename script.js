const password = document.getElementById("password")
const password_confirm = document.getElementById("password_confirm")

function validatePassword() {
    if (password.value != password_confirm.value) {
        password_confirm.setCustomValidity("Passwords must match")
    } else {
        // Must return empty string if there is no error
        password_confirm.setCustomValidity("")
    }

    password_confirm.reportValidity
}

password.onchange = validatePassword //
password_confirm.onkeyup = validatePassword
