// scripts.js

function handleWindowResize() {
    const height = window.innerHeight;
    const screenHeightElements = document.querySelectorAll('.screen-height');

    for (const element of screenHeightElements) {
        element.style.height = height + 'px';
    }
}

window.addEventListener('resize', handleWindowResize);