// requirejs.config({
//   baseUrl: './javascripts',
//   paths: {
//     'jquery': '../bower_components/jquery/dist/jquery.min',
// 		'firebase': '../bower_components/firebase/firebase',
// 		'lodash': '../bower_components/lodash/lodash',
//     'hbs': '../bower_components/require-handlebars-plugin/hbs',
//     'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
//     'q': '../bower_components/q/q'
//   },
//   shim: {
//     'bootstrap': ['jquery'],
// 		'firebase': {
// 			exports: 'Firebase'
// 		}
// 	}
// });

// requirejs(
// ["jquery", "lodash", "firebase", "hbs", "bootstrap", "get-more-songs", "populate-songs", "authentication"],
// 	function ($, _, _firebase, Handlebars, bootstrap, popSongs, getMoreSongs, auth) {
		
// 	var myFirebaseRef = new Firebase("https://radiant-fire-6211.firebaseio.com");	

// 	// Submit button to add music
				
// 	$(".subBtn").click(function(){
// 		event.preventDefault();
// 		var newSong = {
// 			"name": $("#inputSongName").val(),
// 			"artist": $("#inputArtist").val(),
// 			"album": $("#inputAlbum").val(),
// 			"uid": auth.getUid()
// 		};
// 			console.log("newSong", newSong);
		
// 			$.ajax({
// 	      url: "https://radiant-fire-6211.firebaseio.com/songs.json",
// 				method: "POST",
// 				data: JSON.stringify(newSong)
// 	      }).done(function(addedSong) {
// 					console.log(addedSong);
// 				});
// 	});
// });