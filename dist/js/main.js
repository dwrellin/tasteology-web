// Gallery Block
const galleryData = [
  { src: "./images/steamed.jpg", alt: "Steamed meal" },
  { src: "./images/chef-select.jpg", alt: "Chef selecting ingredients" },
  { src: "./images/egg-tray.jpg", alt: "Opened eggs in a tray" },
];

const galleryContainer = document.getElementById("gallery-block");
const modalElement = document.getElementById("img-modal");
const modalImage = document.getElementById("modal-img");
const imagesDiv = document.createElement("div");
imagesDiv.className = "gallery-block-images";

galleryData.forEach((item) => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt;

  img.addEventListener("click", () => {
    modalElement.style.display = "flex";
    modalImage.src = item.src;
    modalImage.alt = item.alt;
  });

  imagesDiv.appendChild(img);
});

galleryContainer.prepend(imagesDiv);

// Close Modal
modalElement.addEventListener("click", (e) => {
  if (e.target === modalElement) {
    modalElement.style.display = "none";
    modalImage.src = "";
    modalImage.alt = "";
  }
});

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
  const cardLink = document.createElement("a");
  cardLink.href = "https://www.orchard.com.au/";
  cardLink.className = "cards-block-item";

  cardLink.addEventListener("click", (e) => {
    // Can be removed if want to redirected to Orchard's website
    e.preventDefault();
    console.log(`${card.title} clicked`);
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

  container.appendChild(cardLink);
});
