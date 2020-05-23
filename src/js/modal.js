import { mainContent, footer } from './popup.js';

const modalEl = document.querySelector('.modal');
modalEl.style.display = 'none';

const closeModalEl = document.querySelector('.modal__icon')
const commercialLink = document.querySelector('.warn__link');
const modalHeaderEl = document.querySelector('.modal__promo-text');
let modalHiddenInput = document.querySelectorAll('.modal__input_hidden');

const orderCallBtn = document.querySelectorAll('.prices__btn');


const listenerFuncCommercial = function (ev) {
    ev.preventDefault();
    modalHeaderEl.textContent = 'Обратная связь';

    mainContent.style.display = 'none';
    footer.style.display = 'none';
    modalEl.style.display = 'block';
}
commercialLink.addEventListener('click', listenerFuncCommercial);

closeModalEl.addEventListener('click', function (ev) {
    modalEl.style.display = 'none';
    mainContent.style.display = 'block';
    footer.style.display = 'flex';
});
for (const el of orderCallBtn) {
    el.addEventListener('click', function (ev) {
        mainContent.style.display = 'none';
        footer.style.display = 'none';
        modalEl.style.display = 'block';
        for (let el of modalHiddenInput) {
            el.style.display = 'none'
        }


    });
}
