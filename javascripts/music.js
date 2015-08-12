// **************** Music History 5 *******************

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
		'firebase': '../bower_components/firebase/firebase',
		'lodash': '../bower_components/lodash/lodash',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
		'firebase': {
			exports: 'Firebase'
		}
	}
});

requirejs(
["jquery", "lodash", "firebase", "hbs", "bootstrap", "populate-songs", "get-more-songs"],
	function ($, _, _firebase, Handlebars, bootstrap, popSongs, moreSongs) {
		
		var myFirebaseRef = new Firebase("https://radiant-fire-6211.firebaseio.com");
		
		myFirebaseRef.on("value", function(snapshot) {
  var songs = snapshot.val();


	// Empty Array for unique
			
	var allSongsArray = [];
		
	for (var key in songs.songs) {
      allSongsArray[allSongsArray.length] = songs.songs[key];
      }
		console.log("allSongsArray", allSongsArray);
		
		var uniqueArtist =_.chain(allSongsArray)
				.uniq("artist")
				.pluck("artist")
				.value();
		
		var uniqueAlbum =_.chain(allSongsArray)
				.uniq("album")
				.pluck("album")
				.value();
		
		console.log(uniqueArtist);
		console.log(uniqueAlbum);
			
//	function displaySongs() {
		require(['hbs!../templates/songs'],
			function(songTemplate){
				$(".list-group").html(songTemplate(songs));
					});
//		}

	// Artist Menu Populate		
			
	require(['hbs!../templates/artist_menu'],
		function(artistTemplate){	$(".artistMenu").html(artistTemplate({artist: uniqueArtist}));
		console.log(songs.songs);
		});												
		
	$(".list-group").html("<h3>Select an Artist</h3>");
		
	$(".dropdown-menu li").click(function(){
		$(".albumMenu").removeClass("disabled");
	});
	
		// Submit button to add music
$(".subBtn").click(function(){
	event.preventDefault();
	var newSong = {
		"name": $("#inputSongName").val(),
		"artist": $("#inputArtist").val(),
		"album": $("#inputAlbum").val(),
};
		console.log("newSong", newSong);
	
		$.ajax({
        url: "https://radiant-fire-6211.firebaseio.com/songs.json",
			method: "POST",
			data: JSON.stringify(newSong)
      }).done(function(addedSong) {
				console.log(addedSong);
		});
});
		});
	});   //****** Keep me on the outside