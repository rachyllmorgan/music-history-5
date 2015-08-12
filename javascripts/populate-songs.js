define(["jquery"],function($) {
  return {
    getSongs: function(popSongs) {
      $.ajax({
        url: "https://radiant-fire-6211.firebaseio.com/.json",
      }).done(function(data) {
        popSongs(data);
      });
    }
  };
});