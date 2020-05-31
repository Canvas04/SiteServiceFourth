import { mainContent, footer, popupMenu } from './popup.js';

let modalEl = document.querySelector('.modal');
modalEl.style.position = 'fixed';
modalEl.classList.add('modal_position-commerical-md-before');

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
    modalEl.classList.remove('modal_position-commercial-md-after-animation');
    modalEl.classList.remove('modal_position-commerical-lg-before');
    modalEl.classList.remove('modal_position-commerical-lg-after');
    modalEl.classList.remove('modal_position-commerical-close-after');
    commercialLink.removeEventListener('click', HandlerLinkLgOpen);
}

const listenerFuncBtn = function (ev) {
    modalHeaderEl.textContent = 'Заказать звонок';
    mainContent.style.display = 'none';
    footer.style.display = 'none';
    modalEl.classList.remove('modal_position-commercial-md-after-animation');
    modalEl.classList.add('modal_position-commerical-md-after');
    for (let el of modalHiddenInput) {
        el.style.display = 'none'
    }
    modalEl.classList.remove('modal_position-commerical-lg-before');
    modalEl.classList.remove('modal_position-commerical-lg-after');
    modalEl.classList.remove('modal_position-commerical-close-after');
    for (let el of orderCallBtn) {
        el.removeEventListener('click', HandlerBtnLgOpen);
    }
}

const listenerFuncClose = function (ev) {
    modalEl.classList.remove('modal_position-commerical-md-after');
    modalEl.classList.remove('modal_position-commerical-md-before')
    modalEl.classList.add('modal_position-commercial-md-after-animation');
    modalEl.classList.remove('modal_position-commerical-lg-before');
    modalEl.classList.remove('modal_position-commerical-lg-after');
    modalEl.classList.remove('modal_position-commerical-close-after');
    mainContent.style.display = 'block';
    footer.style.display = 'flex';
    closeModalEl.removeEventListener('click', HandlerLgClose);
}






// Для разрешения 1366px

// if (matchMedia) {
//     const mq = window.matchMedia('(min-width: 1366px)');
//     mq.addListener(screenWidth);
//     screenWidth(mq);

// }
// function screenWidth(mq) {
//     if (mq.matches) {





//     }
// }

const HandlerBtnLgOpen = function (ev) {
    ev.preventDefault();
    modalEl.classList.remove('modal_position-commerical-close-after');
    modalEl.classList.remove('modal_position-commerical-md-after');
    modalEl.classList.add('modal_position-commerical-lg-after');
    modalEl.style.position = 'fixed'
    
    popupMenu.style.opacity = 0.05;
    mainContent.style.display = 'block';
    mainContent.style.position = 'fixed';
    mainContent.style.opacity = 0.05;

    footer.style.display = 'block';
    footer.style.position = 'fixed';
    footer.style.opacity = 0.05;
    document.querySelector('input[type=tel]').focus();
    for (let el of orderCallBtn) {
        el.removeEventListener('click', listenerFuncBtn);
    }
}

let HandlerLinkLgOpen = function (ev) {
    ev.preventDefault();
    modalEl.classList.remove('modal_position-commerical-close-after');
    modalEl.classList.remove('modal_position-commerical-md-after');
    modalEl.classList.add('modal_position-commerical-lg-after');
    popupMenu.style.opacity = 0.05;
    mainContent.style.display = 'block';
    mainContent.style.position = 'fixed'
    mainContent.style.opacity = 0.05;

    footer.style.display = 'block';
    footer.style.position = 'fixed';
    footer.style.opacity = 0.05;
    document.querySelector('input[type=text]').focus();
    commercialLink.removeEventListener('click', listenerFuncCommercial);
}

let HandlerLgClose = function (ev) {
    modalEl.classList.remove('modal_position-commerical-lg-before');
    modalEl.classList.remove('modal_position-commerical-lg-after');
    modalEl.classList.remove('modal_position-commercial-md-after-animation');
    modalEl.classList.add('modal_position-commerical-close-after');
    mainContent.style.display = 'block';
    mainContent.style.position = 'static';
    footer.style.display = 'flex';
    mainContent.style.opacity = 1;
    footer.style.opacity = 1;
    footer.style.position = 'static';
    popupMenu.style.opacity = 1;
    closeModalEl.removeEventListener('click', listenerFuncClose);
}



let timerId = setTimeout(function resize() {
    if (window.matchMedia("(min-width: 1366px)").matches) {

        modalEl.classList.remove('modal_position-commerical-md-after');
        modalEl.classList.remove('modal_position-commercial-md-after-animation');
        modalEl.classList.remove('modal_position-commerical-md-before');
        modalEl.classList.add('modal_position-commerical-lg-before');
        for (let el of orderCallBtn) {
            el.addEventListener('click', HandlerBtnLgOpen);
        };
        commercialLink.addEventListener('click', HandlerLinkLgOpen);
        closeModalEl.addEventListener('click', HandlerLgClose);


    } else {

        for (let el of orderCallBtn) {
            el.addEventListener('click', listenerFuncBtn);

        };
        commercialLink.addEventListener('click', listenerFuncCommercial);
        closeModalEl.addEventListener('click', listenerFuncClose);
    }
    timerId = setTimeout(resize, 0);
}, 0);