function smoothScroll(id) {
  const element = document.getElementById(id);
  const yOffset = -100;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default smoothScroll;
