const tbody = document.querySelector("tbody");
const places = [
  "Chengdu, China",
  "Durban, South Africa",
  "Quito, Ecuador",
  "Karachi, Pakistan",
  "Izmir, Turkey",
  "Makassar, Indonesia",
];

function locate() {
  let row = tbody.insertRow(0);
  let place = row.insertCell();
  place.appendChild(
    document.createTextNode(places[Math.floor(Math.random() * places.length)])
  );
  let time = row.insertCell();
  time.appendChild(document.createTextNode(new Date().toLocaleString()));
  let pack = row.insertCell();
  pack.appendChild(document.createTextNode(Math.ceil(Math.random() * 100)));
}
