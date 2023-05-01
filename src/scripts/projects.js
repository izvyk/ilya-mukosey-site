window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        let span = card.querySelector('a span');
        span.addEventListener('mouseenter', _ => {
            document.querySelectorAll('.menuCategories a').forEach(menuItem => {
                if (card.dataset.categories.includes(menuItem.dataset.category)) {
                    menuItem.classList.add('selected');
                }
            });
        });
        span.addEventListener('mouseleave', _ => {
            document.querySelectorAll('.menuCategories a').forEach(menuItem => {
                if (card.dataset.categories.includes(menuItem.dataset.category)) {
                    menuItem.classList.remove('selected');
                }
            });
        });
    });

    document.querySelectorAll('.menuCategories a').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());

        a.addEventListener('mouseenter', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.add('selected'));
        });
        a.addEventListener('mouseout', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.remove('selected'));
        });

        a.addEventListener('focus', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.add('selected'));
        });
        a.addEventListener('focusout', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.remove('selected'));
        });
    })
});