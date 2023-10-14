const toogoler = document.querySelector("img.toogle");
const nav = document.querySelector("ul.links");

toogoler.addEventListener("click", function () {
  nav.classList.toggle("show");
  console.log("clicked");
});
