document.addEventListener("DOMContentLoaded", function () {
  // Cambiar modo
  const btnSwitchMode = document.querySelector(".icono_modo_oscuro");
  const body = document.querySelector("body");
  const icono = document.querySelector(".icono_modo_oscuro img");

  const iconoClaro = "svg/icono_modo_claro.svg";
  const iconoOscuro = "svg/icono_modo_oscuro.svg";

  if (btnSwitchMode && icono) {
    btnSwitchMode.addEventListener("click", function () {
      const isDark = body.classList.contains("modo-oscuro");

      if (isDark) {
        body.classList.remove("modo-oscuro");
        body.classList.add("modo-claro");
        icono.src = iconoOscuro;
      } else {
        body.classList.remove("modo-claro");
        body.classList.add("modo-oscuro");
        icono.src = iconoClaro;
      }
    });
  }

  // Menú hamburguesa
  const burger = document.querySelector(".burger > i");
  const menu = document.querySelector(".menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("fa-bars");
      burger.classList.toggle("fa-times");
      menu.classList.toggle("menu-show");
    });
  }

  // Visibilidad del menú al hacer scroll
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  // Ventana modal de cookies
  const modal = document.querySelector(".modal_cookies");
  const aceptar = document.querySelector(".aceptar_cookies");
  const rechazar = document.querySelector(".rechazar_cookies");

  function cerrarModal() {
    if (modal) modal.style.display = "none";
  }

  if (aceptar) aceptar.addEventListener("click", cerrarModal);
  if (rechazar) rechazar.addEventListener("click", cerrarModal);

  // Formulario de suscripcion a la newsletter
  const formNewsletter = document.querySelector(".newsletter_formulario");

  if (formNewsletter) {
    formNewsletter.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      alert(`¡Gracias por suscribirte, ${nombre}!`);
      formNewsletter.reset();
    });
  }

  // Mostrar formulario de compra de entradas
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

  // Funcion de sumar o restar entradas y calcular total
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
