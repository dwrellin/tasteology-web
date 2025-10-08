// Assuming data is from an API and it's already formatted
const cardsData = [
  {
    img: "./images/red-spoon.jpg",
    alt: "Red in spoon",
    title: "Red",
    description:
      "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
  },
  {
    img: "./images/green-spoon.jpg",
    alt: "Green in spoon",
    title: "Green",
    description:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
  },
  {
    img: "./images/white-spoon.jpg",
    alt: "White in spoon",
    title: "White",
    description:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
  },
];

const cardsBlockData = {
  title: "Taste the Colours",
};

document.addEventListener("DOMContentLoaded", () => {
  const cardsBlock = document.querySelector(".cards-block");

  const h2 = document.createElement("h2");
  h2.id = "cards-heading";
  h2.textContent = cardsBlockData.title;
  cardsBlock.appendChild(h2);

  const hr = document.createElement("hr");
  hr.ariaHidden = "true";
  cardsBlock.appendChild(hr);

  const cardContainer = document.createElement("div");
  cardContainer.id = "cards-container";
  cardContainer.className = "cards-block-items";
  cardsBlock.appendChild(cardContainer);

  cardsData.forEach((card) => {
    const cardLink = document.createElement("a");
    cardLink.href = "https://www.orchard.com.au/";
    cardLink.className = "cards-block-item";

    cardLink.addEventListener("click", (e) => {
      // Can be removed if want to redirected to Orchard's website
      e.preventDefault();

      // Need to comment `e.preventDefault()` to open in new tab.
      cardLink.target = "_blank";
      cardLink.rel = "noopener noreferrer";

      console.log(`${card.title} clicked`, e.currentTarget);
    });

    const img = document.createElement("img");
    img.src = card.img;
    img.alt = card.alt;

    const title = document.createElement("p");
    title.textContent = card.title;

    const desc = document.createElement("p");
    desc.textContent = card.description;

    cardLink.appendChild(img);
    cardLink.appendChild(title);
    cardLink.appendChild(desc);

    cardContainer.appendChild(cardLink);
  });
});
