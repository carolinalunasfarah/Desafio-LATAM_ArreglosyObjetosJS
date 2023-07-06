let listProperties = [
    {
        id: 1,
        name: "Country house",
        description: "Be near the nature and relax from the city noises",
        image: "assets/img/countryhouse.jpg",
        rooms: 2,
        m: 170,
    },
    {
        id: 2,
        name: "Beach house",
        description: "Escape from the city and wake up listening to the sea",
        image: "assets/img/beachhouse.jpg",
        rooms: 4,
        m: 130,
    },
    {
        id: 3,
        name: "Downtown house",
        description: "A great place near everything you need",
        image: "assets/img/townhouse.jpg",
        rooms: 3,
        m: 80,
    },
    {
        id: 4,
        name: "Tailer",
        description: "There's no need to leave home to travel the world",
        image: "assets/img/trailer.jpg",
        rooms: 1,
        m: 6,
    },
    {
        id: 5,
        name: "Apartment",
        description: "Everything looks better from the heights",
        image: "assets/img/apartment.jpg",
        rooms: 3,
        m: 200,
    },
    {
        id: 6,
        name: "Mansion",
        description: "Live your luxury life in your dream house",
        image: "assets/img/mansion.jpg",
        rooms: 5,
        m: 500,
    },
];

let inputs = Array.from(document.querySelectorAll("nav input"));

let propertiesList = document.getElementById("propertiesList");
let filter = document.querySelector(".filter");
let count = document.getElementById("count");
let search = document.querySelector("#search");

function showProperty(listProperties) {
    count.innerHTML = listProperties.length;
    propertiesList.innerHTML = "";

    for (let item of listProperties) {
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
          <article class = "item_image">
            <img src= "${item.image}" alt="${item.name}">
          </article>
          <article class = "item_info">
            <h4 class = "item_name">${item.name}</h4>
            <p class = "item_description">${item.description}</p>
          </article>
          <article class = "item_rym">
            <p class = "item_rooms">Rooms: ${item.rooms}</p>
            <p class = "item_m">Meters: ${item.m}</p>
          </article>
          <button class = "item_details">Details</button>
      `;

        propertiesList.appendChild(newItem);
    }
}

showProperty(listProperties);

const filterProperties = () => {
    let [{ value: rooms }, { value: smfrom }, { value: smto }] = inputs;
    if (!rooms || !smfrom || !smto) {
        alert("Please enter values");
        return false;
    }

    let filterProperties = listProperties.filter(
        (item) => item.rooms >= rooms && item.m >= smfrom && item.m >= smto
    );
    showProperty(filterProperties);
};

search.addEventListener("click", filterProperties);