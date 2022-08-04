function burgerMenu() {
    const burger = document.querySelector('.burger-bar');

    burger.addEventListener('click', () => {
        const overlay_navigation = document.querySelector('.overlay-navigation'),
            nav_item_1 = overlay_navigation.querySelector('nav li:nth-of-type(1)'),
            nav_item_2 = overlay_navigation.querySelector('nav li:nth-of-type(2)'),
            nav_item_3 = overlay_navigation.querySelector('nav li:nth-of-type(3)'),
            nav_item_4 = overlay_navigation.querySelector('nav li:nth-of-type(4)'),
            nav_item_5 = overlay_navigation.querySelector('nav li:nth-of-type(5)'),
            top_bar = document.querySelector('.bar-top'),
            middle_bar = document.querySelector('.bar-middle');
    
        overlay_navigation.classList.toggle('overlay-active');

        if (overlay_navigation.classList.contains('overlay-active')) {
            top_bar.classList.remove('animate-out-top-bar');
            top_bar.classList.add('animate-top-bar');
            middle_bar.classList.remove('animate-out-middle-bar');
            middle_bar.classList.add('animate-middle-bar');
            overlay_navigation.classList.remove('overlay-slide-up');
            overlay_navigation.classList.add('overlay-slide-down');
            nav_item_1.classList.remove('slide-in-nav-item-reverse');
            nav_item_1.classList.add('slide-in-nav-item');
            nav_item_2.classList.remove('slide-in-nav-item-delay-1-reverse');
            nav_item_2.classList.add('slide-in-nav-item-delay-1');
            nav_item_3.classList.remove('slide-in-nav-item-delay-2-reverse');
            nav_item_3.classList.add('slide-in-nav-item-delay-2');
            nav_item_4.classList.remove('slide-in-nav-item-delay-3-reverse');
            nav_item_4.classList.add('slide-in-nav-item-delay-3');
            nav_item_5.classList.remove('slide-in-nav-item-delay-4-reverse');
            nav_item_5.classList.add('slide-in-nav-item-delay-4');
        } else {
            top_bar.classList.add('animate-out-top-bar');
            top_bar.classList.remove('animate-top-bar');
            middle_bar.classList.add('animate-out-middle-bar');
            middle_bar.classList.remove('animate-middle-bar');
            overlay_navigation.classList.add('overlay-slide-up');
            overlay_navigation.classList.remove('overlay-slide-down');
            nav_item_1.classList.add('slide-in-nav-item-reverse');
            nav_item_1.classList.remove('slide-in-nav-item');
            nav_item_2.classList.add('slide-in-nav-item-delay-1-reverse');
            nav_item_2.classList.remove('slide-in-nav-item-delay-1');
            nav_item_3.classList.add('slide-in-nav-item-delay-2-reverse');
            nav_item_3.classList.remove('slide-in-nav-item-delay-2');
            nav_item_4.classList.add('slide-in-nav-item-delay-3-reverse');
            nav_item_4.classList.remove('slide-in-nav-item-delay-3');
            nav_item_5.classList.add('slide-in-nav-item-delay-4-reverse');
            nav_item_5.classList.remove('slide-in-nav-item-delay-4');
        }
        });
}

export default burgerMenu;