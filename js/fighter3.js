//for fighter3
 window.onload = function() {
  document.getElementsByTagName('body')[0].onkeydown = function(e) { 
      var ev = e || event;
      if(ev.keyCode == 88) {
         $('#img1').attr('src','images/ryu-cool.gif'); 
      }
   }
   
   document.getElementsByTagName('body')[0].onkeyup = function(e) { 
      var ev = e || event;
         $('#img1').attr('src','images/ryu-standing-still.png'); 
       }
 };

  	 