const button = document.querySelector('button');

const page = document.querySelector('.popup-page');

const close = document.querySelector('.popup-window button');

const area = document.querySelector('.popup-page');

button.addEventListener('click', ()=> {
    page.style.display = 'block';
})

close.addEventListener('click', ()=> {
    page.style.display = 'none';   
})

// area.addEventListener('click', ()=> {
//     page.style.display = 'none';       
// })