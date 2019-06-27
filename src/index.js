const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData() {
  var data = fetch('https://randomuser.me/api/')
         .then( res => res.json() )
         .then( json => {let apiname = document.createElement('p')
                         apiname.innerText = `${json["results"][0]["name"]["first"]}`
                         fullname.appendChild(apiname)} )
}

fetchData()
