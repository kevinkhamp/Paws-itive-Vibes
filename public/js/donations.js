console.log("You weren't suppose to see this...")

const donationForm = document.getElementById('donationForm')
const donationsContainer = document.getElementById('donation-cont')
const submitBtn = document.getElementById('submit')

// submitBtn.addEventListener('submit', (e) => {
//     e.preventDefault()

// const postDon = (donation) =>
// fetch('donations', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(donation)
// })
// .then((response) => response.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.error('Error: ',error)
// })
// })

const donationSubmit = async (event) => {
    event.preventDefault()

    const firstName = document.getElementById('Fname').value.trim();
    const lastName = document.getElementById('Lname').value.trim();
    const donationItem = documnet.getElementById('Item').value.trim();
    const donationDate = document.getElementById('Date').value.trim();

    const donationVal = await fetch('/api/donations', {
        method: "POST",
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            donation: donationItem,
            date: donationDate
        }),
        headers: {'Content-Type': 'application/json'},
    });
    if (donationVal.ok) {
        document.location.replace("/api/donations");
    } else {
        alert('You suck at writing code');
    }
    
    //  .then (function(res) {
    //     return res.json(donationVal)
    // })
    // .then(function(res) {
    //     console.log(res)
    // })
    // console.log(donationVal)
}

donationForm.addEventListener('submit', donationSubmit);

console.log(`%c ________________________________________
< quack >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")