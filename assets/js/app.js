// setup the vue router instance
const router = new VueRouter({
	routes: [
		{ path: '/', component: homeComponent },
		{ path: '/portfolio/:collection', component: portfolioComponent },
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
		navLinks: [
			{ name: 'home', icon: 'home', path: '/', bg: false}, 
			{ name: 'portfolio', icon: 'images', path: '/portfolio/all', bg: true, children: []}, 
			{ name: 'rates', icon: 'dollar-sign', path: '/rates', bg: true}
		]
	},

	mounted: function() {
		// get the list of portfolio collections 
		DataAccess.getPortfolioManifest((manifest) => {
			var portfolioChildLinks = manifest.map((value) => ({name: value.name, path: `/portfolio/${value.name.toLowerCase()}`}));
			this.navLinks[1].children = portfolioChildLinks;
		});
	}
});