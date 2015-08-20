// Using callbacks

// define(["jquery"],function($) {
//   return {
//     getSongs: function(moreSongs) {
//       $.ajax({
//         url: "./javascripts/music2.json",
//       }).done(function(data) {
//         moreSongs(data);
//       });
//     }
//   };
// });

// Using Promises
// define(["jquery", "q"], function ($, Q) {
  
// return function(){
//   // Create a deferred Promise
//   var deferred = Q.defer();

//   // Start the ajax call
//   $.ajax({
//   	url: "./javascripts/music2.json"
//   })
//     .done(function(songs_data) {
//       deferred.resolve(songs_data);
//     })
//     .fail(function(xhr, status, error) {
//       deferred.reject(error);
//     });

//   // Return the promise
//   return deferred.promise;
// 	};
// });