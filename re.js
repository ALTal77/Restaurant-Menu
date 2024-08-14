let navLinks = document.querySelectorAll('.nav-link');
let navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
});
});
