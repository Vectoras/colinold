
// colecting data about device - GLOBAL
function deviceType () {
  if (window.innerWidth < 768) {
    // console.log ("mobile");
    return "mobile";    
  } else if (window.innerWidth < 1200) {
    // console.log ("tablet");
    return "tablet";
  } else {
    // console.log ("computer");
    return "computer";
  }
}

function getDPR () {
  return Math.ceil (window.devicePixelRatio);  
}


// enclosed scope
(function () {

// before page load
document.addEventListener("DOMContentLoaded", function(){

  let Device = {
    type: deviceType (),
    dpr: getDPR()
  } 

  // menu button for mobile
  if (Device.type === "mobile") {

    // open/close button
    const MenuButton = document.querySelector ("#button-menu-mobile");
    const MainNav = MenuButton.parentElement.parentElement;

    // updating fuctionalities predefined for minimum fuctionality if no JS
    document.querySelector("body").style.paddingTop = "100px";
    MainNav.style.position = "fixed";
    MainNav.classList.add ("menu-hidden");

    function toggleMainMenu (e) {
      MainNav.classList.toggle("menu-hidden");
    }

    MenuButton.addEventListener("click", toggleMainMenu );
  }

});

})();