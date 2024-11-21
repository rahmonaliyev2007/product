
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) { 
    navbar.classList.add('scrolled'); 


  } else {
    navbar.classList.remove('scrolled');
  }
});



function scrollToSection1() {
    const targetElement = document.getElementById('section1');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}


function scrollToFooter() {
  const targetElement = document.getElementById('contact');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}