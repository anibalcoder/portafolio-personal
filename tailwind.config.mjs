/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'jetBrains': ['JetBrains Mono Variable', 'monospace'],
			},
			backgroundImage: {
				'card-dark': 'linear-gradient(130deg, hsla(240, 6%, 10%, 0.04) 0%, hsla(187, 79%, 26%, 0.2) 100%)',
			},
			boxShadow: {
				'project': 'hsla(240, 30%, 28%, 0.25) 0px 50px 100px -20px, hsla(0, 0%, 0%, 0.3) 0px 30px 60px -30px'
			},
			gridTemplateColumns: {
				'auto-fit/354px': 'repeat(auto-fit, minmax(254px, 354px))',
			},
			animation: {
				'move-top': 'move-top 3s linear infinite alternate',
				'move-bottom': 'move-bottom 3s linear infinite alternate'
			},
			keyframes: {
				'move-top': {
					'to': { transform: 'translateY(-1rem)' }
				},
				'move-bottom': {
					'to': { transform: 'translateY(1rem)' }
				},
			},
		},
	},
	plugins: [],
}