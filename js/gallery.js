// Assuming data is from an API and it's already formatted
const galleryData = [
  { src: "./images/steamed.jpg", alt: "Steamed meal" },
  { src: "./images/chef-select.jpg", alt: "Chef selecting ingredients" },
  { src: "./images/egg-tray.jpg", alt: "Opened eggs in a tray" },
];

const galleryBlockData = {
  title: "What does cooking mean?",
  description:
    "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
  secondaryTitle: "The Perfect Egg",
  secondaryDescription:
    "Keep water between 67 and 68°C for a flavourful, tender yolk",
};

const galleryContainer = document.getElementById("gallery-block");

// Modal elements
const modalElement = document.getElementById("img-modal");
const modalImage = document.getElementById("modal-img");

const imagesDiv = document.getElementsByClassName("gallery-block-images")[0];

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

// Content adjacent to (Desktop) / below (Mobile) the gallery images
const galleryBlockContent = document.getElementsByClassName(
  "gallery-block-content"
)[0];

// "What does cooking mean?"
const mainTitle = document.getElementsByClassName(
  "gallery-block-main-title"
)[0];
mainTitle.textContent = galleryBlockData.title;

const mainDescription = document.getElementsByClassName(
  "gallery-block-main-description"
)[0];
mainDescription.textContent = galleryBlockData.description;

// "The Perfect Egg"
const secondaryTitle = document.getElementsByClassName(
  "gallery-block-secondary-title"
)[0];
secondaryTitle.textContent = galleryBlockData.secondaryTitle;

const secondaryDescription = document.getElementsByClassName(
  "gallery-block-secondary-description"
)[0];
secondaryDescription.textContent = galleryBlockData.secondaryDescription;

// Close Modal
modalElement.addEventListener("click", (e) => {
  if (e.target === modalElement) {
    modalElement.style.display = "none";
    modalImage.src = "";
    modalImage.alt = "";
  }
});

// Close modal via `Esc` key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalElement.style.display === "flex") {
    modalElement.style.display = "none";
    modalImage.src = "";
    modalImage.alt = "";
  }
});
