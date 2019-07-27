// init page
document.body.onload = init();

function init() {
  checkScroll();
  initParallax();
  initWow();
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
