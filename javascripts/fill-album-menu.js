define(function(require){

// Empty Array for unique

	var allSongsArray = [];
			
	for (var key in songs.songs) {
  	allSongsArray[allSongsArray.length] = songs.songs[key];
  }
		console.log("allSongsArray in fill-album-menu.js", allSongsArray);
		
		var uniqueArtist =_.chain(allSongsArray)
				.uniq("artist")
				.pluck("artist")
				.value();
		
		var uniqueAlbum =_.chain(allSongsArray)
				.uniq("album")
				.pluck("album")
				.value();
		
	console.log("uniqueArtist", uniqueArtist);
	console.log("uniqueAlbum", uniqueAlbum);

		// Artist Menu Populate		
				
	function displayArtists() {
		require(['hbs!../templates/artist_menu'],
			function(artistTemplate){
				$(".artistMenu").html(artistTemplate({artist: uniqueArtist}));
			});												
	}
			
	$(".artistBtn").click(function(){
		displayArtists();
			$(".albumMenu").removeClass("disabled");

	});

});