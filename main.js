// let wrapperEl = document.getElementById("wrapper");
// console.log(wrapperEl);

const menu = [
  {
    id: 1,
    name: "Kabab",
    img: "./images/kabab.jpg",
    category: "foods",
    price: 15.49,
  },
  {
    id: 2,
    name: "Sumboro",
    img: "./images/shirinlik3.png",
    category: "desserts",
    price: 1.5,
  },
  {
    id: 3,
    name: "Limonad",
    img: "./images/ichimlik1.jpg",
    category: "drinks",
    price: 1.3,
  },
  {
    id: 4,
    name: "Manti",
    img: "./images/manti.jpg",
    category: "foods",
    price: 13.47,
  },
  {
    id: 5,
    name: "Malinali",
    img: "./images/ichimlik2.webp",
    category: "drinks",
    price: 1.7,
  },
  {
    id: 6,
    name: "Sumboro",
    img: "./images/shirinlik4.png",
    category: "desserts",
    price: 1.9,
  },
  {
    id: 7,
    name: "Lagman",
    img: "./images/lagman.jpg",
    category: "foods",
    price: 12,
  },
  {
    id: 8,
    name: "Sumboro",
    img: "./images/sumboro.jpg",
    category: "foods",
    price: 15,
  },

  {
    id: 9,
    name: "qulupnay",
    img: "./images/ichimlik4.jpg",
    category: "drinks",
    price: 1.2,
  },

  {
    id: 10,
    name: "Sumboro",
    img: "./images/shirinlik1.jpg",
    category: "desserts",
    price: 15,
  },
  {
    id: 11,
    name: "Tabaka",
    img: "./images/tabake.jpg",
    category: "foods",
    price: 15,
  },
  {
    id: 12,
    name: "Sumboro",
    img: "./images/shirinlik2.png",
    category: "desserts",
    price: 15,
  },
  {
    id: 13,
    name: "Malina",
    img: "./images/ichimlik3.jpg",
    category: "drinks",
    price: 15,
  },
  {
    id: 14,
    name: "Sudak file",
    img: "./images/sudak.jpg",
    category: "foods",
    price: 20.7,
  },
  {
    id: 15,
    name: "Sumboro",
    img: "./images/shirinlik1.jpg",
    category: "desserts",
    price: 15,
  },
];

const foods = document.querySelector(".foods");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    return `<div class="foods">
        
        <div class="foods-asd">
          <img src=${item.img} alt="img" class="foods-img" />
          <h4>${item.name}</h4>
          <h4>${item.price}$</h4>
          <button onclick="add(${item.id})" id="like"><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  foods.innerHTML = displayMenu;
});

const input = document.getElementById("qiymat");
const search = document.getElementById("search");

search.addEventListener("click", function () {
  let displayMenu = menu.map(function (item) {
    if (input.value === item.category) {
      return `<div class="foods">
        
            <div class="foods-asd">
              <img src=${item.img} alt="img" class="foods-img" />
              <h4>${item.name}</h4>
              <h4>${item.price}$</h4>
              <button onclick="add(${item.id})" id="like"><i class="fa-regular fa-heart"></i></button>
            </div>
          </div>`;
    }
  });
  displayMenu = displayMenu.join("");
  foods.innerHTML = displayMenu;
});

const select = document.getElementById("select");

select.addEventListener("change", function () {
  let displayMenu = menu.map(function (item) {
    if (select.value == "all") {
      return `<div class="foods">
    <div class="foods-asd">
      <img src=${item.img} alt="img" class="foods-img" />
      <h4>${item.name}</h4>
      <h4>${item.price}$</h4>
      <button onclick="add(${item.id})" id="like"><i class="fa-regular fa-heart"></i></button>
    </div>
  </div>`;
    } else if (select.value === item.category) {
      return `<div class="foods">
              <div class="foods-asd">
                <img src=${item.img} alt="img" class="foods-img" />
                <h4>${item.name}</h4>
                <h4>${item.price}$</h4>
                <button onclick="add(${item.id})" id="like"><i class="fa-regular fa-heart"></i></button>
              </div>
            </div>`;
    }
  });
  displayMenu = displayMenu.join("");
  foods.innerHTML = displayMenu;
});

const korzinka = [];
function add(id) {
  korzinka.push(id);
  filter(menu, korzinka);
}

function filter(menu, korzinka) {
  const w3modal = document.querySelector('.w3-modal');
  w3modal.innerHTML = '';

  for (let i = 0; i < menu.length; i++) {
    for (let k = 0; k < korzinka.length; k++) {
      if (menu[i].id === korzinka[k]) {
        console.log(menu[i]);
        w3modal.innerHTML +=`<div class="foods">
        <div class="foods-asd">
        <img src=${menu[i].img} alt="img" class="foods-img" />
          <h4>${menu[i].name}</h4>
          <h4>${menu[i].price}</h4>
        </div>
      </div>
                `
      }
    }
  }
}
