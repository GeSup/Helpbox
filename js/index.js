function switchDisplay(elementId) {
    let element = document.getElementById(elementId);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        console.log(`element.style.display = ${element.style.display}`)
    }

}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";

        var user = firebase.auth().currentUser;

        if (user != null) {

            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

        }

    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});


const registerButton = document.getElementById('register');
registerButton.addEventListener('click', function() { switchDisplay('modal-signup') });

const cancelButton = document.querySelectorAll('.cancelbtn');
cancelButton.forEach(button => {
    button.addEventListener('click', function() { switchDisplay('modal-signup') });
});

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

const loginButton = document.getElementById('login');
loginButton.addEventListener('click', login);

function logout() {
    firebase.auth().signOut();
}

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', logout);

var password = document.getElementById("password"),
    confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;