const cardSection = () => {
  const url = `https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => wordSection(data.plants));
};
const wordSection = (words) => {
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";
  for (const word of words) {
    const createDivs = document.createElement("div");
    createDivs.innerHTML = `
          <div class=" p-3 bg-white shadow-5xl">
           <figure><img class="w-[250px] h-[250px] rounded-xl" src="${word.image}" alt="" /></figure>
            <h3 class="font-bold">${word.name}</h3>
            <p>
              A fast-growing tropical tree that produces delicious, <br />
              juicy mangoes during summer. Its dense green
            </p>
            <div class="flex justify-between">
              <button>Fruit Tree</button>
              <span>৳500</span>
            </div>
          </div>
      `;
    wordContainer.appendChild(createDivs);
  }
};
cardSection();
