
import './styles/main.scss';
import verticalSlider from './js/verticalSlider';

import burgerMenu from './js/burgerMenu';
import preloader from './js/preloader';
import page03Roll from './js/page03Roll';
import featureTabs from './js/featureTabs';

window.addEventListener('DOMContentLoaded', function() {
    verticalSlider();
    burgerMenu();
    preloader();
    page03Roll();
    featureTabs();
});



// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

