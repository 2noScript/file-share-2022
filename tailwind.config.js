/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'screen-primary': '#799DD2',
				'ct-primary': '#A6BEDD',
				'txt-primary': '#79798C',
				content: '#F1F5FD',
				silebar: '#FCFDFE',
			},
		},
	},
	plugins: [],
};
