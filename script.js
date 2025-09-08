// For the cart design
const cardSection = async () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  const res = await fetch(url);
  const data = await res.json();
  displayCategory(data.plants);
};

// Product load
const productLoad = async (id) => {
  const url2 = `https://openapi.programming-hero.com/api/category/${id}`;
  const res2 = await fetch(url2);
  const data2 = await res2.json();
  // removeActive();
  // const clickButton = document.getElementById(`navBtn-${id}`);
  // if (clickButton) {
  //   clickButton.classList.add(
  //     "bg-green-500",
  //     "w-36",
  //     "md:w-full",
  //     "text-white"
  //   );
  // }
  displayCategory(data2.plants);
};

const displayCategory = (carts) => {
  const categoryContainer = document.getElementById("category_container");
  categoryContainer.innerHTML = "";
  for (const cart of carts) {
    // create div
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `<div class="p-3 bg-white shadow-5xl rounded-xl">
           <figure><img class="w-[250px] h-[250px] rounded-xl" src="${cart.image}" alt="" /></figure>
            <h3 class="font-bold text-[#1F2937] text-[20px] mt-2">${cart.name}</h3>
            <p class="text-[#1F2937] text-[14px] font-normal text-justify mt-2">
              ${cart.description}
            </p>
            <div class="flex justify-between mt-4">
              <button class="text-[#15803D] px-5 py-2 rounded-full font-semibold">${cart.category}</button>
              <p class="text-[#1F2937] font-bold text-[20px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>500</span></p>
            </div>
            <button class="bg-[#15803D] font-medium text-white py-2 w-full rounded-full">Add to Cart</button>
          </div>`;
    categoryContainer.appendChild(createDiv);
  }
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
  datas.forEach((data) => {
    console.log(data);
    const createLi = document.createElement("li");
    createLi.id = `navBtn-${data.id}`;
    createLi.innerText = ` ${data.category_name}`;
    // createLi.classList.add("catagore-btn", "py-1.5", "pl-2", "rounded-sm");
    createLi.addEventListener("click", function () {
      productLoad(`${data.id}`);
    });
    menuContainer.appendChild(createLi);
  });
};
sideMenu();
