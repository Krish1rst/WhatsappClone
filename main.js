

document.addEventListener('DOMContentLoaded', function() {
  const navRoutes = document.querySelectorAll('.nav-route');
  const sections = document.querySelectorAll('.section');

  navRoutes.forEach((route, index) => {
    route.addEventListener('click', function(event) {
      event.preventDefault();
      navRoutes.forEach((r) => r.classList.remove('active'));
      sections.forEach((s) => s.classList.remove('active'));
      route.classList.add('active');
      sections[index].classList.add('active');
    });
  });
  
});
