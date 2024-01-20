const ratesComponent = {
	template: `
		<div class="rates-wrapper span flex-column flex-center">
			<p class="pricing-intro color-accent">Contact me if you have questions or need more information regarding photography services. In special circumstances rates may be adjusted to better suit the client. I take pride in being flexible and being able to work with you in whatever location, time frame, and price range works best for both the photographer and client. </p>
			<div class="pricing-packages flex-row flex-wrap flex-center">
				<pricing-card v-for="package in packages" v-bind:title="package.name" v-bind:price="package.price" v-bind:bullets="package.bullets"><pricing-card>
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
					price: 150,
					bullets: [
						"30 photographs",
						"One hour session",
						"One location",
						"One outfit change if desired",
						"Digital Images on a USB"
					]
				},
				{
					name: "Wedding",
					price: 1000,
					bullets: [
						"$100 security deposit",
						"150 photographs",
						"Meeting in advance",
						"Coverage of the entire day beginning with getting ready",
						"Digital Images on a USB"
					]
				},
				{
					name: "Family Session",
					price: 100,
					bullets: [
						"15 photographs",
						"30 minute session",
						"One location",
						"Digital Images on a USB"
					]
				},
				{
					name: "Senior Session",
					price: 125,
					bullets: [
						"20 Photographs",
						"One hour session",
						"One location",
						"One outfit change if desired",
						"Digital Images on a USB"
					]
				},
				{
					name: "Maternity Session",
					price: 125,
					bullets: [
						"20 photographs",
						"One hour session",
						"One location",
						"One outfit change if desired",
						"Digital Images on a USB"
					]
				},
				{
					name: "Model Session",
					price: 75,
					bullets: [
						"15 photographs",
						"30 minute session",
						"One location",
						"One outfit change if desired",
						"Digital Images on a USB"
					]
				},
				{
					name: "Newborn/Kids Session",
					price: 100,
					bullets: [
						"10 photographs",
						"45 minute session",
						"One location",
						"One outfit change if desired",
						"Digital Images on a USB"
					]
				},
				{
					name: "Event Coverage",
					price: 75,
					bullets: [
						"Pay by the hour"
					]
				}
			]
		};
	},
	methods: {

	},
	computed: {
		
	}
}