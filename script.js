// import Swiper JS
// import Swiper from 'swiper';
const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Горизонтально
    loop: true,
    slidesPerView: 3, // Сколько картинок видно сразу
    spaceBetween: 20, // Расстояние между ними

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});