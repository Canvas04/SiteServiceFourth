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

for (let el of orderCallBtn) {
    el.addEventListener('click', function (ev) {



        modalHeaderEl.textContent = 'Заказать звонок';
        mainContent.style.display = 'none';
        footer.style.display = 'none';
        modalEl.classList.remove('modal_position-commercial-md-after-animation');

        modalEl.classList.add('modal_position-commerical-md-after');
        modalEl.style.animationFillMode = 'forwards';


        for (let el of modalHiddenInput) {
            el.style.display = 'none'
        }





    })
}


commercialLink.addEventListener('click', listenerFuncCommercial);




closeModalEl.addEventListener('click', function (ev) {
    modalEl.classList.remove('modal_position-commerical-md-after');
    modalEl.classList.remove('modal_position-commerical-md-before')
    modalEl.classList.add('modal_position-commercial-md-after-animation');


    mainContent.style.display = 'block';
    footer.style.display = 'flex';
});






// Для разрешения 1366px

if (matchMedia) {
    const mq = window.matchMedia('(min-width: 1366px)');
    mq.addListener(screenWidth);
    screenWidth(mq);
}
function screenWidth(mq) {
    if (mq.matches) {
        modalEl.classList.add('modal_position-commerical-lg-before');
        modalEl.classList.remove('modal_position-commerical-md-after');
        modalEl.classList.remove('modal_position-commercial-md-after-animation');
        modalEl.classList.remove('modal_position-commerical-md-before');
        for (let el of orderCallBtn) {

            el.addEventListener('click', function (ev) {
                modalEl.classList.remove('modal_position-commerical-lg-before')
                modalEl.classList.add('modal_position-commerical-lg-after');
                popupMenu.style.opacity = 0.05;
                mainContent.style.display = 'block';
                mainContent.style.position = 'fixed'
                mainContent.style.opacity = 0.05;

                footer.style.display = 'block';
                footer.style.position = 'fixed';
                footer.style.opacity = 0.05;
                document.querySelector('input[type=tel]').focus();
            })
        }



    }
}