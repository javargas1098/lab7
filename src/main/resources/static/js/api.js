api = (function() {

	return {
		getCinemaByName : function(name, callback) {
			$.ajax({
				type : "GET",
				url : "cinema/" + name,
				 function(data){
					callack(data);
				}
			});
		}
	}

})();