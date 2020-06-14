const navigationComponent = {
	template: `
		<div class="nav-wrapper span flex-row">
			<div class="nav-links-wrapper flex-row">
				<router-link v-for="link in links" :key="link.name" v-bind:to="link.path" class="nav-link"><i v-if="link.icon" v-bind:class="getIconClass(link.icon)"></i> {{link.name}}</router-link>
			</div>
		</div>
	`,

	props: ['links'],
	data: function() {
		return {
		};
	},
	methods: {
		getIconClass: function(iconName) {
			return `fas fa-${iconName}`;
		}
	},
	computed: {
		
	}
}