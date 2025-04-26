const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    navLinks.classList.add('inactive');
  } else {
    navLinks.classList.add('active');
    navLinks.classList.remove('inactive');
  }
});
