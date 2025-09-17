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
    //global variables
  const navbar = document.querySelector("nav");
  const hero = document.getElementById("hero");

  
  
    //change active nav item on scroll
    function updateActiveNav() {
    const sections = document.querySelectorAll('div.section');
    const navItems = document.querySelectorAll('nav ul li a[href^="#"]');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const mid = scrollPos + window.innerHeight / 4;

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (mid >= top && mid < bottom) {
        current = section.id;
      }
    });

    navItems.forEach(item => {
      item.parentElement.classList.toggle('bg-orange-900', item.getAttribute('href') === `#${current}`);
    });
    }
    updateActiveNav(); 


  window.addEventListener("scroll", () => {
    updateActiveNav(); // Update active nav item on scroll
    const heroBottom = hero.offsetHeight;

    //Change navbar background after hero
    if (window.scrollY > heroBottom - heroBottom / 1.1) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
  // window.addEventListener('resize', () => requestAnimationFrame(updateActiveNav));

  });
 

  

});