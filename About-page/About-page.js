const btns = document.querySelectorAll('.article-btn');
const article = document.querySelector('.articles-container')
const texts = document.querySelectorAll('.article-text');


article.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if(id) {
        btns.forEach((btn) => {
            btn.classList.remove('article-toggle');
            e.target.classList.add('article-toggle');
        });

        texts.forEach((text) => {
            text.classList.remove('article-toggle')
        })
        const element = document.getElementById(id);
        element.classList.add('article-toggle')
    }
})

