// Trying to get signup form to work... currently struggling

const signupForm = document.getElementById('signupForm')
const signupSubmit = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('Fname').value.trim();
    const lastName = document.getElementById('Lname').value.trim();
    const email = documnet.getElementById('Email').value.trim();
    const password = document.getElementById('Password').value.trim();

    const newUser = await fetch('/api/donor', {
        method: "POST",
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (newUser.ok) {
        document.location.replace("/");
    } else {
        alert('You suck at writing code');
        // You know you suck when the alert won't even pop up... cries
    }
;}

signupForm.addEventListener('click', signupSubmit);