const fullname = document.getElementById("fullname");
const button = document.querySelector('.btn-primary')
const phone = document.querySelector('#phone')
const cell = document.querySelector('#cell')
const date_of_birth = document.querySelector('#date_of_birth')
const postcode = document.querySelector('#postcode')
const state = document.querySelector('#state')
const city = document.querySelector('#city')
const street = document.querySelector('#street')
const email = document.querySelector('#email')
const profile_picture = document.querySelector('#profile_picture')

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");


  button.addEventListener('click', function(e) {
    let data = fetch("https://randomuser.me/api/")
      .then(result => result.json())
      .then(json => renderPeople(json))
  })

  function renderPeople(json) {
    for (const key in json) {
      console.log(json[key][0]);
      cell.innerHTML = json[key][0].cell
      phone.innerHTML = json[key][0].phone
      fullname.innerHTML = `${json[key][0].name.title} ${json[key][0].name.first} ${json[key][0].name.last}`
      date_of_birth.innerHTML = json[key][0].dob.date.split('T')[0]
      postcode.innerHTML = json[key][0].location.postcode
      city.innerHTML = json[key][0].location.city
      state.innerHTML = json[key][0].location.state
      street.innerHTML = json[key][0].location.street
      email.innerHTML = json[key][0].email
      profile_picture.src = json[key][0].picture.large
    }
  }
});
