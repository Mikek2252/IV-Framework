jQuery(function ($) {
	var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg'];
	$('#main').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});

});