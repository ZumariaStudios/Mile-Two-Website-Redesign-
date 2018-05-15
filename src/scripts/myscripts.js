// jQuery checker [debug tool]
// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

// slideshow preferences
$(document).ready(function(){
  $('.slideshow_container').slick({
  swipeToSlide: true,
  arrows: false,
  });
});

// reveal preferences
// window.sr = ScrollReveal({
//   reset: true
// });
// sr.reveal('.test', {opacity: 0.9,duration:3000});

var $animation_elements = $('.animation-element');
var $window = $(window);

for (var key in $animation_elements) {
  console.log(key, $animation_elements[key]);
}

function check_if_in_view() {
  var window_height = $window.height();
  console.log('window height: ' + window_height);

  var window_top_position = $window.scrollTop();
  console.log('window top position: ' + window_top_position);

  var window_bottom_position = (window_top_position + window_height);
  console.log('window bottom position: ' + window_bottom_position);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    console.log('element height: ' + element_height);

    var element_top_position = $element.offset().top;
    console.log('element top position: ' + element_top_position);

    var element_bottom_position = (element_top_position + element_height);
    console.log('element bottom position: ' + element_bottom_position);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
