document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news .card');
    const newsHeading = document.querySelector('.news h2');

    const showElement = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    };

    const observer = new IntersectionObserver(showElement, {
        threshold: 0.5
    });

    const elementsToObserve = [newsHeading, ...newsItems];
    elementsToObserve.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(item);
    });
});