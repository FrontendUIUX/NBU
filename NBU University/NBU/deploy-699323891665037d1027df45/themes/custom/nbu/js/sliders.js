

function initializeSlick() {
  // Check if the page is in RTL mode
  var isRTL = jQuery('html').attr('dir') === 'rtl';
   jQuery('.statSlider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: jQuery('.openData .slick-prev'),
      nextArrow: jQuery('.openData .slick-next'),
      dots: false,
      speed: 500,
      cssEase: 'linear',
      draggable: true,
      useCSS: true,
      rtl: isRTL, // Ensure this variable is defined properly
      responsive: [

   {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2.5,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      cssEase: 'ease-in-out'
  });

  if (jQuery(window).width() < 768) {
      jQuery('.eservicesSection .nav-pills').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.eservicesSection .tab-content',
          dots: false,
          fade:true,
          centerMode: false,
          focusOnSelect: true,
          infinite: false, // Disables looping
          rtl: isRTL,
          prevArrow: jQuery('.eservicesSection .custom-prev'),
          nextArrow: jQuery('.eservicesSection .custom-next')
      });
      
      jQuery('.eservicesSection .tab-content').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          adaptiveHeight: true,
          asNavFor: '.eservicesSection .nav-pills',
          infinite: false, 
          rtl: isRTL
      });
     // Initialize the navigation slider
jQuery('.ourStory .nav-pills').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.ourStory .tab-content',
  dots: false,
  fade:true,
  centerMode: false,
  focusOnSelect: true,
  infinite: false,
  rtl: isRTL,
  prevArrow: jQuery('.ourStory .custom-prev'),
  nextArrow: jQuery('.ourStory .custom-next')
});

// Initialize the content slider
jQuery('.ourStory .tab-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  asNavFor: '.ourStory .nav-pills',
  infinite: false,
  rtl: isRTL
}).on('afterChange', function(event, slick, currentSlide) {
  jQuery('.ourStory .tab-pane').removeClass('show active fade');
  jQuery('.ourStory .tab-pane.slick-current').addClass('show active');
});

  }
}

// Run the function on page load
jQuery(document).ready(function () {
  initializeSlick();
});  
