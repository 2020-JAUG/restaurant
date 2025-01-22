document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuButton || !mobileMenu) {
        console.warn("Menu button or mobile menu not found in the DOM.");
        return;
    }

    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        mobileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
        if (
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            mobileMenu.classList.add("hidden");
        }
    });

    mobileMenu.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            mobileMenu.classList.add("hidden");
        }
    });
});