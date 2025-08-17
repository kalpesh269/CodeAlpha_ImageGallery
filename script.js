const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryItems = document.querySelectorAll(".gallery-item");

let currentIndex = 0;

// Open modal on image click
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.src;
    currentIndex = index;
  });
});

// Close modal
closeBtn.addEventListener("click", () => (modal.style.display = "none"));

// Show Image
function showImage(index) {
  if (index >= 0 && index < galleryItems.length) {
    modalImg.src = galleryItems[index].src;
    currentIndex = index;
  }
}

// Prev/Next buttons
prevBtn.addEventListener("click", () =>
  showImage(currentIndex - 1 >= 0 ? currentIndex - 1 : galleryItems.length - 1)
);
nextBtn.addEventListener("click", () =>
  showImage((currentIndex + 1) % galleryItems.length)
);

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") showImage(currentIndex - 1 >= 0 ? currentIndex - 1 : galleryItems.length - 1);
    if (e.key === "ArrowRight") showImage((currentIndex + 1) % galleryItems.length);
    if (e.key === "Escape") modal.style.display = "none";
  }
});
