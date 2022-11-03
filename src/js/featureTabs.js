function featureTabs() {

    const features = document.querySelectorAll('.page04-feature-line');
    const slide4 = document.querySelector('#slide4');
    const above = document.querySelectorAll('.page04-feature-line-above');
    const under = document.querySelectorAll('.page04-feature-line-under');
    
    slide4.addEventListener('click', (e) => {
        if (e.target?.classList.contains('page04-feature-dot')) {
            features.forEach(el => el.classList.remove('animate-line'));
            (e.target?.nextElementSibling).classList.add('animate-line');

            above.forEach(el => el.classList.remove('animate-line-content'));
            under.forEach(el => el.classList.remove('animate-line-content'));
            (e.target?.nextElementSibling?.firstElementChild).classList.add('animate-line-content');
            (e.target?.nextElementSibling?.lastElementChild).classList.add('animate-line-content');
        }
    })
}

export default featureTabs;