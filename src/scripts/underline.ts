function initUnderlines() {
    const els = document.querySelectorAll('[data-underline-hl]:not(.drawn)');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('drawn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initUnderlines);
document.addEventListener('astro:page-load', initUnderlines);