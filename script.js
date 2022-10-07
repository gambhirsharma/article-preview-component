const shareSectionEl = document.getElementById("share-section");
const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", () => {
  shareSectionEl.classList.toggle("show");
});
