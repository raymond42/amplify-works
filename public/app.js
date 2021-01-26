const burger = document.querySelector(".ham-burger");

burger.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});
