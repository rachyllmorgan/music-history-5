define(["jquery"],function($) {
  return {
    getSongs: function(popSongs) {
      $.ajax({
        url: "./javascripts/music.json",
      }).done(function(data) {
        popSongs(data);
      });
    }
  };
});