//  This script uses separate DIVS for each image to hide and show! All the divs are In the DOM already, but hidden, except 1st 1.
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    console.log('mousedown');
    // play hadouken sound
	playHadouken();
	$('.ryu-ready').hide();
    $('.ryu-throwing').show();
	$('.hadouken').finish().show().animate({'left':'1220px'},300),function(){
	$(this).hide();
	$(this).css('left':'350px');
   })  //close animation
  }) 
 
  .mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
	 $('.ryu-throwing').hide();
     $('.ryu-ready').show();
  });
});



function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

.mousedown(function() {
    // play hadouken sound

    $('.hadouken').show();
    // animate hadouken to the right of the screen
  })