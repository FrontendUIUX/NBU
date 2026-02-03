jQuery(document).ready(function (jQuery) {
  var previousText;
  // Make sure we select the dropdown toggle properly using the correct class for .navbar-nav
  jQuery(".navbar-nav .dropdown-toggle").on("click", function () {
  });

  jQuery(".dpMenuContainer > .headElement .back").on("click", function () {
    jQuery(this).closest(".dropdown-menu").removeClass("show");
    jQuery(".menuHeader.d-lg-none").text(previousText);
});
jQuery(".subMenu > .headElement .back").on("click", function () {
  // Find the closest parent with the 'subMenu' class and remove the 'show' class
  jQuery(this).closest(".subMenu").removeClass("show");
  
  // Optionally, update the menu header text if needed
  jQuery(".menuHeader.d-lg-none").text(previousText);
});
});

jQuery("document").ready(function () {
  InitializeAllAnimations();
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  jQuery("select.form-select").attr({
    onfocus: "this.size=10;",
    onblur: "this.size=0;",
    onchange: "this.size=1; this.blur();"
  });
  jQuery(".accessibility").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(".selectedLanguage").removeClass("active");
    jQuery(".languages-popup").removeClass("active");
    jQuery(".mobileOverlay").fadeOut();
    let scrollbarWidth = getScrollbarWidth();
    jQuery(".accessibilityMenu").toggleClass("active");
    jQuery(".overlayShadow").fadeToggle();
    jQuery("body")
      .addClass("overflow-hidden")
      .css("padding-right", scrollbarWidth + "px");
  });
  jQuery(".accessibilityMenu .closeMenu").click(function () {
    jQuery("body").removeClass("overflow-hidden").css("padding-right", "");
    jQuery(".accessibilityMenu").removeClass("active");
    jQuery(".overlayShadow").fadeOut();
    
  });
  jQuery(".headElement .closeMenu").click(function(){
   jQuery("body").removeClass("overflow-hidden");
  })
  jQuery(".mainmenu").click(function () {
    let scrollbarWidth = getScrollbarWidth();
    jQuery("body").addClass("overflow-hidden")
    jQuery(".overlayShadow").fadeIn();
    jQuery(".searchbox-container").removeClass("show");
    jQuery("header").addClass("search-open");
    jQuery(".nbuToolbar").addClass("search-open");
  });
  jQuery(".navbar-toggler").click(function(){
    jQuery("body").addClass("overflow-hidden");
  })
  jQuery("header .closeMenu").click(function () {
    jQuery(".mainMenu").removeClass("show");
    jQuery("header #collapsibleNavbar").removeClass("show");
    jQuery("header").removeClass("search-open");
    jQuery("body").removeClass("overflow-hidden").css("padding-right", "");
    jQuery(".subMenu").removeClass("show");
    jQuery(".overlayShadow").fadeOut();
    jQuery(".searchbox-container").removeClass("show");

  });
  jQuery(".closeSubMenu").click(function () {
    jQuery(".links").removeClass("active");
  });
  jQuery(".vision-card").mouseover(function () {
  jQuery('.vision-card').removeClass("active");
  jQuery(this).addClass("active");
});
  /* COLOR FILTER START */
  jQuery(".colortheme").on("click", function () {
    jQuery("html").removeClass(
      "protanopia",
      "deuteranopia",
      "tritanopia",
      "achromatopia"
    );
  });
  jQuery(".protanopia").on("click", function () {
    jQuery("html").removeClass();
    jQuery("html").addClass("protanopia");
    jQuery(".color").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".deuteranopia").on("click", function () {
    jQuery("html").removeClass();
    jQuery("html").addClass("deuteranopia");
    jQuery(".color").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".tritanopia").on("click", function () {
    jQuery("html").removeClass();
    jQuery("html").addClass("tritanopia");
    jQuery(".color").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".achromatopia").on("click", function () {
    jQuery("html").removeClass();
    jQuery("html").addClass("achromatopia");
    jQuery(".color").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".reset").on("click", function () {
    jQuery("html").removeClass();
    jQuery(".color").removeClass("active");
    jQuery(this).addClass("active");
  });
  jQuery(".quicklaunchContainer").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(".shortcutContainer").toggleClass("visible");
    jQuery(".overlayShadow").fadeIn();
    if (jQuery(".openQuickLaunch").is(":visible")) {
      jQuery(".openQuickLaunch").fadeOut(300, function () {
        jQuery(".closeQuickLaunch").fadeIn(300);
      });
    } else {
      jQuery(".closeQuickLaunch").fadeOut(300, function () {
        jQuery(".openQuickLaunch").fadeIn(300);
        jQuery(".overlayShadow").fadeOut();
      });
    }
  });
  /* COLOR FILTER END */
  // Define the counter function
  function startCounter() {
    jQuery(".uniStats .data-slide .value").each(function () {
      jQuery(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: jQuery(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              jQuery(this).text(Math.ceil(now));
            },
          }
        );
    });
  }

  // Set up an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter();
          observer.unobserve(entry.target); // Stop observing once the counter starts
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of .uniStats is visible

  // Observe the uniStats container
  const uniStatsElement = document.querySelector(".uniStats");
  if (uniStatsElement) {
    observer.observe(uniStatsElement);
  }
  const slider = jQuery("#fontSizeSlider");
  let currentsize = parseFloat(slider.val()); // Starting value of 1rem
  function updateFontSize() {
    currentsize = parseFloat(slider.val());

    if (window.innerWidth < 1600) {
      jQuery("body").css("font-size", `jQuery{currentsize}rem`);
    } else {
      jQuery("body").css("font-size", `jQuery{currentsize}vw`);
    }
  }
  slider.on("input", function () {
    updateFontSize();
  });
  jQuery(window).resize(function () {
    updateFontSize();
  });
  updateFontSize();
  jQuery(".toggleMenu").click(function (e) {
    e.preventDefault();
    var jQuerylinksDiv = jQuery(this).closest(".col-lg-3").find(".links");
    jQuerylinksDiv.toggleClass("active");
    jQuery(".col-lg-3 .links").not(jQuerylinksDiv).removeClass("active");
  });
});
jQuery(".heroBanner .slider").slick({
  infinite: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  fade: true,
  arrows: false,
  dots: false,
  speed: 500,
  cssEase: "linear",
  adaptiveHeight: false,
  draggable: false,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  touchThreshold: 5,
  useCSS: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
  cssEase: "ease-in-out",
});
// CLOSE SEARCH
jQuery(".close-search").click(function () {
  jQuery(".searchbox-container").removeClass("show");
  jQuery("header").removeClass("search-open");
  jQuery(".nbuToolbar").removeClass("search-open");
  jQuery("body").removeClass("overflow-hidden");
  jQuery(".search,.search-mobile").css({ "pointer-events": "all" });
  jQuery(".overlayShadow").fadeOut(500);
});
jQuery(document).ready(function () {
  if (jQuery(".searchbox-container").hasClass("show")) {
    jQuery("header").addClass("search-open");
    jQuery(".nbuToolbar").addClass("search-open");
  } else {
    jQuery("header").removeClass("search-open");
    jQuery(".nbuToolbar").removeClass("search-open");
  }
});
jQuery(".selectedLanguage").click(function () {
  if (jQuery(".accessibility").hasClass("active")) {
    jQuery(".accessibility").removeClass("active");
  }
  jQuery(this).toggleClass("active");
  jQuery(".accessibilityMenu").removeClass("active");
  jQuery(this).toggleClass("clicked");
  jQuery(".languages-popup").toggleClass("active");
  if (jQuery(".languages-popup").hasClass("active")) {
    jQuery(".mobileOverlay").fadeIn();
  } else {
    jQuery(".mobileOverlay").fadeOut();
  }
});
jQuery(".languages-list .language").click(function () {
  jQuery(".languages-popup").removeClass("active");
  jQuery(".mobileOverlay").fadeToggle();
});
jQuery(".mobileOverlay").click(function () {
  jQuery(".languages-popup").removeClass("active");
  jQuery(".acc-modal").removeClass("enabled");
  jQuery(".accessibility").removeClass("active");
  jQuery(".language-switch").removeClass("clicked");
  jQuery(this).fadeOut();
});
if(document.querySelector('.has-page-tabs.no-banner')){
 const noBanner = document.querySelector(".nbu-banner");
    if(noBanner){
          noBanner.style.height = 'unset';
    }
}
jQuery("#chat-widget-container").click(function(){
 jQuery(this).addClass("active");
})
function searchFormUpdatedHomePage(form) {
        const searchInput = document.getElementById('searchInputTxt');
        const keywords = encodeURIComponent(searchInput.value.trim()); // Safely encode the value for URLs
 
        // Check if the current URL contains "/en/"
        const currentUrl = window.location.href;
        const langPath = currentUrl.includes('/en/') ? '/en' : '';
 
        if (keywords) {
            form.action = `${langPath}/search?keywords=${keywords}`;
        }
        return true; // Allow the form to submit
    }
