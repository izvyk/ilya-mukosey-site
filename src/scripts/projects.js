window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div.card').forEach(item => {
        let span = item.querySelector('a span');
        span.addEventListener('mouseenter', _ => {
            item.classList.add('active');
        });
        span.addEventListener('mouseleave', _ => {
            item.classList.remove('active');
        });
    });
});