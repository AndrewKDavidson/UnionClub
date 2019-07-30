// init page
document.body.onload = init();

function init() {
  initParallax();
  initWow();
};

// initialize parallax
function initParallax() {
  var p = new Parallax('.parallax').init();
}
initParallax();

// initialize window.js
function initWow() {
  new WOW().init();
}

initWow()


// delay navbar toggler event listener by 250ms
$('#mobile-nav').on('show.bs.collapse', function () {
  $("body").addClass("menuExpanded");
})

$('#mobile-nav').on('hide.bs.collapse', function () {
  $("body").removeClass("menuExpanded");
})

// throttling window.resize event listener
var resizeThrottled = false;
window.addEventListener('resize', function() {
  if (!resizeThrottled) {
    windowResizing();
    resizeThrottled = true;
    
    setTimeout(function() {
      resizeThrottled = false;
    }, 250);
  }  
});

function windowResizing() {
  if ($(window).width() > 992) {
    $("body").removeClass("menuExpanded");
  } else if ($(window).width() < 992 && $("#mobile-nav").hasClass('show')) {
    $("body").addClass("menuExpanded");
  }
}
