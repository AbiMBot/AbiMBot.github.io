const portfolioComponent = {
	template: `
		<div class="portfolio-wrapper flex-column flex-center">

			<div v-for="collection in collections" class="portfolio-collection-wrapper flex-column ">
				<h1 class="portfolio-collection-header color-accent animate__animated animate__fadeIn">{{collection.name}}</h1>
				<div class="portfolio-collection-content span flex-row flex-wrap">
					<img v-for="(photo, index) in collection.photos" v-bind:src="'assets/images/portfolio/' + photo" alt="" v-on:click="openPhotoViewer(collection.photos, index)" v-bind:class="'animate__animated animate__fadeInLeftBig animate__delay-' + index / 2 + 's'"/>
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
			collections: [
				{
					name: 'Weddings',
					photos: ['weddings1.jpg', 'weddings2.jpg', 'weddings3.jpg']
				},
				{
					name: 'Couples',
					photos: []
				},
				{
					name: 'Families',
					photos: []
				},
				{
					name: 'Portraits',
					photos: []
				}
			]
		};
	},
	methods: {
		// open the photo viewer widgit 
		openPhotoViewer: function(array, startingIndex) {
			// map all of the string in the array to the full path for each photo
			this.viewerArray = array.map(function(photo) {
				return 'assets/images/portfolio/' + photo;
			});

			// set the starting index of the photo viewer baised on which photo the user clicked 
			this.viewerStartingIndex = startingIndex;
			// and then open the viewer so that it is visible to the user 
			this.viewerOpen = true;
		}
	},
	computed: {
		
	}
}