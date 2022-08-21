let flightDestinations=[{
   destination: "kolkata",
   price: 5000,
},
{
    destination:"Delhi",
    price:7000,
},
{
    destination:"Goa",
    price:6000,
}

]

let searchFlight = document.getElementById("search").value;

const result = function search(){
 flightDestinations.filter(flightDestinations => {
  flightDestinations.destination.toLowerCase().includes(searchFlight)
});
}

document.getElementById("output").textContent=result;


