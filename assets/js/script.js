// AOS Animation
AOS.init({
  duration: 1800,
});

// Number auto increase animation
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function testScroll() {
  if (isScrolledIntoView($(".number")) && !viewed) {
    viewed = true;
    $(".value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}
