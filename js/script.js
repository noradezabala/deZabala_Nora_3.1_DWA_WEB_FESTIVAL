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

// Formulario reactivo
document.addEventListener("DOMContentLoaded", function () {
  const foodMenu = document.querySelector(".food_menu");

  const botonesCompra = document.querySelectorAll(
    ".entrada_boton button, .seleccionar_varias button"
  );

  botonesCompra.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      e.preventDefault(); // evita que el botón provoque scroll o recarga
      if (foodMenu) {
        foodMenu.classList.remove("menu_oculto");
        foodMenu.classList.add("menu_visible");
        foodMenu.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".food_menu input[type='number']");
  const totalDisplay = document.querySelector(".total_price");
  const buyButton = document.querySelector(".buy_food");

  function calcularTotal() {
    let total = 0;

    inputs.forEach((input) => {
      const cantidad = parseInt(input.value) || 0;
      const precio = parseFloat(input.dataset.price) || 0;
      total += cantidad * precio;
    });

    totalDisplay.textContent = total.toFixed(2) + " €";

    if (total > 0) {
      buyButton.classList.remove("disabled");
      buyButton.disabled = false;
    } else {
      buyButton.classList.add("disabled");
      buyButton.disabled = true;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", calcularTotal);
  });

  calcularTotal();
});
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index"
  ) {
    const modal = document.querySelector(".modal_cookies");
    const aceptar = document.querySelector(".aceptar_cookies");
    const rechazar = document.querySelector(".rechazar_cookies");

    function cerrarModal() {
      modal.style.display = "none";
    }

    aceptar.addEventListener("click", cerrarModal);
    rechazar.addEventListener("click", cerrarModal);
  }
});
