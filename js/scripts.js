// init page
document.body.onload = init();

function init() {
  checkScroll();
};

// delay onscroll to every 100ms, run checkscroll
var didScroll = false;

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
    didScroll = true;
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        checkScroll();
    }
}, 100);

// Check if the page has been scrolled
function checkScroll() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add('isScrolling');
  } else {
    document.getElementById("navbar").classList.remove('isScrolling');
  }
}

// initialize parallax
var p = new Parallax('.parallax').init();


// delay navbar toggler event listener by 250ms
$('#mobile-nav').on('show.bs.collapse', function () {
  $("body").addClass("menuExpanded");
})

$('#mobile-nav').on('hide.bs.collapse', function () {
  $("body").removeClass("menuExpanded");
})


// throttling window.resize event listener
var throttled = false;
window.addEventListener('resize', function() {
    // only run if we're not throttled
  if (!throttled) {
    // actual callback action
    windowResizing();
    // we're throttled!
    throttled = true;
    // set a timeout to un-throttle
    setTimeout(function() {
      throttled = false;
    }, 250);
  }  
});

function windowResizing() {
  console.log('remove class');
  if ($(window).width() > 992) {
    $("body").removeClass("menuExpanded");
  } else if ($(window).width() < 992 && $("#mobile-nav").hasClass('show')) {
    $("body").addClass("menuExpanded");
  }
}