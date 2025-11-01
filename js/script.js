// Abrir y cerrar menú

let burger = document.querySelector(".burger > i");

console.log(burger);
let menu_opt = document.querySelector(".menu");
console.log(menu_opt);

burger.addEventListener("click", function () {
  console.log("hola");

  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  menu_opt.classList.toggle("menu-show");
});
