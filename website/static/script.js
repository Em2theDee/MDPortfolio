// scripts.js

const cursor = document.querySelector('.custom-cursor');

function updateCursorPosition(event) {
    const cursorSize = 16; // Set the size of the cursor
    const cursorOffsetX = cursorSize / 1;
    const cursorOffsetY = cursorSize / 1;
    
    cursor.style.left = event.clientX - cursorOffsetX + 'px';
    cursor.style.top = event.clientY - cursorOffsetY + 'px';
}

document.addEventListener('mousemove', updateCursorPosition);

function handleWindowResize() {
    const height = window.innerHeight;
    const screenHeightElements = document.querySelectorAll('.screen-height');

    for (const element of screenHeightElements) {
        element.style.height = height + 'px';
    }
}

window.addEventListener('resize', handleWindowResize);

document.addEventListener("DOMContentLoaded", function() {
    var frontContainer = document.getElementById('front-container');
    var imageUrl = 'Images/main comp.gif';

    // Create an intersection observer
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Load the image when it comes into view
                loadImage(imageUrl, function() {
                    frontContainer.style.backgroundImage = 'url(' + imageUrl + ')';
                });
                observer.unobserve(frontContainer);
            }
        });
    }, { rootMargin: '0px 0px 100px 0px' }); // Adjust rootMargin as needed

    // Start observing the element
    observer.observe(frontContainer);
});

function loadImage(url, callback) {
    var img = new Image();
    img.onload = function() {
        callback();
    };
    img.src = url;
}