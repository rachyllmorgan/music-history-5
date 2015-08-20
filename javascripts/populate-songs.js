// Using Promises
define(function(require) {
  var $ = require("jquery");
  var Q = require("q");

return function(){
  // Create a deferred Promise
  var deferred = Q.defer();

  // Start the ajax call
  $.ajax({
  	url: "https://radiant-fire-6211.firebaseio.com/.json"
  })
    .done(function(songs_data) {
      console.log("songs_data", songs_data);
      deferred.resolve(songs_data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });

  // Return the promise
  return deferred.promise;
	};
});