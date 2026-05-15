document.addEventListener("DOMContentLoaded", function () {

  // TO TOP BUTTON
  const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      toTopBtn.classList.remove("hidden");
    } else {
      toTopBtn.classList.add("hidden");
    }

  });

  toTopBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

  // BURGER MENU
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  burgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });

  });

  // ACTIVE NAVBAR
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {

    link.addEventListener("click", function(){

      navLinks.forEach(item => {
        item.classList.remove("active-link");
      });

      this.classList.add("active-link");

    });

  });

  // CLOSE MODAL
  const closeModal = document.getElementById("closeModal");
  const imgModal = document.getElementById("imgModal");

  closeModal.onclick = function () {

    imgModal.classList.add("hidden");
    imgModal.classList.remove("flex");

  };

  imgModal.onclick = function (e) {

    if (e.target.id === "imgModal") {

      imgModal.classList.add("hidden");
      imgModal.classList.remove("flex");

    }

  };

});


// OPEN MODAL
function showImage(src) {

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modalImg.src = src;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

}