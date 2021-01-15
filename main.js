const btnUp = document.querySelector(".go-top");
const links = document.querySelectorAll(".a__article");
// menu
document.querySelector(".btn-menu").addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("show");
});

links.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".aside").classList.remove("show");
  });
});
window.onscroll = function () {
  if (window.scrollY > 600) {
    btnUp.style.right = "10px";
  } else {
    btnUp.style.right = "-50px";
  }
};

btnUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
