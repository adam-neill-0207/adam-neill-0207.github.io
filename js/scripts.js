document.addEventListener('DOMContentLoaded', function() {
    // Modal logic remains the same...

    // Gallery scrolling logic
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const gallery = document.querySelector('.gallery');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let scrollSpeed = 2;
    let autoScrollInterval;

    // Duplicate gallery items to enable infinite loop
    const galleryItems = document.querySelectorAll('.gallery-item');
    gallery.innerHTML += gallery.innerHTML; // Duplicate the gallery items

    // Adjust width of the gallery to fit both original and duplicated items
    gallery.style.width = `${galleryItems.length * 2 * galleryItems[0].clientWidth}px`;

    // Auto-scrolling function
    function autoScroll() {
        autoScrollInterval = setInterval(() => {
            galleryWrapper.scrollLeft += scrollSpeed;

            // If reached the end of the original items, reset to the beginning
            if (galleryWrapper.scrollLeft >= gallery.scrollWidth / 2) {
                galleryWrapper.scrollLeft = 0;
            }
        }, 20); // Adjust interval for smoother scrolling if needed
    }

    // Start auto-scrolling
    autoScroll();

    // Stop scrolling on hover over gallery or arrows
    galleryWrapper.addEventListener('mouseover', () => clearInterval(autoScrollInterval));
    galleryWrapper.addEventListener('mouseout', autoScroll);
    leftArrow.addEventListener('mouseover', () => clearInterval(autoScrollInterval));
    rightArrow.addEventListener('mouseover', () => clearInterval(autoScrollInterval));

    // Left arrow scrolling
    leftArrow.addEventListener('mouseover', () => {
        autoScrollInterval = setInterval(() => {
            galleryWrapper.scrollLeft -= 5;
            if (galleryWrapper.scrollLeft <= 0) {
                galleryWrapper.scrollLeft = gallery.scrollWidth / 2;
            }
        }, 20);
    });

    // Right arrow scrolling
    rightArrow.addEventListener('mouseover', () => {
        autoScrollInterval = setInterval(() => {
            galleryWrapper.scrollLeft += 5;
            if (galleryWrapper.scrollLeft >= gallery.scrollWidth / 2) {
                galleryWrapper.scrollLeft = 0;
            }
        }, 20);
    });

    // Reset scrolling on resize
    window.addEventListener('resize', () => {
        clearInterval(autoScrollInterval);
        autoScroll();
    });
});
