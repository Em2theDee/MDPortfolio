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

