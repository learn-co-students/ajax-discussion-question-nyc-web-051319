//what will fullname evaluate to?

const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const street = document.querySelector('#street');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const postcode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');
const cell = document.querySelector('#cell');
const date_of_birth = document.querySelector('#date_of_birth');

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      fullname.innerHTML = `${json["results"][0]["name"]["first"]} ${json["results"][0]["name"]["last"]}`;
      email.innerHTML = `${json["results"][0]["email"]}`;
      street.innerHTML = `${json["results"][0]["location"]["street"]}`;
      city.innerHTML = `${json["results"][0]["location"]["city"]}`;
      state.innerHTML = `${json["results"][0]["location"]["state"]}`;
      postcode.innerHTML = `${json["results"][0]["location"]["postcode"]}`;
      phone.innerHTML = `${json["results"][0]["phone"]}`;
      cell.innerHTML = `${json["results"][0]["cell"]}`;
      date_of_birth.innerHTML = `${json["results"][0]["dob"]["date"]}`;
    });
  });
});
