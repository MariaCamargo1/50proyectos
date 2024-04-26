const catCards = document.querySelectorAll('.cat-card');
catCards.forEach(card => {
    card.addEventListener('click', () => {
        catCards.forEach(card => {
            card.classList.remove('active');
        });
        card.classList.add('active');
    });
});
