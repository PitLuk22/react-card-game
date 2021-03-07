export const fadeIn = {
	hidden: { opacity: 0, scale: .7 },
	show: { opacity: 1, scale: 1, transition: { duration: .3, staggerChildren: 0.05 } },
	exit: { opacity: 0, scale: .7, transition: { duration: .3 } }
}
export const menuAnim = {
	hidden: { opacity: 0, scale: .7 },
	show: { opacity: 1, scale: 1, transition: { duration: .3, staggerChildren: 0.1 } },
	exit: { opacity: 0, scale: .7, transition: { duration: .3 } }
}
export const scaleAnim = {
	hidden: { scale: 0 },
	show: { scale: 1, transition: { duration: .3 } }
}
export const topToBottom = {
	hidden: { y: -200 },
	show: { y: 0 }
}
export const bottomToTop = {
	hidden: { y: 200 },
	show: { y: 0 }
}
export const rightToLeft = {
	hidden: { x: 300 },
	show: { x: 0 }
}
export const leftToRight = {
	hidden: { x: -300 },
	show: { x: 0 }
}
export const leftToRightOpacity = {
	hidden: { opacity: 0, x: -600 },
	show: { opacity: 1, x: 0, transition: { duration: 1 } }
}
export const widthLeftToRight = {
	hidden: { width: 0 },
	show: { width: '100%', transition: { duration: 1 } }
}
export const widthRightToLeft = {
	hidden: { width: 0 },
	show: { width: '100%', transition: { duration: 1 } }
}
