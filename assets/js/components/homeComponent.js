const homeComponent = {
	template: `
		<div class="home-wrapper fill-screen fixed">
			<div class="home-video-wrapper fill absolute">
				<video class="home-video absolute animate__animated animate__fadeIn" src="assets/videos/homevid.mp4" autoplay muted loop></video>
			</div>
			<div class="home-overlay fill absolute flex-column flex-space bg-primary">
				<img class="home-overlay-image animate__animated animate__fadeIn animate__delay-1s" src="assets/images/BBFLogoFinalBlack.png" alt=""/>
				<div class="span flex-row flex-space animate__animated animate__fadeIn animate__delay-2s">
					<h3><i class="fas fa-envelope"></i> abimbart@gmail.com</h3>
					<h3><i class="fas fa-phone"></i> (207)-790-3242</h3>
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