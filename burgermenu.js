const burger = document.querySelector('.btn-burger');
const menu = document.querySelector('.menu-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
})
menu.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
});

//carousel
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
});