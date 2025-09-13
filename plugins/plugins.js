document.addEventListener('DOMContentLoaded', () => {


    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

     AOS.init({
    duration: 1500,
    once: false,  
    });


    // Change navbar background on scroll
     const navbar = document.querySelector("nav");
  const hero = document.getElementById("hero");
  const sections = document.querySelectorAll("section, div[id]"); // all sections with id
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetHeight;

    // ✅ 1. Change navbar background after hero
    if (window.scrollY > heroBottom - 80) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }

    // ✅ 2. Highlight active nav link
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // offset so it switches earlier
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-orange-500");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-orange-500");
      }
    });
  });

});