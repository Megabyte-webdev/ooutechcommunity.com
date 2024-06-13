$(document).ready(function(){

  $('.slider').slick({

    autoplay: true,
    autoplaySpeed: 2000,
   coverflow: true,
    dots: true,
    centerMode: true, // Enable center mode
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 'adaptive',
    responsive: [
      {
        breakpoint: 900, // Adjust breakpoint as needed
        settings: {
          centerPadding: '60px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      }
    ]
    // Add more options as needed
  });
    // Pause autoplay on hover
  $('.slider').hover(
    function() {
      $(this).slick('slickPause'); // Pause autoplay when hovering over the slider
    },
    function() {
      $(this).slick('slickPlay'); // Resume autoplay when hovering out of the slider
    }
  );
});
