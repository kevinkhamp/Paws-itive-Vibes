console.log("You weren't suppose to see this...")

const donationForm = document.getElementById('donationForm')
const donationsContainer = document.getElementById('donation-cont')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('submit', (e) => {
    e.preventDefault()

const postDon = (donation) =>
fetch('donations', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(donation)
})
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.error('Error: ',error)
})
})

// const formSubmission = async (e) => {
//     e.preventDefault()

//     // const firstName = document.getElementById('Fname').value
//     // // console.log(firstName)
//     // const lastName = document.getElementById('Lname').value
//     // // console.log(lastName)
//     const item = document.getElementById('item').value
//     // console.log(item)
//     const date = document.getElementById('date').value
//     // console.log(date)

//     const postVal = await fetch(`donations`, {
//         method: "POST",
//         body: JSON.stringify({item, date}),
//         headers: {'Content-Type': 'application/json'},
//     }) .then (function(res) {
//         return res.json()
//     })
//     .then(function(res) {
//         console.log(res)
//     })
//     console.log(postVal)
// }

donationForm.addEventListener('submit', handleFormSubmit)

console.log(`%c ________________________________________
< quack >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")