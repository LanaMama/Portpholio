(function () {
    var mobileQuery = window.matchMedia('(max-width: 383px)');
    var burger = document.querySelector('.header__burger');
    var menu = document.getElementById('mobile-menu');
    var closeBtn = document.querySelector('.mobile-menu__close');

    if (!burger || !menu || !closeBtn) return;

    function closeMenu() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        if (!mobileQuery.matches) return;
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    burger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    menu.addEventListener('click', function (e) {
        if (!e.target.closest('.mobile-menu__panel')) {
            closeMenu();
        }
    });

    menu.querySelectorAll('.mobile-menu__link, .mobile-menu__button').forEach(function (el) {
        el.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            closeMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (!mobileQuery.matches) {
            closeMenu();
        }
    });
}());

(function () {
    if (!window.matchMedia('(max-width: 430px)').matches) return;

    var slider = document.querySelector('.portfolio__slider');
    var list = document.querySelector('.portfolio__list');
    var items = document.querySelectorAll('.portfolio__item');

    if (!slider || !list || items.length === 0) return;

    var current = 0;
    var total = items.length;
    var startX = 0;
    var isDrag = false;

    function goTo(index) {
        if (index < 0) index = 0;
        if (index > total - 1) index = total - 1;

        current = index;

        var slideW = items[0].offsetWidth + 16;
        list.style.transition = 'transform 0.35s ease';
        list.style.transform = 'translateX(-' + (current * slideW) + 'px)';
    }

    slider.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        isDrag = true;
        list.style.transition = 'none';
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
        if (!isDrag) return;

        isDrag = false;
        var diff = startX - e.changedTouches[0].clientX;

        if (diff > 40) {
            goTo(current + 1);
        } else if (diff < -40) {
            goTo(current - 1);
        } else {
            goTo(current);
        }
    });
}());

// ===== СВАЙП ДЛЯ CERTIFICATIONS =====
(function () {
    if (!window.matchMedia('(max-width: 430px)').matches) return;

    var grid = document.querySelector('.certifications_grid');
    var cards = document.querySelectorAll('.cert_card');

    if (!grid || cards.length === 0) return;

    var startX = 0;
    var isDrag = false;

    grid.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        isDrag = true;
    }, { passive: true });

    grid.addEventListener('touchend', function (e) {
        if (!isDrag) return;

        isDrag = false;
        var diff = startX - e.changedTouches[0].clientX;

        if (Math.abs(diff) > 40) {
            // Для горизонтального скролла, просто позволяем скролл
            // Можно добавить логику для snap, но пока оставим
        }
    });
}());

// ===== ИНИЦИАЛИЗАЦИЯ SWIPER ДЛЯ ПОРТФОЛИО =====
document.addEventListener('DOMContentLoaded', function () {
    var paginationNumber = document.querySelector('.portfolio .portfolio__pagination-number');
    var paginationLine = document.querySelector('.portfolio .portfolio__pagination-line');

    function getSlidesPerView(swiper) {
        var spv = swiper.params.slidesPerView;
        if (typeof spv !== 'number') {
            var breakpoint = swiper.currentBreakpoint;
            if (breakpoint && swiper.params.breakpoints && swiper.params.breakpoints[breakpoint]) {
                return swiper.params.breakpoints[breakpoint].slidesPerView || 1;
            }
            return 1;
        }
        return spv;
    }

    function updatePortfolioPagination(swiper) {
        if (!paginationNumber || !paginationLine) return;

        var slidesPerView = getSlidesPerView(swiper);
        var totalPages = Math.ceil(swiper.slides.length / slidesPerView) || 1;
        var currentPage = Math.ceil((swiper.activeIndex + 1) / slidesPerView) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        paginationNumber.textContent = String(currentPage).padStart(2, '0') + '/' + String(totalPages).padStart(2, '0');
        paginationLine.classList.remove('page-1', 'page-2');
        paginationLine.classList.add('page-' + Math.min(currentPage, 2));
    }

    var portfolioSwiper = new Swiper('.portfolio__slider .swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.portfolio__arrow_next',
            prevEl: '.portfolio__arrow_prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
            },
        },
        on: {
            init: function () {
                updatePortfolioPagination(this);
            },
            slideChange: function () {
                updatePortfolioPagination(this);
            },
            resize: function () {
                updatePortfolioPagination(this);
            },
        },
    });

    var partnersPaginationNumber = document.querySelector('.partners__pagination-number');
    var partnersPaginationLine = document.querySelector('.partners__pagination-line');

    function updatePartnersPagination(swiper) {
        if (!partnersPaginationNumber || !partnersPaginationLine) return;

        var slidesPerView = getSlidesPerView(swiper);
        var totalPages = Math.ceil(swiper.slides.length / slidesPerView) || 1;
        var currentPage = Math.ceil((swiper.activeIndex + 1) / slidesPerView) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        partnersPaginationNumber.textContent = String(currentPage).padStart(2, '0') + '/' + String(totalPages).padStart(2, '0');
        partnersPaginationLine.classList.remove('page-1', 'page-2', 'page-3');
        partnersPaginationLine.classList.add('page-' + currentPage);
    }

    var partnersSwiper = new Swiper('.partners__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.partners__arrow_next',
            prevEl: '.partners__arrow_prev',
        },
        on: {
            init: function () {
                updatePartnersPagination(this);
            },
            slideChange: function () {
                updatePartnersPagination(this);
            },
            resize: function () {
                updatePartnersPagination(this);
            },
        },
    });
});

