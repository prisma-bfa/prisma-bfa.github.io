/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

  // Top scroll bar
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
   }

   //download?
   (function() { 
    var css = document.createElement('link'); 
    css.href = 'https://use.fontawesome.com/releases/v5.1.0/css/all.css'; 
    css.rel = 'stylesheet'; 
    css.type = 'text/css'; 
    document.getElementsByTagName('head')[0].appendChild(css); 
})(); 