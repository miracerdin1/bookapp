export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#57429A',
				secondary: '#7F48D1',
				'primary-dark': '#4338CA',
				textPrimary: '#1C1C1C',
				textSecondary: '#6E6E6E',
				grayLight: '#D9D9D9',
				danger: '#FF5C5C',
				divider: '#F0E5FF',
				gray: "#F6F8FA",
				textThird: "#545C64",
				completed: "#81E55D",
				reading: "#F27D35",
				toRead: "#3586F1",
				grayMedium: "#79859D",
				grayBorderLight: "#D5D9E3",
				textForth: "#141B2E",
				buttonHover: "#512593",
				selectHover: "#EEF0F4",
				hoverArrow: "#EBEFF1",
				toastSuccess: "#E3FBF2",
				toastText: "#097C69",
				black: "#1A1A1A",
				darkBlack: "#333333",
				darkScroll: "#666666",
				trash: "#ff0000"


			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			spacing: {
				'size-xs': '16px',
				'size-sm': '24px',
				'size-md': '30px',
				'size-lg': '32px',
				'size-xl': '38px',
				'size-xxl': '48px',
				'size-xxxl': '69px',
			},
			borderRadius: {
				'radius': '20px',
			},
		},
	},
	plugins: [],
}
