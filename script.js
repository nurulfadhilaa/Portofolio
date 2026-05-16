async function loadSections() {

  document.getElementById("about-container").innerHTML =
    await (await fetch("sections/about.html")).text();

  document.getElementById("education-container").innerHTML =
    await (await fetch("sections/education.html")).text();

  document.getElementById("skills-container").innerHTML =
    await (await fetch("sections/skills.html")).text();

  document.getElementById("certification-container").innerHTML =
    await (await fetch("sections/certification.html")).text();

  document.getElementById("project-container").innerHTML =
    await (await fetch("sections/project.html")).text();

  document.getElementById("contact-container").innerHTML =
    await (await fetch("sections/contact.html")).text();

  initApp();
}

loadSections();

function initApp() {

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

  if (burgerBtn && mobileMenu) {

    burgerBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });

    });

  }

  // ACTIVE NAVBAR
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {

    link.addEventListener("click", function () {

      navLinks.forEach(item => {
        item.classList.remove("active-link");
      });

      this.classList.add("active-link");

    });

  });

  // MODAL
  const closeModal = document.getElementById("closeModal");
  const imgModal = document.getElementById("imgModal");

  if (closeModal && imgModal) {

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

  }

}

// OPEN MODAL
function showImage(src) {

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {

    modalImg.src = src;

    modal.classList.remove("hidden");
    modal.classList.add("flex");

  }

}