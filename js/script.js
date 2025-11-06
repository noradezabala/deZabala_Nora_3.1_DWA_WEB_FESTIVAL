// Lógica del menú
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

// Visibilidad del menú
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 10 && window.innerWidth) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});
// Formulario de suscripción al newsletter

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter_formulario");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`¡Gracias por suscribirte, ${nombre}!`);
      form.reset();
    });
  }
});
