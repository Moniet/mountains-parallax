export const parallax = (bg, el, q = 40) => {
    let obj = el.getBoundingClientRect()

    bg.addEventListener('mousemove', e => {
        let translate = ( e.clientX - (obj.left + (obj.width / 2))) / q
        el.style.transform = `translateX(${Math.floor(translate)}px)`
    });

    bg.addEventListener('mouseleave', () => el.style.transform = `translateX(0)`)
}

