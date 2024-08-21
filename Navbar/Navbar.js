
let brandContainer = document.querySelector('.brand-container');

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    //alert('window activated')

    brandContainer.classList.toggle('shadow', window.scrollY > 200)
});

window.addEventListener('scroll', () => {
    //alert('window activated')

    header.classList.toggle('shadow', window.scrollY > 200)
});