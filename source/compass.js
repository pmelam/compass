// $(document).ready(function() {
   // $('.Compass').click(function() {
//    //$(this).addClass('#pointer') //remove class to stop animation

   //  });
  // });

function playCompass(){
  //We'll use this to change the CSS Variable values from JS
  const style = document.documentElement.style;
  var angelValue =  document.getElementById("angle").value;

  //alert(angelValue);
  style.setProperty('--deg', angelValue+'deg');

}


