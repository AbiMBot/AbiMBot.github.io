const DataAccess = {
	// get the portfolio photos manifest
	getPortfolioManifest: function(callback) {
		var request = new XMLHttpRequest();
		request.open('GET', 'assets/images/portfolio/manifest.json');

		request.onload = () => {
			if(request.status == 200)
			{
				var data = JSON.parse(request.responseText);
				callback(data);
			}
		};
		request.send();
	}
};