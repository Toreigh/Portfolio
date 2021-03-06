// $(document).ready(function(){
//     var btt = $('.back-to-top');

//     btt.on('click', function (e) {
//         $('html, body').animate ({
//             scrollTop: 0
//         }, 500);

//         e.preventDefault();
//     });

//     $(window).on('scroll', function() {
//         var self = $(this),
//             height = self.height(),
//             top = self.scrollTop();
        
//         if(top > height) {
//             if(!btt.is(':visible')) {
//                 btt.fadeIn();
//             }
//         } else {
//             btt.fadeOut ();
//         }

//     });
// });

// document.addEventListener('DOMContentLoaded', nav)
// function nav(){
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.main-nav');
//     burger.addEventListener('click', ()=>{
//         nav.classList.toggle('show')
//     })
// }


// BURGER MENU

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
   
    burger.addEventListener('click',()=>{
         // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
            link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }  
        });

        // Burger animation
        burger.classList.toggle('toggle');

    });

    // Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
         
    });
}

navSlide();