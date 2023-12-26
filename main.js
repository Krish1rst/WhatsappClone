// const header=document.querySelector(".header");
// const routes=document.querySelectorAll(".nav-route");
// const section=document.querySelectorAll(".section");

// routes.addEventListener("click",function(e){
//   console.log(e.target.dataset.id);
//   const id=e.target.dataset.id;
//   if(id){
//   routes.forEach(function(link){
//     link.classList.remove("active");
//     e.target.classList.add("active");
//   })


//   }
// })

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
