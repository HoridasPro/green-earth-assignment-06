// For the cart design
const cardSection = async () => {
  loadSpinner(true);
  const url = `https://openapi.programming-hero.com/api/plants`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategory(data.plants);
  loadSpinner(false);
};

// cart details

const cartDetails = async (id) => {
  loadSpinner(true);
  const url4 = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res4 = await fetch(url4);
  const data4 = await res4.json();
  displayCartDetails(data4.plants);
  loadSpinner(false);
};
const displayCartDetails = (cart) => {
  const modalId = document.getElementById("modal_details");
  modalId.innerHTML = `
  <h1 class="font-bold text-[25px]">${cart.name}</h1>
          <img class="w-[300px] h-[200px] rounded-xl mt-3" src="${cart.image}" alt="" />
          <p><span class="font-bold mr-1 mt-5">Category :</span>${cart.category}</p>
          <p><span class="font-bold mr-1">Price :</span> ${cart.price}</p>
          <p> 
            <span class="font-bold mr-1">Description :</span> ${cart.description}
          </p>`;
  document.getElementById("my_modal_1").showModal();
};

// For spinner
const loadSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("category_container").classList.add("hidden");
  } else {
    document.getElementById("category_container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};
// Product load
const productLoad = async (id) => {
  loadSpinner(true);

  const url2 = `https://openapi.programming-hero.com/api/category/${id}`;
  const res2 = await fetch(url2);
  const data2 = await res2.json();
  removeActive();
  const clickButton = document.getElementById(`navBtn-${id}`);
  if (clickButton) {
    clickButton.classList.add(
      "bg-[#15803D]",
      "w-36",
      "md:w-full",
      "text-white"
    );
  }
  displayCategory(data2.plants);
};
const removeActive = () => {
  const allBtns = document.querySelectorAll(".catagore_btn");
  allBtns.forEach((btn) => {
    btn.classList.remove("bg-[#15803D]", "text-white");
  });
};

const displayCategory = (carts) => {
  const categoryContainer = document.getElementById("category_container");
  categoryContainer.innerHTML = "";
  for (const cart of carts) {
    // create div
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `<div class="p-3 bg-white shadow-5xl rounded-xl">
           <figure><img class="w-[300px] h-[200px] rounded-xl" src="${cart.image}" alt="" /></figure>
            <h3 onclick=cartDetails(${cart.id}) class="font-bold text-[#1F2937] text-[20px] mt-2 cursor-pointer">${cart.name}</h3>
            <p class="text-[#1F2937] text-[14px] font-normal text-justify mt-2">
              ${cart.description}
            </p>
            <div class="flex justify-between mt-4">
              <button class="text-[#15803D] px-5 py-2 rounded-full font-semibold">${cart.category}</button>
              <p class="text-[#1F2937] font-bold text-[20px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${cart.price}</span></p>
            </div>
            <button class="cartBtn bg-[#15803D] font-medium text-white py-2 w-full rounded-full cursor-pointer">Add to Cart</button>
          </div>`;
    categoryContainer.appendChild(createDiv);
  }
  loadSpinner(false);
};
cardSection();

// For side menu
const sideMenu = async () => {
  const categoryuUrl = `https://openapi.programming-hero.com/api/categories`;
  const res1 = await fetch(categoryuUrl);
  const data1 = await res1.json();
  displayMenu(data1.categories);
};
const displayMenu = (datas) => {
  const menuContainer = document.getElementById("menu_container");
  menuContainer.innerHTML = "";

  // create h1
  const createHi = document.createElement("h1");
  createHi.innerText = "Categories";
  createHi.classList.add(
    "text-xl",
    "font-bold",
    "mb-2",
    "text-black-500",
    "ml-4"
  );
  menuContainer.appendChild(createHi);

  // create li
  const li = document.createElement("li");
  li.innerText = "All Trees";
  li.classList.add(
    "text-lg",
    "mb-1",
    "hover:bg-[#15803D]",
    "py-1",
    "pl-4",
    "rounded-xl",
    "text-black",
    // "hover:bg-[#15803D]",
    "cursor-pointer"
  );

  li.addEventListener("click", async function () {
    const url3 = `https://openapi.programming-hero.com/api/plants`;
    const res3 = await fetch(url3);
    const data3 = await res3.json();
    removeActive();
    li.classList.add("bg-[#15803D]", "mb-1", "text-white");
    displayCategory(data3.plants);
  });
  menuContainer.appendChild(li);
  // For the
  menuContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && e.target !== li) {
      li.classList.remove("bg-[#15803D]", "text-white");
    }
  });

  datas.forEach((data) => {
    // console.log(data);
    const createLi = document.createElement("li");
    createLi.id = `navBtn-${data.id}`;
    createLi.innerText = ` ${data.category_name}`;
    createLi.classList.add(
      "catagore_btn",
      "py-1",
      "pl-4",
      "rounded-xl",
      "text-black",
      "hover:bg-[#15803D]",
      "cursor-pointer"
    );
    createLi.addEventListener("click", function () {
      productLoad(`${data.id}`);
    });
    menuContainer.appendChild(createLi);
  });
};
sideMenu();
// cart title

document.getElementById("click", (e) => {
  if (e.target.classList.contains("cartsBtn")) {
    let cartTile = e.target.parentElement;
    console.log(cartTile);
  }
});

// Remove card
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cartBtn")) {
    let cardTitle = e.target.parentElement.children[1].innerText;
    console.log(cardTitle);
    let cartPrice =
      e.target.parentElement.children[3].children[1].children[1].innerText;
    console.log(cartPrice);
    const cartHistory = document.getElementById("cart_history");

    const div = document.createElement("div");
    div.innerHTML = `<div class="cartItem px-3 py-2 my-3 bg-[#F0FDF4] flex justify-between items-center rounded-lg">
          <div>
            <h6 class="text-sm">${cardTitle}</h6>
           <p class="text-xs">${cartPrice}</p>
          </div>
           <button class="removeBtn text-xs text-gray-400"><i class="fa-solid fa-x cursor-pointer"></i></button>
           
         </div>
         `;
    cartHistory.appendChild(div);
  }
  if (
    e.target.classList.contains("removeBtn") ||
    e.target.classList.contains("fa-x")
  ) {
    e.target.closest(".cartItem").remove();
  }
});
