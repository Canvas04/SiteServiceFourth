let hiddenEl = document.querySelectorAll('.logo-of-companies__el_click');
for (const el of hiddenEl) {
    el.style.display = 'none'
}
let linkHidden = document.querySelector('.logo-of-companies__link-block_up');
linkHidden.style.display = 'none';

let linkShow = document.querySelector('.logo-of-companies__link_down');
linkShow.addEventListener('click', (ev) => {
    ev.preventDefault();
    for (const el of hiddenEl) {
        el.style.display = 'flex';
        el.style.justifyContent = 'space-between';
        
    }

    linkShow.style.display = 'none';
    linkHidden.style.display = 'block';
});
linkHidden.addEventListener('click', (ev) => {
    ev.preventDefault();
    linkHidden.style.display = 'none';
    linkShow.style.display = 'block';
    for (const el of hiddenEl) {
        el.style.display = 'none';
    }
})

// Прописываю логику для второго свайпера
let hiddenElRepair = document.querySelectorAll('.services__el_click');
for (const el of hiddenElRepair) {
    el.style.display = 'none';
}
let linkHiddenSecond = document.querySelector('.services__link-block_down');
linkHiddenSecond.addEventListener('click', (ev) => {
    ev.preventDefault();
    linkHiddenSecond.style.display ='none';
    linkShowSecond.style.display = 'block';
    for (const el of hiddenElRepair) {
        el.style.display = 'flex';
    }
})

let linkShowSecond = document.querySelector('.services__link_up');
let linkShowSecondBlock = document.querySelector('.services__link-block_down')
linkShowSecond.style.display = 'none';
linkShowSecond.addEventListener('click', (ev) => {
    ev.preventDefault();
    for (const el of hiddenElRepair) {
        el.style.display = 'none';
        
        }
linkShowSecondBlock.style.display = 'none';
    linkShowSecond.style.display = 'none';
    linkHiddenSecond.style.display = 'block';
});