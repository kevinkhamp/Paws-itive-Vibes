console.log('hi')

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

    const postVal = await fetch('/donations/donate', {
        method: "POST",
        body: JSON.stringify({
            donation: item,
            date: date
        }),
        headers: {'Content-Type': 'application/json'},
    })
}

if(postVal.ok) {
    alert('Thank you!')
} else {
    alert('Code broken')
}

donationForm.addEventListener('submit', formSubmission)