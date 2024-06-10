$(document).ready(function () {
  $(window).scroll(function () {
    // Track the scroll position
    const scrollHeight = $(window).scrollTop();
    if (scrollHeight > 0) {
      $(".main__header").addClass("highlight_nav");
    } else {
      $(".main__header").removeClass("highlight_nav");
    }
  });

  $(".close__side__nav").click(function () {
    $(".side__nav__container").css("display", "none");
  });

  $(".main__header__burger").click(function () {
    $(".side__nav__container").css("display", "block");
  });

  AOS.init();
});
