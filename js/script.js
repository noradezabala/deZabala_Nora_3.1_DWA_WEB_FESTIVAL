// Lógica del menú
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger > i");
  const menu_opt = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");
  });
});

// Visibilidad del menú al hacer scroll
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

// Formulario reactivo: mostrar menú de selección
document.addEventListener("DOMContentLoaded", function () {
  const foodMenu = document.querySelector(".formulario_entradas");

  const botonesCompra = document.querySelectorAll(
    ".entrada_boton button, .seleccionar_varias button"
  );

  botonesCompra.forEach((boton) => {
    boton.addEventListener("click", function (e) {
      e.preventDefault();
      if (foodMenu) {
        foodMenu.classList.remove("menu_oculto");
        foodMenu.classList.add("menu_visible");
        foodMenu.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Formulario reactivo: sumar/restar entradas y calcular total
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".formulario_entradas input[type='text']"
  );
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

  document.querySelectorAll(".sumar").forEach((boton) => {
    boton.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const input = document.getElementById(targetId);
      let valor = parseInt(input.value) || 0;
      input.value = valor + 1;
      calcularTotal();
    });
  });

  document.querySelectorAll(".restar").forEach((boton) => {
    boton.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const input = document.getElementById(targetId);
      let valor = parseInt(input.value) || 0;
      if (valor > 0) {
        input.value = valor - 1;
        calcularTotal();
      }
    });
  });

  calcularTotal();
});

// Modal de cookies en index.html
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
