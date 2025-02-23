Vue.component('navigation', {
	template: `
		<div class="nav-wrapper span flex-row" ref="nav">
			<div class="nav-links-wrapper flex-row animate__animated animate__fadeInDown animate__delay-3s">
				<router-link v-for="link in links" :key="link.name" v-bind:to="link.path" class="nav-link color-accent">
					<i v-if="link.icon" v-bind:class="'fas fa-' + link.icon"></i> {{link.name}} 
					<div v-if="link.children" class="nav-children-wrapper flex-column bg-secondary">
						<router-link v-for="child in link.children" v-bind:to="child.path" class="nav-link color-accent">{{child.name}}</router-link>
					</div>
				</router-link>
			</div>
		</div>
	`,

	props: ['links'],
	data: function() {
		return {
		};
	},
	methods: {
		setBackground: function(fill) {
			if(!fill)
			{
				this.$refs.nav.classList.remove('bg-secondary');
			}
			else
			{
				this.$refs.nav.classList.add('bg-secondary');
			}
		},
		routeChanged: function(path) {

			for(var i of this.links)
			{
				if(i.path == path)
				{
					this.setBackground(i.bg);
					return;
				}
			}

			this.setBackground(true);
		}
	},
	computed: {
		
	},

	mounted: function() {
		// set the background of the navbar depending on the 'bg' property for that path
		this.$router.beforeEach((to, from, next) => {
			this.routeChanged(to.fullPath);
			next();
		});
		this.routeChanged(this.$router.currentRoute.fullPath);
	}
});