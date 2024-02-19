let cardAll = document.querySelectorAll('.card');


cardAll.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.add('active');
    });
});