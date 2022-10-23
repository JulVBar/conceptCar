function page03Roll() {

    const rollBtn = document.querySelector('.page03-page-roll-btn');
    const pageBlockNum = document.querySelectorAll('.page03-page-roll-page');
    const pageBlocks = document.querySelectorAll('.page03-block');
    const roundBtns = document.querySelectorAll('.page03-round-btn');

    function pageRollToggle() {
        if (pageBlockNum.length > 1) {
            pageBlockNum.forEach(btn => {
                btn.classList.toggle('active');
            })
        }
        if (pageBlocks.length > 1) {
            pageBlocks.forEach(btn => {
                btn.classList.toggle('active');
            })
        }
        if (roundBtns.length > 1) {
            roundBtns.forEach(btn => {
                btn.classList.toggle('active');
            })
        }
        
    }

    if (rollBtn) rollBtn.addEventListener('click', pageRollToggle);
}

export default page03Roll;