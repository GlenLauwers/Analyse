var el = $('#map');
var map;

function enableScrollingWithMouseWheel() {
    map.setOptions({ scrollwheel: true });
}

function disableScrollingWithMouseWheel() {
    map.setOptions({ scrollwheel: false });
}

function init() {
    map = new google.maps.Map(el[0], {
        zoom: 15,
        center: new google.maps.LatLng(51.0512609,4.4589609),
        scrollwheel: false,
    });

    google.maps.event.addListener(map, 'mousedown', function(){
        enableScrollingWithMouseWheel()
    });

	var marker = new google.maps.Marker({  
  	position: new google.maps.LatLng(51.0512609,4.4589609),  
  	map: map,  
  	title: 'Glen Lauwers',  
  	clickable: true,  
	}); 
}

google.maps.event.addDomListener(window, 'load', init);

$('body').on('mousedown', function(event) {
    var clickedInsideMap = $(event.target).parents('#map').length > 0;

    if(!clickedInsideMap) {
        disableScrollingWithMouseWheel();
    }
});

$(window).scroll(function() {
    disableScrollingWithMouseWheel();
});