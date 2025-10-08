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
  subtitle: "The Perfect Egg",
  subDescription: "Keep water between 67 and 68C for a flavourful, tender yolk",
};

const galleryContainer = document.getElementById("gallery-block");

// Modal elements
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

// Content below the gallery images
const galleryBlockContent = document.getElementById("gallery-block-content");

// "What does cooking mean?"
const h2 = document.createElement("h2");
h2.id = "gallery-heading";
h2.textContent = galleryBlockData.title;
galleryBlockContent.appendChild(h2);

const hr = document.createElement("hr");
// Hides from screen readers
hr.setAttribute("aria-hidden", "true");
galleryBlockContent.appendChild(hr);

const p1 = document.createElement("p");
p1.textContent = galleryBlockData.description;
galleryBlockContent.appendChild(p1);

// "The Perfect Egg"
const h3 = document.createElement("h3");
h3.textContent = galleryBlockData.subtitle;
galleryBlockContent.appendChild(h3);

const p2 = document.createElement("p");
p2.textContent = galleryBlockData.subDescription;
galleryBlockContent.appendChild(p2);

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
