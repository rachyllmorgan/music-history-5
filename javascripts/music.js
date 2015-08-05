// *****************Music History 2 ******************

// var songs = [];
// var list_of_songs = document.getElementById("songlist");

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// var addSongBottom = songs.push("Hold Back the River > by James Bay on the album Chaos and the Calm");
// var addSongTop = songs.unshift("Just One Drink > by Jack White on the album Lazaretto");

//var addSong = prompt("Pick a song");
//	if (addSong===""); {
//var addArtist = prompt("Who sings it?")
//	}
//	if (addSong===""); {
//var addAlbum = prompt("On what album?")
//	songs.push(addSong + " &#8208 by " + addArtist + " on the album " + addAlbum);
//}

// console.log(song_mod);
// list_of_songs.innerHTML += "<div class='list_mod'>" + song_mod + "</div>" + "<br>";
// }

// ************* Music History 4 *****************

//$(document).ready(function(){	
//	
//		$.ajax({
//				url: "/javascripts/music.json",
//		}).done(function(data) {
//			var table = '';
//		for(var i =0; i <= data.songs.length; i++) {
//			console.log(data.songs[i]);
//			table += "<li class='tracks'><h4>"+data.songs[i].name+"</h4></br>"+data.songs[i].artist+"</br>"+data.songs[i].album+"</br></li>"+"<button type='button' class='remove'>Remove</button></br></br>";
//			$('.list-group').html(table);
//		}
//						});
//		$(".more").click(function(){
//			$.ajax({
//				url: "/javascripts/music2.json",
//			}).done(function(data) {
//			var table = '';
//		for(var i =0; i <= data.songs.length; i++) {
//			table += "<h4>"+data.songs[i].name+"</h4></br>"+data.songs[i].artist+"</br>"+data.songs[i].album+"</br>"+"<button type='button' class='remove'>Remove</button></br></br>";
//			
//			console.log(data.songs[i]);
//			
//			$('.list-group').append(table);
//		}
//						});
//		});
//	
//	$(document).on("click", ".tracks", function(){
//		$(this).parent.remove();
//	});
//	
//	$(".form-control").val(function(){
//		
//	});
//		
//});

// **************** Music History 5 *******************

requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
["jquery", "hbs", "bootstrap", "populate-songs", "get-more-songs"],
	function ($, Handlebars, bootstrap, popSongs, moreSongs) {
		
 popSongs.getSongs(function(songs) {
 			require(['hbs!../templates/songs'], function(songTemplate) {
				console.log(popSongs);
		$(".list-group").html(songTemplate(songs));
			});
 });
		
	$("#moreSongs").click(function(){
  	moreSongs.getSongs(function(songs) {
			require(['hbs!../templates/songs'], 			function(songTemplate) {
			console.log(moreSongs);
				$(".list-group").append(songTemplate(songs));
				});
 });
	});
	}

//	$(".artistMenu").select(function() {
	
	
);  //****** Keep me on the outside

