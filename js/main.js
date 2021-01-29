
//GLOBAL FUNCTIONS
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

  // collecting data about device
  let device = {
    type: deviceType (),
    dpr: getDPR()
  } 

  // menu button for mobile
  if (device.type === "mobile") {

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
  
  // testimonials arrows for desktop
  if (device.type === "computer" && document.querySelector("#testimonials-container")) {

    (function(){
      let currentTestimonial = 1;
      let scrollPosition = 0;

      const testimonialsParent = document.querySelector("#testimonials");
      const testimonials = testimonialsParent.children;
      const nrOfTestimonials = testimonials.length;

      // functions
      function nextTestimonial () {
        if (currentTestimonial < nrOfTestimonials) {
          scrollPosition += parseInt (window.getComputedStyle(testimonials[currentTestimonial-1]).getPropertyValue("width"));
          testimonialsParent.scrollTo(scrollPosition,0);

          currentTestimonial ++;
        }
      }
  
      function previousTestimonial () {
        if (currentTestimonial > 1) {
          scrollPosition -= parseInt(window.getComputedStyle(testimonials[currentTestimonial-1]).getPropertyValue("width"));
          testimonialsParent.scrollTo(scrollPosition,0);

          currentTestimonial --;
        }
      }
  
  
      // adding event to the buttons
      const buttonLeft = document.querySelector("#testimonials-container").querySelector(".fa-chevron-left");
      const buttonRight = document.querySelector("#testimonials-container").querySelector(".fa-chevron-right");
  
      buttonLeft.addEventListener("click", previousTestimonial);
      buttonRight.addEventListener("click", nextTestimonial);


    })();

  }
  
  // folder structure (teaching resources page)
  (function () {
    if(document.querySelector("#teaching-resources-list")) {

      const resourcesList = document.querySelector("#teaching-resources-list").querySelector("main");    
      const folderList = resourcesList.querySelectorAll(".folder");
      const subfolderList = resourcesList.querySelectorAll(".subfolder");

      // closing folders and subfolders + adding click events to enable opening them
      
      // animation function
      function startAnimation (element) {
        // element closing
        if (element.classList.contains("opened")) {
          element.style.height = window.getComputedStyle(element).getPropertyValue("height");

          // return animation duration to be used for delaying (0 would cause cleaning before height has been set)
          return 10;
          // return 0;
        } 
        // element opening
        else if (element.classList.contains("closed")) {
          const children = element.children;
          let height = parseInt(window.getComputedStyle(element).getPropertyValue("height"));

          // add total height of all children
          for (let i=1; i<children.length; i++) {
            height += parseInt(window.getComputedStyle(children[i]).getPropertyValue("height"));
          }

          // set height to element -> the change will start animation
          element.style.height = height + "px";

          // return animation duration to be used for delaying 
          let delay = 1000 * parseFloat(window.getComputedStyle(element).getPropertyValue("transition-duration"));
          return delay;
        }
      }

      // cleaning function
      function cleanAfterAnimation (element) {
          element.removeAttribute("style");
        }
    
      // subFolders
      for (let i=0; i<subfolderList.length; i++) {
        subfolderList[i].classList.remove("opened");
        subfolderList[i].classList.add("closed");
        subfolderList[i].style.cursor = "pointer";
        
        subfolderList[i].addEventListener ("click", function (e) {

          e.stopPropagation(); // prevent toggeling parent or child folders/subfolders

          let delay = startAnimation (subfolderList[i]); // due to height having to be auto
          
          setTimeout( function () {
            subfolderList[i].classList.toggle("closed");
            subfolderList[i].classList.toggle("opened");
          }, delay );

          setTimeout( function () {
            cleanAfterAnimation (subfolderList[i]); // due to height having to be auto
          }, delay );
    
        });
        
      }
    
      // folders
      for (let i = 0; i<folderList.length; i++) {
        folderList[i].classList.remove("opened");
        folderList[i].classList.add("closed");
        folderList[i].style.cursor = "pointer";

        folderList[i].addEventListener ("click", function (e) {

          e.stopPropagation();

          let delay = startAnimation (folderList[i]); // due to height having to be auto

          setTimeout( function () {
            folderList[i].classList.toggle("closed");
            folderList[i].classList.toggle("opened");
          }, delay );

          setTimeout( function () {
            cleanAfterAnimation (folderList[i]); // due to height having to be auto
          }, delay );

        });
      }
    }
  })();

});

})();