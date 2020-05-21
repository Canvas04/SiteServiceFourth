const burgerEl = document.querySelector('.icons-and-header__icon_burger');
export const mainContent = document.querySelector('.main');
export const footer = document.querySelector('.footer');
const closeEl = document.querySelector('.popup__burger');
const popupMenu = document.querySelector('.popup');

popupMenu.style.position = 'absolute';
popupMenu.style.left = '-1000px';

burgerEl.addEventListener('click', function (ev) {
    ev.preventDefault();
    popupMenu.style.left = '0px';
    popupMenu.style.top = '0px';
    mainContent.style.display = 'none';
    footer.style.display = 'none';
});

closeEl.addEventListener('click', function (ev) {

    popupMenu.style.left = '-1000px';
    popupMenu.style.transitionProperty = 'left';
    popupMenu.style.transitionDuration = '2s';
    mainContent.style.display = 'block';
    footer.style.display = 'flex';

});

// Для разрешения 768px
if (matchMedia) {
    const mq = window.matchMedia('(min-width: 768px)');
    mq.addListener(screenTest);
    screenTest(mq);
}
function screenTest(mq) {
    if (mq.matches) {

        burgerEl.addEventListener('click', function (ev) {
            ev.preventDefault();
            popupMenu.style.left = '0px';
            popupMenu.style.top = '0px';
            mainContent.style.display = 'block';
            mainContent.style.opacity = 0.07;
            footer.style.display = 'block';
            footer.style.opacity = 0.07;
        });

        closeEl.addEventListener('click', function (ev) {

            popupMenu.style.left = '-1000px';
            popupMenu.style.transitionProperty = 'left';
            popupMenu.style.transitionDuration = '2s';
            mainContent.style.display = 'block';
            mainContent.style.opacity = 1;
            footer.style.display = 'flex';
            footer.style.opacity = 1;
        })
    }
}
