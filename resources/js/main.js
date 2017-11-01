$(document).ready(function() {
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDistance = 0;
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop - scrollDistance > 50) {
      var navBarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navBarHeight}, 150);
      scrollDistance = scrollTop;
    } else if (scrollDistance - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      scrollDistance = scrollTop;
    }
  });
});
