module.exports = {
	purge: [],
	theme: {
		/*
		can use here, when you want override all props
		colors: {
			'primary': '#f3c614',
			'secondary': '#353535'
		},
		*/
		extend: { // write here when you want extends default and only override some:
			colors: {
				'primary': '#f3c614',
				'secondary': '#353535'
			},
			height: {
				'80': '20rem',
				'100': '25rem'
			}
		}
	},
	variants: {
		opacity: ['responsive', 'hover', 'focus', 'disabled'],
	},
	plugins: [],
}
