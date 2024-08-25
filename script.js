//Hidden/Show Section
document.addEventListener('DOMContentLoaded', () => {
    const hiddenData = document.getElementById('hiddenData');
    const hiddenSection = document.getElementById('hiddenSection');

    hiddenData.addEventListener('click', () => {
        if(hiddenSection.classList.contains('hidden')) {
            hiddenSection.classList.remove('hidden');
            hiddenData.textContent = 'Hide';
        } else {
            hiddenSection.classList.add('hidden');
            hiddenData.textContent = 'Read more';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.skill-list button');
    const contentItems = document.querySelectorAll('.content-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.getAttribute('data-content');

            // Hide all content items
            contentItems.forEach(item => {
                item.style.display = 'none';
            });

            // Show the selected content item
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        });
    });
});


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Designer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Designer", "App Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});