// Gallery Block
const galleryData = [
  { src: "./images/steamed.jpg", alt: "Steamed meal" },
  { src: "./images/chef-select.jpg", alt: "Chef selecting ingredients" },
  { src: "./images/egg-tray.jpg", alt: "Opened eggs in a tray" },
];

const galleryContainer = document.getElementById("gallery-block");
const imagesDiv = document.createElement("div");
imagesDiv.className = "gallery-block-images";

galleryData.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;
  imagesDiv.appendChild(img);
});

galleryContainer.prepend(imagesDiv);

// Cards Block
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

const container = document.getElementById("cards-container");

cardsData.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "cards-block-item";

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = card.alt;

  const title = document.createElement("p");
  title.textContent = card.title;

  const desc = document.createElement("p");
  desc.textContent = card.description;

  cardDiv.appendChild(img);
  cardDiv.appendChild(title);
  cardDiv.appendChild(desc);

  container.appendChild(cardDiv);
});
