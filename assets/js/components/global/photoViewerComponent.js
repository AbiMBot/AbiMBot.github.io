Vue.component('photo-viewer', {
	template: `
		<div v-on:click="close()" class="fixed fill-screen photo-viewer-wrapper animate__animated animate__fadeIn">
			<i v-on:click.stop="leftClick()" class="fas fa-chevron-left"></i>
			<img v-bind:src="photos[currentPhotoIndex]" alt="" v-on:click.stop/>
			<i v-on:click.stop="rightClick()" class="fas fa-chevron-right"></i>
		</div>
	`,

	props: ['photos', 'startingIndex'],
	data: function() {
		return {
			currentPhotoIndex: this.startingIndex
		};
	},

	methods: {
		// methods for navigating through the photos
		leftClick: function() {
			if(this.currentPhotoIndex != 0)
			{
				this.currentPhotoIndex -= 1;
			}
		},
		rightClick: function() {
			if(this.currentPhotoIndex != (this.photos.length - 1))
			{
				this.currentPhotoIndex += 1;
			}
		},

		// emits the close event so the parent component can take the photo viewer off screen
		close: function() {
			this.$emit('close');
		}
	},
	computed: {

	},

	mounted: function() {
		// add event listener so the user can navigate with the arrow keys 
		document.addEventListener('keydown', (event) => {
			if(event.code == 'ArrowRight')
			{
				this.rightClick();
			}
			else if(event.code == 'ArrowLeft')
			{
				this.leftClick();
			}

			// and close the viewer with the escape key if they want
			else if(event.code == 'Escape')
			{
				this.close();
			}
		});
	}
});