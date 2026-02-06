const filterButtons = document.querySelectorAll(".helper-options button");
const courseCards = document.querySelectorAll(".course-card");
/* IMAGE SLIDER */
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let index = 0;

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    // Active state
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    courseCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});