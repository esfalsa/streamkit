// // svelte.config.js
// import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown
// 			pages: 'docs',
// 			assets: 'docs'
// 		}),
// 		paths: {
// 			// change below to your repo name
// 			base: dev ? '' : '/streamkit'
// 		},
// 		prerender: {
// 			// This can be false if you're using a fallback (i.e. SPA mode)
// 			default: true
// 		}
// 	}
// };

// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

console.log(process.env.NODE_ENV);

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/streamkit'
		},
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};
