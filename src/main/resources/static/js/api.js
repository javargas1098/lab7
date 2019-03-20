api = (function() {

	return {
		getCinemaByName : function(name, callback) {
			$.ajax({
				type : "GET",
				url : "cinema/" + name,
				succes :  function(data){
					callack(data);
				}
			});
		}
	}

})();