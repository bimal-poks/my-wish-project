// ─── Active sidebar link on scroll ──────────────────────────────
const sections = document.querySelectorAll('.docs-content h1, .docs-content h2');
const sidebarLinks = document.querySelectorAll('.sidebar__link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sidebarLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.sidebar__link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { rootMargin: '0px 0px -70% 0px' });

sections.forEach(section => observer.observe(section));

// ─── Icon sidebar active item ────────────────────────────────────
document.querySelectorAll('.icon-sidebar__item').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelectorAll('.icon-sidebar__item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});