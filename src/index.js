const fullname = document.getElementById("fullname");
const email = document.querySelector("#email");
const street = document.querySelector("#street")
const city = document.querySelector("#city")
const postcode = document.querySelector("#postcode")
let profilePicture = document.querySelector("#profile_picture")
const phone = document.querySelector("#phone")
const cell = document.querySelector("#cell")
const date_of_birth = document.querySelector("#date_of_birth")
const state = document.querySelector("#state")
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

const addNewBtn = document.querySelector("button.btn.btn-primary")
addNewBtn.addEventListener("click", function() {
  fetch("https://randomuser.me/api/")
  .then(resp => resp.json())
  .then(json => showPerson(json))
})

function showPerson(json) {
    const newPerson = json.results[0]
    const title = newPerson.name.title 
    const firstName = newPerson.name.first
    const lastName = newPerson.name.last
    fullname.innerText = `${title[0].toUpperCase()+title.slice(1)}. ${firstName[0].toUpperCase()+firstName.slice(1)} ${lastName[0].toUpperCase()+lastName.slice(1)}`

    profilePicture.src = newPerson.picture.large
    email.innerText = newPerson.email
    street.innerText = newPerson.location.street
    city.innerText = newPerson.location.city
    postcode.innerText = newPerson.location.postcode
    phone.innerText = newPerson.phone
    cell.innerText = newPerson.cell
    date_of_birth.innerText = newPerson.dob.date
    state.innerText = newPerson.location.state
}