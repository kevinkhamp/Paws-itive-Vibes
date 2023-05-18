console.log("You weren't suppose to see this...")

const donationForm = document.getElementById('donationForm')

const formSubmission = async (e) => {
    e.preventDefault()

    const firstName = document.getElementById('Fname').value
    console.log(firstName)
    const lastName = document.getElementById('Lname').value
    console.log(lastName)
    const item = document.getElementById('item').value
    console.log(item)
    const date = document.getElementById('date').value
    console.log(date)

    const postVal = await fetch('/donations', {
        method: "POST",
        body: JSON.stringify({
            donation: item,
            date: date
        }),
        headers: {'Content-Type': 'application/json'},
    })
    console.log(postVal)
}

donationForm.addEventListener('submit', formSubmission)