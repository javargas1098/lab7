app = (function() {

	var actualizarTabla = function(cine) {
		$("#cineA").find('tbody').empty();
		var table = $("#cineA");
		for (var i = 0; i < cine[0].functions.length; i++) {
			table.append("<tbody><tr><td>" + cine[0].name + "</td><td>"
					+ cine[0].functions[i].movie.name + "</td><td>"
					+ cine[0].functions[i].date + "</td><td>"
					+ cine[0].functions[i].seats.length + "</td></tr><tbody>")
		}
	}

	return {
		getCinemaByName : function(name) {
			return api.getCinemaByName(name, function(cine) {
				actualizarTabla(cine);
			});
		}
	}

})();