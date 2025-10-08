// Assuming data is from an API and it's already formatted
const galleryData = [
  { src: "./images/steamed.jpg", alt: "Steamed meal" },
  { src: "./images/chef-select.jpg", alt: "Chef selecting ingredients" },
  { src: "./images/egg-tray.jpg", alt: "Opened eggs in a tray" },
];

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
