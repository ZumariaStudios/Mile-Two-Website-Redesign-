//jQuery checker [debug tool]
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

//slideshow preferences 
$(document).ready(function(){
  $('.slideshow_container').slick({
    arrows: true,
    slidesToShow: 4,
    dots: true,
    centerMode: true,
  });
});

console.log('this is a console log');
