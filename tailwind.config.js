module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	important: true,
	theme: {
		colors: {
			background: {
				DEFAULT: '#ececec',
			},
			text: {
				DEFAULT: '#101010',
				gray: '#565046',
				disabled: 'rgb(165, 164, 164)',
			},
			border: {
				DEFAULT: '#98A2AF',
				gray: '#555',
				bgGray: '444',
				disabled: '#bbb4ba'
			},
			shadow: {
				DEFAULT: 'rgba(80, 80, 80, 0.6)',
				dark: 'rgba(0, 0, 0, 0.2)',
				darker: 'rgba(0, 0, 0, 0.4)',
			},
			checkbox: {
				bg: '#bbbab8',
			},
			progressBar: {
				bg: '#17191c',
			},
			dropdown: {
				bg: '#fff',
				bgHighlight: '#acacac',
				bgSelectedItem: '#cecece',
				bgSearch: 'rgba(109, 206, 206, 0.3)',
			},
			textField: {
				border: 'transparent',
				bg: 'transparent',
				bgDisabled: 'rgb(165, 164, 164)',
				textDisabled: '#666',
			},
			modal: {
				managerBg: 'rgba(209, 206, 206, 0.9)',
				shadow: 'rgba(0, 0, 0, 0.1)',
				divider: 'white',
				title: 'white',
				bgTitle: '#ec5020',
			},
			primary: {
				DEFAULT: '#101010',
				dark: '#101010'
			},
			secondary: {
				DEFAULT: '#191b1e',
			},
			white: {
				DEFAULT: '#fff',
				darker: '#eee',
			},
			black: {
				DEFAULT: '#000',
				transparent: 'rgba(0, 0, 0, 0.2)',
				semitransparent: 'rgba(0, 0, 0, 0.8)',
			},
			primaryText: {
				DEFAULT: '#3a3a3a'
			},
			greyText: {
				DEFAULT: '#565046',
			},
			orange: {
				DEFAULT: '#ec5020',
			},
			buttonDisabled: {
				DEFAULT: '#646464',
			},
			buttonPrimary: {
				DEFAULT: '#F25409',
			},
			
			transparent: 'rgba(0, 0, 0, 0)',
			dark: '#333',
			red: 'red',
			blue: 'blue',
			green: 'green',
			teal: 'teal',
			purple: 'purple',
			gray: 'gray',

			facebook: '#3b5998',
			twitch: '#6441a5',
			google: '#dd4b39',
			discord: '#7289da',
		},
		screens: {
			xs: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
			xxl: '1600px',
			xxxl: '1920px',
			xxxxl: '2100px',
		},

		borderRadius: {
			'none': '0',
			'sm': '0.125rem',
			'default': '0.25rem',
			'md': '0.375rem',
			'lg': '0.5rem',
			'xl': '0.75rem',
			'2xl': '1.0rem',
			'3xl': '1.2rem',
			'full': '9999px',
		},

		fontSize: {
			'xxs': '0.7rem',
			'xs': '.75rem',
			'sm': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},

		extend: {
			gap: {
				3.5: '0.875rem',
			},
			height: {
				44: '10rem',
				46: '11rem',
			},
			width: {
			},
			inset: {
			},
			margin: {
				'-5': '-1.25rem',
				'-10': '-2.5rem',
			},
			boxShadow: {
			},
		},
	},
	variants: {
		borderRadius: ['responsive', 'hover', 'focus', 'first', 'last'],
		borderWidth: ['responsive', 'hover', 'focus', 'first', 'last'],
		margin: ['responsive', 'hover', 'focus', 'first'],
		padding: ['responsive', 'hover', 'focus', 'first'],
		background: ['responsive', 'odd', 'even'],
		backgroundColor: ['responsive', 'hover', 'odd', 'even'],
	},
	purge: {
		mode: 'all',
		content: ['./index.html', './src/**/*.js'],
		options: {
			safelist: [/^(ql-|famfamfam-flag-|flag-)/],
			defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || [],
		},
	},
};
