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

	components: {
		'navigation': navigationComponent
	},

	data: {
		// links for the header navigation
		navLinks: [{ name: 'home', icon: 'home', path: '/'}, { name: 'portfolio', icon: 'images', path: '/portfolio'}, { name: 'rates', icon: 'dollar-sign', path: '/rates'}]
	},

	methods: {

	},
	computed: {
		
	}
});