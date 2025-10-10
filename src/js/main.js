// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Fade in elements on page load
    const fadeElements = document.querySelectorAll('header, section');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Hover effect for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'transform 0.3s ease';
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Typewriter effect for the introduction
    const introText = document.querySelector('#introduction p');
    if (introText) {
        const text = introText.textContent;
        introText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                introText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        typeWriter();
    }

    // Smooth scrolling with enhanced easing
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
            const distance = targetPosition - startPosition;
            let startTime = null;
            
            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, 1000);
                window.scrollTo(0, run);
                if (timeElapsed < 1000) requestAnimationFrame(animation);
            }
            
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            
            requestAnimationFrame(animation);
        });
    });

    // Interactive background effect (placeholder for now)
    const header = document.querySelector('header');
    header.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        header.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });

    // Project cards hover effect (assuming you'll add project cards)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        });
    });
});