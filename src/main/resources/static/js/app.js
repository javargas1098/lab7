app = (function() {

	return {
		getCinemaByName : function(name) {
			return api.getCinemaByName(name, function(cine) {
				/*var table = $("#cineA");
				for (var i = 0; i < cine[0].functions.length; i++) {
					table.append("<tbody><tr><td>" + cine[0].name + "</td><td>"
							+ cine[0].functions[i].movie.name + "</td><td>"
							+ cine[0].functions[i].movie.genre + "</td><td>"
							+ cine[0].functions[i].date + "</td><td>"
							+ cine[0].functions[i].seats.length
							+ "</td></tr><tbody>")
				}*/
				 console.log(cine);
			});
		}
	}

})();