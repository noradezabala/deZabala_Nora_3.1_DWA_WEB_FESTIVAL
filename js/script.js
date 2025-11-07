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
    if (nav) {
      if (window.scrollY > 10) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    }
  });

  // Ventana modal de cookies
  const modalCookies = document.querySelector(".modal_cookies");
  const aceptarCookies = document.querySelector(".aceptar_cookies");
  const rechazarCookies = document.querySelector(".rechazar_cookies");

  function cerrarModalCookies() {
    if (modalCookies) modalCookies.style.display = "none";
  }

  if (aceptarCookies)
    aceptarCookies.addEventListener("click", cerrarModalCookies);
  if (rechazarCookies)
    rechazarCookies.addEventListener("click", cerrarModalCookies);

  // Formulario de suscripcion a la newsletter
  const newsletterForm = document.querySelector(".newsletter_formulario");
  const modalNewsletter = document.getElementById("modal_newsletter");
  const cerrarNewsletterBtn = document.getElementById("cerrar_newsletter");

  if (newsletterForm && modalNewsletter && cerrarNewsletterBtn) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      modalNewsletter.classList.remove("oculto");
      newsletterForm.reset();
    });

    cerrarNewsletterBtn.addEventListener("click", function () {
      modalNewsletter.classList.add("oculto");
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

    if (totalDisplay) totalDisplay.textContent = total.toFixed(2) + " €";

    if (buyButton) {
      if (total > 0) {
        buyButton.classList.remove("disabled");
        buyButton.disabled = false;
      } else {
        buyButton.classList.add("disabled");
        buyButton.disabled = true;
      }
    }
  }

  document.querySelectorAll(".sumar").forEach((boton) => {
    boton.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const input = document.getElementById(targetId);
      if (input) {
        let valor = parseInt(input.value) || 0;
        input.value = valor + 1;
        calcularTotal();
      }
    });
  });

  document.querySelectorAll(".restar").forEach((boton) => {
    boton.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const input = document.getElementById(targetId);
      if (input) {
        let valor = parseInt(input.value) || 0;
        if (valor > 0) {
          input.value = valor - 1;
          calcularTotal();
        }
      }
    });
  });

  calcularTotal();

  // Ventana modal continuar con el pago
  const modalPago = document.getElementById("modal_pago");
  const aceptarPago = document.getElementById("aceptar_pago");
  const cancelarPago = document.getElementById("cancelar_pago");

  if (buyButton && modalPago && aceptarPago && cancelarPago) {
    buyButton.addEventListener("click", function (e) {
      e.preventDefault();
      modalPago.classList.remove("oculto");
    });

    cancelarPago.addEventListener("click", function () {
      modalPago.classList.add("oculto");
    });

    aceptarPago.addEventListener("click", function () {
      // aquí puedes redirigir realmente al checkout si lo deseas
      modalPago.classList.add("oculto");
    });
  }
});
