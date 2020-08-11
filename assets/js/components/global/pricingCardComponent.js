Vue.component('pricing-card', {
	template: `
		<div class="pricing-card-wrapper flex-column flex-center bg-accent color-secondary animate__animated animate__fadeIn">
			<h2>{{title}}</h2>
			<ul class="pricing-card-bullets-wrapper">
				<li v-for="bullet in bullets" class=""> {{bullet}} </li>
			</ul>
			<div class="pricing-card-price font-text"><strong>{{'$' + price}}</strong></div>
		</div>
	`,

	props: ['title', 'price', 'bullets'],
	data: function() {
		return {

		};
	},
	methods: {

	},
});