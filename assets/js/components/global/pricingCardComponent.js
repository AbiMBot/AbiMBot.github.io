Vue.component('pricing-card', {
	template: `
		<div class="pricing-card-wrapper flex-column flex-center bg-accent color-secondary animate__animated animate__fadeIn">
			<h2>{{title}}</h2>
			<div class="pricing-card-photos">{{photos}} photographs</div>
			<div class="pricing-card-price font-text"><strong>{{'$' + price}}</strong></div>
		</div>
	`,

	props: ['title', 'price', 'photos'],
	data: function() {
		return {

		};
	},
	methods: {

	}
});