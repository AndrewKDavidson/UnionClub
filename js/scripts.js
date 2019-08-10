// init page
document.body.onload = init();

function init() {
  initWow();
};

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

//check if resizing window to add and remove menuExpanded
function windowResizing() {
  if ($(window).width() > 992) {
    $("body").removeClass("menuExpanded");
  } else if ($(window).width() < 992 && $("#mobile-nav").hasClass('show')) {
    $("body").addClass("menuExpanded");
  }
}


//event listener to check if page has loaded, then remove loading screen
window.addEventListener('load', function() {
  $('.loading').addClass('isLoaded');
  setTimeout(function() {
    $('.loading').remove();
  }, 200);
})