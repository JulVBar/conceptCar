function verticalSlider() {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        mousewheel: true,
        // allowTouchMove:false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    const slides = document.querySelectorAll('.swiper-slide');
    const arrows = document.querySelectorAll(".scroll-container");
    const exploreBtns = document.querySelectorAll(".page01-link");
    const firstSlide = document.querySelector("#first-slide");

    swiper.on('slideChange', function () {
        firstSlide.classList.remove('start-animation');
        slides.forEach(slide => slide.firstElementChild?.classList.remove("animation"));
        slides[swiper.activeIndex].firstElementChild?.classList.add("animation");

        if (swiper.activeIndex === 3) {
            document.querySelectorAll('.page04-feature-line').forEach(el => el.classList.remove('animate-line'))
            document.querySelector('.page04-feature-line--wheel').classList.add('animate-line');
            document.querySelector('.page04-feature-line--wheel')?.firstElementChild.classList.add('animate-line-content');
            document.querySelector('.page04-feature-line--wheel')?.lastElementChild.classList.add('animate-line-content');
        }
    });
    
    // swiper.slideTo(index, speed, runCallbacks)

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            swiper.slideNext()
        })
    })

    exploreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            swiper.slideNext()
        })
    })
}

export default verticalSlider;
