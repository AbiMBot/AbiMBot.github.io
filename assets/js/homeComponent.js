const homeComponent = {
	template: `
		<div class="home-wrapper fill-screen fixed">
			<div class="home-video-wrapper fill absolute">
				<video class="home-video absolute" src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
			</div>
			<div class="home-overlay fill absolute flex-column flex-space">
				<img class="home-overlay-image" src="assets/images/BBFLogoFinalBlack.png" alt=""/>
				<div class="span flex-row flex-space">
					<h3><i class="fas fa-envelope"></i> abimbart@gmail.com</h3>
					<h3><i class="fas fa-phone"></i> (207)-111-1111</h3>
				</div>
			</div>
		<div>
	`,

	props: [],
	data: function() {
		return {

		};
	},
	methods: {

	},
	computed: {
		
	}
}