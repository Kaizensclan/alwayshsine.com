$(document).ready(function(){
	$('.outletsection .nav-item').click(function(){
		// reset active class
		$('.outletsection .nav-item').removeClass("active");
		// add active class to selected
		$(this).addClass("active");
		// return needed to make function work
		return false;
	});
	
	
	$(function() {
		// create an empty variable
		var selectedClass = "";
		// call function when item is clicked
		$(".outletsection .nav-item").click(function(){
			// assigns class to selected item
			selectedClass = $(this).attr("data-rel");
			// fades out all portfolio items
			$(".outletsection .portfolio li").fadeOut(300);
			// fades in selected category
			$(".outletsection .portfolio li." + selectedClass).delay(300).fadeIn(300);
		});
	});
  
}); // document ready


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players=[],
    iframes = $(".carousel__iframe");

function onYouTubePlayerAPIReady() {
  for (var i = 0; i < iframes.length; i++) {
      var iframeItem = iframes[i];
  
      players[i] = new YT.Player(iframeItem, {
        suggestedQuality: 'hd720'
      });
  }
}

$(function() {
  $("#business_carousel").owlCarousel({
    items: 1,
    singleItem: true,
    autoPlay: true,
    navigation: true,
    navigationText: ["", ""],
    afterAction: function() {

      for (var i = 0; i < players.length; ++i) {
        players[i].pauseVideo();
      }

      $(".backdrop").show();
    }
  });

  $(".backdrop").click(function() {
    var i = $(this).hide().index('.backdrop');
    players[i].playVideo();
  });
});
