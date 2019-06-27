const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
const button = document.querySelector('.btn-primary')
const email = document.getElementById("email")
const street = document.getElementById("street")
const city = document.getElementById("city")
const state = document.getElementById("state")
const postcode = document.getElementById("postcode")
const phone = document.getElementById("phone")
const cell = document.getElementById("cell")
const dob = document.getElementById("date_of_birth")



document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  button.addEventListener('click', function(){
    return fetch('https://randomuser.me/api/')
      .then(function(response){
        return response = response.json();
      })
      .then(function(json){
        console.log(json)
        fullname.innerHTML = `<p>${json["results"][0]["name"]["title"]} ${json["results"][0]["name"]["first"]} ${json["results"][0]["name"]["last"]}</p>`;
        email.innerHTML = `${json["results"][0]["email"]}`;
        street.innerHTML= `<p>${json["results"][0]["location"]["street"]}</p>`;
        city.innerHTML= `<p>${json["results"][0]["location"]["city"]}</p>`;
        state.innerHTML= `<p>${json["results"][0]["location"]["state"]}</p>`;
        postcode.innerHTML= `<p>${json["results"][0]["location"]["postcode"]}</p>`;
        phone.innerHTML= `<p>${json["results"][0]["phone"]}</p>`;
        cell.innerHTML= `<p>${json["results"][0]["cell"]}</p>`;
        dob.innerHTML= `<p>${Date(json["results"][0]["dob"]["date"])}</p>`;

      })
  })

});
