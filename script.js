// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close lightbox with Escape key; second Escape closes full gallery modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (document.getElementById('lightbox').classList.contains('active')) {
                closeLightbox();
            } else {
                closeFullGallery();
            }
        }
    });
});

// Gallery lightbox
function openLightbox(item) {
    const src = item.querySelector('img').src;
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    // Restore scroll only if full gallery is also closed
    if (!document.getElementById('full-gallery-modal').classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

// Full gallery modal
function openFullGallery() {
    document.getElementById('full-gallery-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullGallery() {
    document.getElementById('full-gallery-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleFullGalleryClick(event) {
    if (event.target === document.getElementById('full-gallery-modal')) {
        closeFullGallery();
    }
}
