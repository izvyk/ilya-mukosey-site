window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
        let span = card.querySelector('a span');
        span.addEventListener('mouseenter', _ => {
            card.classList.add('active');
            document.querySelectorAll('.menuCategories a').forEach(cat => {
                // console.log(card.dataset.categories, cat.dataset.category);
                if (card.dataset.categories.includes(cat.dataset.category)) {
                    cat.classList.add('active');
                }
            });
        });
        span.addEventListener('mouseleave', _ => {
            card.classList.remove('active');
            document.querySelectorAll('.menuCategories a').forEach(cat => {
                if (card.dataset.categories.includes(cat.dataset.category)) {
                    cat.classList.remove('active');
                }
            });
        });
    });

    document.querySelectorAll('.menuCategories a').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());

        a.addEventListener('mouseenter', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.add('active'));
        });
        a.addEventListener('mouseout', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.remove('active'));
        });

        a.addEventListener('focus', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.add('active'));
        });
        a.addEventListener('focusout', _ => {
            document.querySelectorAll(`.card[data-categories*=${a.dataset.category}]`).forEach(card => card.classList.remove('active'));
        });
    })
});