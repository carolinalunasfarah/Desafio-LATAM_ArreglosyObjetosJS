let listProperties = [
    {
        id: 1,
        name: "Country house",
        description: "Un lugar ideal para descansar de la ciudad",
        src: "assets/img/2_countryhouse.jpg",
        rooms: 2,
        m: 170,
    },
    {
        id: 2,
        name: "Beach house",
        description: "Despierta tus días oyendo el oceano",
        image: "assets/img/5_beachhouse.jpg",
        rooms: 4,
        m: 130,
    },
    {
        id: 3,
        name: "Downtond house",
        description: "Ten cerca de ti todo lo que necesitas",
        image: "assets/img/3_townhouse.jpg",
        rooms: 2,
        m: 80,
    },
    {
        id: 4,
        name: "Tailer",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        image: "assets/img/4_trailer.jpg",
        rooms: 1,
        m: 6,
    },
    {
        id: 5,
        name: "Apartment",
        description: "Desde las alturas todo se ve mejor",
        image: "assets/img/6_apartment.jpg",
        rooms: 3,
        m: 200,
    },
    {
        id: 6,
        name: "Mansion",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        image: "assets/img/1_mansion.jpg",
        rooms: 5,
        m: 500,
    },
];

let inputs = Array.from(document.querySelectorAll("nav input"));

let propertiesList = document.getElementById("propertiesList");
let filter = document.querySelector(".filter");
let count = document.getElementById("count");
let search = document.getElementsByClassName("search");

function showProperty(listProperties) {
    count.innerHTML = listProperties.length;
    propertiesList.innerHTML = "";

    for (let item of listProperties) {
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
      <div class = "item_container">
        <article class = "item_image">
          <img src= "${item.image}" alt="${item.name}">
        </article>
        <article class = "item_info">
          <h5 class = "item_name">${item.name}</h5>
          <p class = "item_description">${item.description}</p>
        </article>
        <article>
          <p class = "item_rooms">Rooms: ${item.rooms}</p>
          <p class = "item_m">Meters: ${item.m}</p>
        </article>
        <button class = "item_detailes">Details</button>
      </div>
      `;

        propertiesList.appendChild(newItem);
    }
}

showProperty(listProperties);

const filterProperties = () => {
    let [{ value: rooms }, { value: smfrom }, { value: smto }] = inputs;
    if (!rooms && !smfrom && !smto) {
        alert("Please enter values");
        return false;
    }

    let filterProperties = listProperties.filter(
        (item) => item.rooms >= rooms && item.m >= smfrom && item.m >= smto
    );
    showProperty(filterProperties);
};

search.addEventListener("click", filterProperties);
