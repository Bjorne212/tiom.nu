(function () {
    var navbar = document.querySelector('.navbar');
    var navLinks = navbar ? navbar.querySelector('.nav-links') : null;
    var navToggle;

    if (!navbar) {
        return;
    }

    if (navLinks) {
        navbar.classList.add('js-nav-enhanced');
        if (!navLinks.id) {
            navLinks.id = 'primary-navigation';
        }

        navToggle = document.createElement('button');
        navToggle.type = 'button';
        navToggle.className = 'nav-toggle';
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-controls', navLinks.id);
        navToggle.setAttribute('aria-label', 'Öppna meny');
        navToggle.innerHTML = '<span class="nav-toggle-line"></span><span class="nav-toggle-line"></span><span class="nav-toggle-line"></span>';
        navLinks.parentNode.insertBefore(navToggle, navLinks);
    }

    var closeMenu = function () {
        if (!navToggle) {
            return;
        }

        navbar.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Öppna meny');
    };

    var toggleMenu = function () {
        if (!navToggle) {
            return;
        }

        var isOpen = navbar.classList.toggle('menu-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
    };

    var updateNavbarState = function () {
        if (window.scrollY > 36) {
            navbar.classList.add('is-compact');
        } else {
            navbar.classList.remove('is-compact');
        }

        if (window.innerWidth > 768) {
            closeMenu();
        }
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);

        navLinks.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                closeMenu();
            }
        });

        document.addEventListener('click', function (event) {
            if (!navbar.classList.contains('menu-open')) {
                return;
            }

            if (!navbar.contains(event.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState, { passive: true });
    window.addEventListener('resize', updateNavbarState);
})();

// --- Under utveckling popup ---
document.addEventListener('DOMContentLoaded', function () {
    var devPopup = document.getElementById('dev-popup');
    if (devPopup) {
        var closePopup = function () {
            devPopup.setAttribute('aria-hidden', 'true');
            devPopup.hidden = true;
            document.body.classList.remove('popup-open');
        };

        var openPopup = function () {
            devPopup.hidden = false;
            requestAnimationFrame(function () {
                devPopup.setAttribute('aria-hidden', 'false');
                document.body.classList.add('popup-open');
            });
        };

        openPopup();

        devPopup.querySelectorAll('[data-action="close-popup"]').forEach(function (button) {
            button.addEventListener('click', closePopup);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && devPopup.getAttribute('aria-hidden') === 'false') {
                closePopup();
            }
        });
    }
});
