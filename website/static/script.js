// scripts.js

function handleWindowResize() {
    const height = window.innerHeight;
    const screenHeightElements = document.querySelectorAll('.screen-height');

    for (const element of screenHeightElements) {
        element.style.height = height + 'px';
    }
}

window.addEventListener('resize', handleWindowResize);




// ----------------------------
const pointerScroll = (elem) => {

  let isDrag = false;
  
  const dragStart = () => isDrag = true;
  const dragEnd = () => isDrag = false;
  const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);
  
  elem.addEventListener("pointerdown", dragStart);
  addEventListener("pointerup", dragEnd);
  addEventListener("pointermove", drag);
};

document.querySelectorAll(".page-parent").forEach(pointerScroll);


//-----------------------


const pointerScrollY = (elem) => {
  let isDrag = false;
  
  const dragStart = () => isDrag = true;
  const dragEnd = () => isDrag = false;
  const drag = (ev) => isDrag && (elem.scrollTop -= ev.movementY); // Adjust scroll top
  
  elem.addEventListener("pointerdown", dragStart);
  addEventListener("pointerup", dragEnd);
  addEventListener("pointermove", drag);
};

document.querySelectorAll(".child-box-apex").forEach(pointerScrollY);
