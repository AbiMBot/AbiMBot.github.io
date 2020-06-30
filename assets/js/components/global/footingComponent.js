Vue.component('footing', {
	template: `
		<footer class="span flex-row flex-center color-accent">
			&#169; Abigail Botley - {{year}}
			<div class="flex-row">
				<a href="https://www.facebook.com/birchbellephotography" target="_blank" class="color-accent"><i class="fab fa-facebook-square"></i></a>
				<a href="https://www.instagram.com/birchbellephotography/" target="_blank" class="color-accent"><i class="fab fa-instagram"></i></a>
			</div>
		</footer>
	`,
	data: function() {
		return {
			year: new Date().getFullYear()
		};
	}
});