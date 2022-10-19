console.log('Script loaded');

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Card was clicked');
        card.classList.toggle('checked');
        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('checked');
            }
        });
    });
});