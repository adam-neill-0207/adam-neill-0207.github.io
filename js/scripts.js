// Open modal buttons for About/Contact
const openModalBtns = document.querySelectorAll('.open-modal');

openModalBtns.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

// Close buttons for About/Contact and Media Modal
const closeModalBtns = document.querySelectorAll('.close');

closeModalBtns.forEach(button => {
    button.addEventListener('click', function() {
        const modal = button.closest('.modal'); // Get the closest modal related to this button
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            if (modal.id === 'media-modal') {
                const mediaContainer = document.getElementById('media-container');
                mediaContainer.innerHTML = ''; // Remove media to stop playing
            }
        }, 400);
    });
});

// Open enlarged media in modal
const mediaBoxes = document.querySelectorAll('.image-box img, .image-box video');

mediaBoxes.forEach(media => {
    media.addEventListener('click', function() {
        const modal = document.getElementById('media-modal');
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = ''; // Clear previous content

        let newMedia;

        if (media.tagName === 'IMG') {
            // If clicked media is an image, create an image element
            newMedia = document.createElement('img');
            newMedia.src = media.src;
        } else if (media.tagName === 'VIDEO') {
            // If clicked media is a video, create a video element
            newMedia = document.createElement('video');
            newMedia.src = media.src;
            newMedia.controls = true;
            newMedia.autoplay = true; // Automatically play the video when modal opens
        }

        mediaContainer.appendChild(newMedia);
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modal = event.target;
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            if (modal.id === 'media-modal') {
                const mediaContainer = document.getElementById('media-container');
                mediaContainer.innerHTML = ''; // Remove media to stop playing
            }
        }, 400);
    }
});
