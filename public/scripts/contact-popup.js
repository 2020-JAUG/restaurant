document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("contact-popup");
    const popupContent = document.getElementById("popup-content");
    const contactBtns = document.querySelectorAll("[data-contact-btn]");
    const closePopupBtn = document.getElementById("close-popup");

    // Función para alternar la visibilidad del popup
    function togglePopup() {
        if (popup) {
            popup.classList.toggle("hidden");
        }
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
            mobileMenu.classList.add("hidden");
        }
    }

    // Manejar clics en opciones del popup
    function handleOptionClick(event) {
        togglePopup(); // Cierra el popup
        // Permitir navegación en enlaces
        const target = event.target;
        if (target.tagName === "A") {
            return true;
        }
        event.preventDefault(); // Previene acción adicional en botones
    }

    // Asociar eventos a los botones de contacto
    contactBtns.forEach((btn) => {
        btn.addEventListener("click", togglePopup);
    });

    // Cerrar popup si el usuario hace clic fuera del contenido
    if (popup) {
        popup.addEventListener("click", (event) => {
            if (
                popupContent &&
                !popupContent.contains(event.target)
            ) {
                togglePopup();
            }
        });
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", handleOptionClick);
    }
    const contactOptions = document.querySelectorAll(
        "[data-option='contact']",
    );
    contactOptions.forEach((option) => {
        option.addEventListener("click", handleOptionClick);
    });
});
