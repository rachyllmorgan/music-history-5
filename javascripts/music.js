// **************** Music History 5 *******************

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    	'jquery': '../lib/bower_components/jquery/dist/jquery.min',
	'firebase': '../lib/bower_components/firebase/firebase',
	'lodash': '../lib/bower_components/lodash/lodash',
    	'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    	'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    	'q': '../lib/bower_components/q/q',
    	"es6": '../lib/bower_components/requirejs-babel/es6',
    	"requirejs-babel": '../lib/bower_components/requirejs-babel/babel-5.8.22.min'

  },
  shim: {
    'bootstrap': ['jquery'],
		'firebase': {
			exports: 'Firebase'
		}
	}
});

requirejs(["dependencies", "firebase", "authentication", "populate-songs"],
	function (dependencies, firebase, authentication, popSongs) {
		
	var myFirebaseRef = new Firebase("https://radiant-fire-6211.firebaseio.com");
		
	myFirebaseRef.on("value", function(snapshot) {
  	var songs = snapshot.val();
  		console.log("music.js songs", songs);
	 		displaySongs(songs);

	// Detect if already logged in
	var ref = new Firebase("https://radiant-fire-6211.firebaseio.com");
	var authData = ref.getAuth();
		console.log("authData", authData);

 	//if there is no token key on the authData object, authenticate with GitHub OAuth
	if(authData === null) {
		ref.authWithOAuthPopup("github", function(error, authData) {
				if (error) {
	  			console.log("Login Failed!", error);
				} else {
  				console.log("Authenticated successfully with payload:", authData);

  				auth.setUid(authData.uid);

 //require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated
				}
		});

// user already authenticated, store uid and show data
	} else {
		auth.setUid(authData.uid);
//require(["core_list"], function(){}) --- create a new file to hold all info so page will not load until authenticated	
	}

	// $(".list-group").html("<h3>Select an Artist</h3>");

		// Display songs from filter
				
	function displaySongs() {
		require(['hbs!../templates/songs'],
			function(songTemplate){
				$(".list-group").html(songTemplate(songs));
			});
	}

 });

// Using Promises

	var list_of_songs = popSongs();

	var all_songs = [];

		console.log("all_songs", all_songs);

	list_of_songs
		.then(function(list_songs){
			console.log("list_songs before loop", list_songs);
			for (var i = 0; i <= list_songs.length; i++) {
				console.log("list_songs after loop", list_songs[i].songs);
				all_songs.push(list_songs[i].songs);
			}

			return list_of_songs;
		})
		.fail()
		.done();

});   //****** Keep me on the outside