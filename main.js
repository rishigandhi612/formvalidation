function validateForm() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;

    var namePattern = /^[A-Za-z\s]+$/;
    var mobilePattern = /^[0-9]{10}$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var isValid = true;

    if (!name.match(namePattern)) {
        document.getElementById("nameError").innerHTML = "Please enter a valid name.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (!mobile.match(mobilePattern)) {
        document.getElementById("mobileError").innerHTML = "Please enter a valid mobile number.";
        isValid = false;
    } else {
        document.getElementById("mobileError").innerHTML = "";
    }

    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    if (!name || !mobile || !email) {
        alert("Please fill in all required fields.");
        isValid = false;
    }

    return isValid;
}