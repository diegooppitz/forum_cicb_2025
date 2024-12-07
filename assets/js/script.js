window.onload = function () {
  const docHeight = 4000;
  $(".svg_wrapper").height(docHeight);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const switcher = Boolean(urlParams.get("switcher-off"));

  if (switcher) {
    $(".language-switcher").hide();
    setTimeout(() => {
      $("body").removeClass("block-scroll");
    }, 500);
    AOS.init();
  }
};

$('.close-lang').click(function () {
  $('.language-switcher').fadeOut()
  setTimeout(() => {
    $('body').removeClass('block-scroll')
  }, 500);
  AOS.init();
})