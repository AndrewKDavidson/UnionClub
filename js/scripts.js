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


<<<<<<< HEAD
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
  console.log('remove class');
  if ($(window).width() > 992) {
    $("body").removeClass("menuExpanded");
  } else if ($(window).width() < 992 && $("#mobile-nav").hasClass('show')) {
    $("body").addClass("menuExpanded");
  }
}
=======

// var didExpand = false;
// document.querySelector('.navbar-toggler').addEventListener('click', toggleBodyClass);

// function togglerClick() {
//     didExpand = true;
// }

// setInterval(function() {
//     if(didExpand) {
//         didExpand = false;
//         toggleBodyClass();
//     }
// }, 1000);

// add expanded class to body
// function toggleBodyClass() {
//   console.log('button clicked!');
//   const body = document.querySelector('body');
//   body.classList.toggle('menuExpanded');
// }
// function toggleBodyClass() {;
//   const body = $('body');

//   if (body.hasClass('menuHidden')) {
//     body.removeClass('menuHidden');
//   } else {
//     body.addClass('menuHidden');
//   }
// }

>>>>>>> parent of 613e605... window resizing and mobile nav
