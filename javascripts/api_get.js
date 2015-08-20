define(["jquery"],function($) {
  return {
    getSongs: function(title) {

// Get OMDB API music info
    
    $.ajax({
      url: "http://freemusicarchive.org/api/get/curators.json?api_key=3X9KIUC882CT17J5",
      data: {
        t: title,
      },
    success: function(data) {
      console.log("data", data);
      }
    	});
  	} 	
	};
});	