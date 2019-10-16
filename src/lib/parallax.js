export const parallax = (bg, el, q = 40, rev = false) => {
	let obj = el.getBoundingClientRect()

	bg.addEventListener('mousemove', e => {
		let translateX
		let translateY

		if (rev) {
			translateX = (obj.left + obj.width / 2 - e.clientX) / q
			translateY = (obj.top + obj.height / 2 - e.clientY) / q
		} else {
			translateX = (e.clientX - (obj.left + obj.width / 2)) / q
			translateY = (e.clientY - (obj.top + obj.height / 2)) / q
		}

		el.style.transform = `translate(${Math.floor(translateX)}px, ${Math.floor(
			translateY
		)}px)`
	})

	bg.addEventListener(
		'mouseleave',
		() => (el.style.transform = 'translateX(0)')
	)
}
