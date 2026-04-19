(function () {
    var navbar = document.querySelector('.navbar');

    if (!navbar) {
        return;
    }

    var updateNavbarState = function () {
        if (window.scrollY > 36) {
            navbar.classList.add('is-compact');
        } else {
            navbar.classList.remove('is-compact');
        }
    };

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });
    window.addEventListener('resize', updateNavbarState);
})();
