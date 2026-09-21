(function () {
  const links = document.querySelectorAll("nav.site a");
  const sections = document.querySelectorAll("section.block");
  function show(id) {
    sections.forEach((s) => s.classList.toggle("on", s.id === id));
    links.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
    if (history.replaceState) history.replaceState(null, "", "#" + id);
  }
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      show(a.dataset.section);
      window.scrollTo(0, 0);
    });
  });
  const start = (location.hash || "#home").replace("#", "");
  show(document.getElementById(start) ? start : "home");
})();