jQuery(document).ready(function () {
    jQuery("header").each(function () {
        if (jQuery.trim(jQuery(this).html()) === "") {
            jQuery(this).hide(); // Hide the header if it's empty
        }
    });
});
jQuery(document).ready(function(){
  jQuery(".tabs ul li").click(function(){
    jQuery(".tabs ul li").removeClass("active");
    jQuery(this).addClass("active");
  })
});
  // Select all elements with the class 'js-form-item'
    const formItems = document.querySelectorAll('.js-form-item');
    // Iterate over each form item
    formItems.forEach((item) => {
      // Attach a click event listener to each item
      item.addEventListener('click', () => {
        // Remove the 'active' class from all form items
        formItems.forEach((el) => {
          el.classList.remove('active');
        });
        // Add the 'active' class to the clicked item
        item.classList.add('active');
      });
    });
    // new menu 
jQuery(document).ready(function () {
  jQuery('.nav-item.dropdown').each(function () {
      var jQuerydropdown = jQuery(this);
      jQuerydropdown.find('.dropdown-menu .dpMenuContainer > li').each(function () {
          var jQuerymenuItem = jQuery(this);
          var children = jQuerymenuItem.children();

          // Check if the <li> element has exactly two children: <a> and <ul>
          if (children.length === 2 && 
              children.first().is('a') && 
              children.last().is('ul')) {
              
              // If the condition is met, add "mega-menu" to the parent dropdown <li>
              jQuerydropdown.addClass('mega-menu');
          }
      });
  });

  jQuery(".overlayShadow, .nbuToolbar").click(function(){
    jQuery(".overlayShadow").fadeOut();
    jQuery("header").removeClass("search-open");
    jQuery(".nbuToolbar").removeClass("search-open");
  })


    jQuery('.dropdown-menu').on('click', function(event) {
      event.stopPropagation();
  });

});
jQuery(document).ready(function (jQuery) {
  var jQuerymodal = jQuery(".searchbox-container");
  var jQueryoverlay = jQuery(".overlayShadow");
  var jQueryheader = jQuery("header");
  var jQuerytoolbar = jQuery(".nbuToolbar");
  var jQuerysearchButton = jQuery("button.search, .search-mobile");
  var jQuerydropdown = jQuery(".nav-item.dropdown");

  // Open Search Function
  function openSearch() {
    jQuerymodal.addClass("show");
    jQueryheader.addClass("search-open");
    jQuerytoolbar.addClass("search-open");
  }

  // Close Search Function
  function closeSearch(keepOverlay = false) {
    jQuerymodal.removeClass("show");
    if (!keepOverlay) {
      closeOverlay();
    }
  }

  // Close Overlay Function
  function closeOverlay() {
    if (!jQuerymodal.hasClass("show") && !jQuerydropdown.hasClass("active")) {
      jQueryoverlay.fadeOut(500);
      jQueryheader.removeClass("search-open");
      jQuerytoolbar.removeClass("search-open");
    }
  }

  // Close Dropdown Function
  function closeDropdown(keepOverlay = false) {
    jQuerydropdown.removeClass("active").find(".dropdown-menu").removeClass("show");
    if (!keepOverlay) {
      closeOverlay();
    }
  }

  // Search Button Click Handler
  jQuerysearchButton.on("click", function () {
    var isSearchOpen = jQuerymodal.hasClass("show");
    closeDropdown(true);
    if (isSearchOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  // Overlay Click Handler
  jQueryoverlay.on("click", function () {
    closeSearch();
    closeDropdown();
  });

  // Dropdown Click Handler - Toggle header and toolbar classes
  jQuerydropdown.on("click", function (event) {
    event.stopPropagation(); // Prevent click from propagating to document

    var $thisDropdown = jQuery(this);
    var isActive = $thisDropdown.hasClass("active");

    // Close all other dropdowns
    jQuerydropdown.not($thisDropdown).removeClass("active").find(".dropdown-menu").removeClass("show");

    // Toggle the clicked dropdown
    $thisDropdown.toggleClass("active");
    $thisDropdown.find(".dropdown-menu").toggleClass("show", $thisDropdown.hasClass("active"));

    // Toggle header and toolbar classes based on active dropdowns
    if (jQuerydropdown.hasClass("active")) {
      jQueryheader.addClass("search-open");
      jQuerytoolbar.addClass("search-open");
      jQueryoverlay.fadeIn(500);
    } else {
      jQueryheader.removeClass("search-open");
      jQuerytoolbar.removeClass("search-open");
      jQueryoverlay.fadeOut(500);
    }
  });

  // Document Click Handler to Close Dropdowns
  jQuery(document).on("click", function () {
    closeDropdown();
  });

  // Prevent Closing When Clicking Inside the Dropdown
  jQuerydropdown.on("click", function (event) {
    event.stopPropagation();
  });
});