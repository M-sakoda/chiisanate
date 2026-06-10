const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-animated');
            imgObserver.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px -15% 0px' // 画面下から15%入ったら発火
});

const flexContainer = document.querySelector('.contents-detail-flex');
if (flexContainer) {
    imgObserver.observe(flexContainer);
}