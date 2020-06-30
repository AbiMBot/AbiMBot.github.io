// setup the vue router instance
const router = new VueRouter({
	routes: [
		{ path: '/', component: homeComponent },
		{ path: '/portfolio', component: portfolioComponent },
		{ path: '/rates', component: ratesComponent },
		// matches any other route and displays the 404 page 
		{ path: '*', component: notFoundComponent }
	]
}); 

const app = new Vue({
	el: '#app',
	router: router,

	data: {
		// links for the header navigation
		navLinks: [{ name: 'home', icon: 'home', path: '/', bg: false}, { name: 'portfolio', icon: 'images', path: '/portfolio', bg: true}, { name: 'rates', icon: 'dollar-sign', path: '/rates', bg: true}]
	},

	methods: {

	},
	computed: {
		
	},
});