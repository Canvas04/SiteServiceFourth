import { mainContent, footer, popupMenu } from './popup.js';

let modalEl = document.querySelector('.modal');
modalEl.style.position = 'absolute';
modalEl.classList.add('modal_position-commerical-md-before')

const closeModalEl = document.querySelector('.modal__icon')
const commercialLink = document.querySelector('.warn__link');
const modalHeaderEl = document.querySelector('.modal__promo-text');
let modalHiddenInput = document.querySelectorAll('.modal__input_hidden');

const orderCallBtn = document.querySelectorAll('.prices__btn');


const listenerFuncCommercial = function (ev) {
    ev.preventDefault();
    modalHeaderEl.textContent = 'Обратная связь';

    for (let el of modalHiddenInput) {
        el.style.display = 'block';

    }
    mainContent.style.display = 'none';
    footer.style.display = 'none';
    modalEl.classList.remove('modal_position-commerical-md-before');
    modalEl.classList.add('modal_position-commerical-md-after');

}
commercialLink.addEventListener('click', listenerFuncCommercial);




closeModalEl.addEventListener('click', function (ev) {
    modalEl.classList.remove('modal_position-commerical-md-after');
    modalEl.classList.remove('modal_position-commerical-md-before')
    modalEl.classList.add('modal_position-commercial-md-after-animation');

    mainContent.style.display = 'block';
    footer.style.display = 'flex';
});
for (const el of orderCallBtn) {
    el.addEventListener('click', function (ev) {
        modalHeaderEl.textContent = 'Заказать звонок';
        mainContent.style.display = 'none';
        footer.style.display = 'none';

        ('modal_position-commerical-md-before');
        modalEl.classList.add('modal_position-commerical-md-after');
        modalEl.style.animationFillMode = 'forwards';
        modalEl.style.height = '100%'

        for (let el of modalHiddenInput) {
            el.style.display = 'none'
        }


    });
}

// Для разрешения 1366px

if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1366px)');
    mq.addListener(screenWidth);
    screenWidth(mq);
}
function screenWidth(mq) {
    if (mq.matches) {
        modalEl.classList.add('modal_position-commerical-lg-before')
        for (const el of orderCallBtn) {
            el.addEventListener('click', function (ev) {
                modalEl.style.display = 'block';
                modalEl.style.position = 'absolute';
                modalEl.style.right = 0;
                modalEl.style.top = 0;
                mainContent.style.display = 'block';
                mainContent.style.opacity = 0.01;
                footer.style.display = 'block';
                footer.style.opacity = 0.01;
                popupMenu.style.opacity = 0.01;
                document.querySelector('input[type=tel]').focus()


            });

        }
        closeModalEl.addEventListener('click', function (ev) {

            // modalEl.style.left = '-1000px';
            // modalEl.style.transitionProperty = 'left';
            // modalEl.style.transitionDuration = '2s';

            mainContent.style.opacity = 1;
            footer.style.opacity = 1;
            popupMenu.style.opacity = 1;
        });
        commercialLink.addEventListener('click', function (ev) {
            ev.preventDefault();
            commercialLink.removeEventListener('click', listenerFuncCommercial)
            modalEl.classList.remove('modal_position-commerical-md-after');
            modalEl.classList.remove('modal_position-commerical-md-before');
            modalEl.classList.add('modal_position-commerical-lg-before');
            modalEl.classList.add('modal_position-commerical-lg-after')
            modalHeaderEl.textContent = 'Обратная связь';
            mainContent.style.display = 'block';
            mainContent.style.opacity = 0.01;
            footer.style.display = 'block';
            footer.style.opacity = 0.01;
            popupMenu.style.opacity = 0.01;
            document.querySelector('input[type=text]').focus();
        })
    }
}