document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.nav-link');

  // إغلاق القائمة عند النقر على أيقونة التبديل
  navbarToggler.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      const collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      collapse.hide();
    }
  });

  // إغلاق القائمة عند النقر على أي رابط
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      if (window.innerWidth < 992) { // 992 هو حجم الشاشة لـ Bootstrap lg
        const collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        collapse.hide();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      themeIcon.classList.remove('bi-moon');
      themeIcon.classList.add('bi-sun');
    }
  }

  themeToggle.addEventListener('click', function() {
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeIcon.classList.remove('bi-sun');
      themeIcon.classList.add('bi-moon');
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('bi-moon');
      themeIcon.classList.add('bi-sun');
      localStorage.setItem('theme', 'dark');
    }
  });
});