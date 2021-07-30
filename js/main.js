//GLOBAL FUNCTIONS
function deviceType() {
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

function getDPR() {
  return Math.ceil(window.devicePixelRatio);
}

// enclosed scope
(function () {
  // before page loads
  document.addEventListener("DOMContentLoaded", function () {
    // collecting data about device
    let device = {
      type: deviceType(),
      dpr: getDPR(),
    };

    // menu button for mobile
    if (device.type === "mobile") {
      // open/close button
      const MenuButton = document.querySelector("#button-menu-mobile");
      const MainNav = MenuButton.parentElement.parentElement;

      // updating fuctionalities predefined for minimum fuctionality if no JS
      document.querySelector("body").style.paddingTop = "100px";
      MainNav.style.position = "fixed";
      MainNav.classList.add("menu-hidden");

      function toggleMainMenu(e) {
        MainNav.classList.toggle("menu-hidden");
      }

      MenuButton.addEventListener("click", toggleMainMenu);
    }

    // testimonials arrows for desktop
    if (device.type === "computer" && document.querySelector("#testimonials-container")) {
      (function () {
        let currentTestimonial = 1;
        let scrollPosition = 0;

        const testimonialsParent = document.querySelector("#testimonials");
        const testimonials = testimonialsParent.children;
        const nrOfTestimonials = testimonials.length;

        // functions
        function nextTestimonial() {
          if (currentTestimonial < nrOfTestimonials) {
            scrollPosition += parseInt(window.getComputedStyle(testimonials[currentTestimonial - 1]).getPropertyValue("width"));
            testimonialsParent.scrollTo(scrollPosition, 0);

            currentTestimonial++;

            if (currentTestimonial === nrOfTestimonials) buttonRight.classList.add("end"); // adding disabled appearence to right button when last item

            buttonLeft.classList.remove("end"); // removing disabled appearence to left button if there
          }
        }

        function previousTestimonial() {
          if (currentTestimonial > 1) {
            scrollPosition -= parseInt(window.getComputedStyle(testimonials[currentTestimonial - 1]).getPropertyValue("width"));
            testimonialsParent.scrollTo(scrollPosition, 0);

            currentTestimonial--;

            if (currentTestimonial === 1) buttonLeft.classList.add("end"); // adding disabled appearence to left button when last item

            buttonRight.classList.remove("end"); // removing disabled appearence to right button if there
          }
        }

        // adding event to the buttons
        const buttonLeft = document.querySelector("#testimonials-container").querySelector(".fa-chevron-left");
        const buttonRight = document.querySelector("#testimonials-container").querySelector(".fa-chevron-right");

        buttonLeft.classList.add("end"); // disabled appearence for left button to begin with

        buttonLeft.addEventListener("click", previousTestimonial);
        buttonRight.addEventListener("click", nextTestimonial);
      })();
    }
  });
})();
