const burgerEl = document.querySelector('.icons-and-header__icon_burger');
export let mainContent = document.querySelector('.main');
export let footer = document.querySelector('.footer');
let closeEl = document.querySelector('.popup__burger');
export let popupMenu = document.querySelector('.popup');

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
// Для разрешения 1366px
if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1366px)');
    mq.addListener(screen);
    screen(mq);
}

function screen(mq) {
    if(mq.matches) {
        popupMenu.style.position = 'fixed'
        popupMenu.style.left = 0;
        popupMenu.style.top = 0;
        closeEl.style.display = 'none';
    }else {
        popupMenu.style.left = '-1000px';
    }
}