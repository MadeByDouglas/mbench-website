function getEmail() {
    return document.getElementById('email').value;
}

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

function sendEmail() {   
    let email = getEmail()
    if(validateEmail(email)) {
    } else {
        alert("You typed an invalid email addresss: " + email);
    }
}  