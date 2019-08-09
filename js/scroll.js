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