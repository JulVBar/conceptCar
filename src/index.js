
import './styles/main.scss';
import verticalSlider from './js/verticalSlider';

import burgerMenu from './js/burgerMenu';
import preloader from './js/preloader';

window.addEventListener('DOMContentLoaded', function() {
    verticalSlider();
    burgerMenu();
    preloader();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

