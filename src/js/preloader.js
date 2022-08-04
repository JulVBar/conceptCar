function preloader() {

    document.body.onload = function() {

        setTimeout(function() {
            let preloader = document.querySelector('.preloader');
            let sliderPicture = document.querySelector('.slider-wrapper');
    
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
                sliderPicture.classList.add('ready');
            }

            document.body.classList.add('scroll');

        }, 1000);
    };
}

export default preloader;