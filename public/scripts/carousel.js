document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const list = document.querySelector('.list');

    function showNextSlide() {
        const firstItem = list.firstElementChild;
        list.appendChild(firstItem);
    }

    function showPrevSlide() {
        const lastItem = list.lastElementChild;
        list.prepend(lastItem);
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 5000);
});
