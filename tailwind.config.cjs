/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'cyan': 'hsl(193, 38%, 86%);',
			'green': 'hsl(150, 100%, 66%);',
			'gray-blue': 'hsl(217, 19%, 38%);',
			'dark-gray': 'hsl(217, 19%, 24%);',
			'dark-blue': 'hsl(218, 23%, 16%);',
		},
		extend: {
			fontFamily: {
				manrope: ["Manrope", "sans-serif"],
			},
			backgroundImage: (theme) => ({
				dividerd: "url('./src/assets/img/pattern-divider-desktop.svg')",
				dividerm: "url('./src/assets/img/pattern-divider-mobile.svg')",
			}),
		},
	},
	plugins: [],
}
