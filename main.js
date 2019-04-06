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
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true
  });
});
