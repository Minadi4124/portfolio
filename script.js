document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Drawer Toggle
    const menuBtn = document.querySelector(".menu-btn-mobile");
    const menu = document.querySelector(".menu");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
            menuBtn.querySelector("i").classList.toggle("fa-times");
        });
    }

    const galleryTrigger = document.querySelector(".greenhouse-gallery-trigger");
    const gallery = document.querySelector("#greenhouse-gallery");
    const galleryCloseButton = gallery?.querySelector(".project-gallery-close");

    if (galleryTrigger && gallery instanceof HTMLDialogElement && galleryCloseButton) {
        galleryTrigger.addEventListener("click", (event) => {
            event.preventDefault();
            gallery.showModal();
        });

        galleryCloseButton.addEventListener("click", () => gallery.close());
        gallery.addEventListener("click", (event) => {
            if (event.target === gallery) {
                gallery.close();
            }
        });
    }
});