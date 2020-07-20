const ratesComponent = {
	template: `
		<div class="rates-wrapper span flex-column flex-center">
			<div class="pricing-packages flex-row flex-wrap flex-center">
				<pricing-card v-for="package in packages" v-bind:title="package.name" v-bind:price="package.price" v-bind:photos="package.photos"><pricing-card>
			</div>
			<footing></footing>
		<div>
	`,

	props: [],
	data: function() {
		return {
			packages: [
				{
					name: "Engagement Session",
					price: 110,
					photos: 30
				},
				{
					name: "Wedding",
					price: 400,
					photos: 150
				},
				{
					name: "Family Session",
					price: 75,
					photos: 15
				},
				{
					name: "Senior Session",
					price: 100,
					photos: 20
				},
				{
					name: "Maternity Session",
					price: 100,
					photos: 20
				},
				{
					name: "Model Session",
					price: 75,
					photos: 15
				},
				{
					name: "Newborn/Kids Session",
					price: 75,
					photos: 15
				}
			]
		};
	},
	methods: {

	},
	computed: {
		
	}
}