$(document).ready(function(){

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
   coverflow: true,
    dots: true,
    centerMode: true, // Enable center mode
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 'adapive',
    responsive: [
      {
        breakpoint: 1100, // Adjust breakpoint as needed
        settings: {
          centerPadding: '60px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1000, // Adjust breakpoint as needed
        settings: {
          centerPadding: '45px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800, // Adjust breakpoint as needed
        settings: {
          centerPadding: '150px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 650, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: '80px',
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