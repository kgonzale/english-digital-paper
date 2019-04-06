$(document).ready(function() {
  const stickyNavTop = $(".topnav").offset().top;

  const stickyNav = () => {
    const scrollTop = $(window).scrollTop();

    scrollTop > stickyNavTop
      ? $(".topnav").addClass("sticky")
      : $(".topnav").removeClass("sticky");
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  $(".carousel-daddy").slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    autoplay: true
  });
});
