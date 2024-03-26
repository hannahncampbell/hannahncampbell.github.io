const scrollToTop = document.getElementById('scrollUp');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});