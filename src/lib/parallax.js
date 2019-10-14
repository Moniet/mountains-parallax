export const parallax = (bg, el, q = 40) => {
    let obj = el.getBoundingClientRect()

    bg.addEventListener('mousemove', e => {
        let translateX = ( e.clientX - (obj.left + (obj.width / 2)) ) / q
        let translateY = ( e.clientY - (obj.top + (obj.height / 2)) ) / q
        el.style.transform = `translate(${Math.floor(translateX)}px, ${Math.floor(translateY)}px)`
    });

    bg.addEventListener(
      "mouseleave",
      () => (el.style.transform = 'translateX(0)')
    );
}

