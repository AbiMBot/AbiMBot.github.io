const portfolioComponent = {
	template: `
		<div class="portfolio-wrapper flex-column flex-center">

			<div v-for="collection in collections" class="portfolio-collection-wrapper flex-column ">
				<h1 class="portfolio-collection-header color-accent animate__animated animate__fadeIn">{{collection.name}}</h1>
				<div class="portfolio-collection-content span flex-row flex-wrap flex-space">
					<img v-for="(photo, index) in collection.photos" v-bind:src="'assets/images/portfolio/' + collection.name + '/' + 'thumbnails' + '/' + photo" alt="" v-on:click="openPhotoViewer(collection, index)" class="animate__animated animate__fadeIn animate__delay-1s"/>
				</div>
			</div>

			<photo-viewer v-if="viewerOpen" v-on:close="viewerOpen = false" v-bind:photos="viewerArray" v-bind:startingIndex="viewerStartingIndex"></photo-viewer>

			<footing></footing>
		<div>
	`,

	props: [],
	data: function() {
		return {
			viewerOpen: false,
			viewerArray: null,
			viewerStartingIndex: 0,

			// a manifest for all of the photographs
			collections: []
		};
	},
	methods: {
		// open the photo viewer widgit 
		openPhotoViewer: function(collection, startingIndex) {
			// set the array of photos to the passed collection
			this.viewerArray = collection.photos.map(function(photo) {
				return `assets/images/portfolio/${collection.name}/${photo}`;
			});

			// set the starting index of the photo viewer baised on which photo the user clicked 
			this.viewerStartingIndex = startingIndex;
			// and then open the viewer so that it is visible to the user 
			this.viewerOpen = true;
		},
		updateCollections: function() {
			// get the collections manifest
			DataAccess.getPortfolioManifest((data) => {
				// show all the collections if the 'collection' param is set to 'all'
				if(this.$route.params.collection == 'all')
				{
					this.collections = data;
				}
				// else show only one collection depending on the route param
				else
				{
					this.collections = data.filter((value) => value.name.toLowerCase() == this.$route.params.collection);
				}
			});
		}
	},

	mounted: function() {
		this.updateCollections();
	},
	beforeRouteUpdate: function(to, from, next) {
		this.updateCollections();
		next();
	}
}