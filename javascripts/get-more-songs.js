define(["jquery"],function($) {
  return {
    getSongs: function(moreSongs) {
      $.ajax({
        url: "./javascripts/music2.json",
      }).done(function(data) {
        moreSongs(data);
      });
    }
  };
});