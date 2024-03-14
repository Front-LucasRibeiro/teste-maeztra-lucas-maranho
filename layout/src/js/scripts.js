function setSlicks() {
  let slickOptions = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500
  };

  $('.slider-banner-full').slick(slickOptions);
  $('.slider-banner-full-mob').slick(slickOptions);

  setTimeout(function () {
    $('.slick-marcas').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1642,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1318,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToShow: 1,
            // centerMode: true,
            variableWidth: true
          }
        }
      ]
    });
  }, 500)

  $('.slick-shelfs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1642,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1318,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
}

function openDropDownFooter() {
  $(document).on('click', 'footer .box-content h4', function () {
    $(this).parent().find('ul').slideToggle();
  });
}

function modalNewsletter() {
  let modal = sessionStorage.getItem('modalNews');

  if (modal !== 'true') {
    $('.wrapper-modal-news').css('display', 'flex');
  }

  $(window).on('click', function (e) {

    if (e.target.className === 'wrapper-modal-news') {
      $('.wrapper-modal-news').hide();
      sessionStorage.setItem('modalNews', 'true');
    }
  });


  $(document).on('click', '.btn-close', function () {
    $('.wrapper-modal-news').hide();
    sessionStorage.setItem('modalNews', 'true');
  });
}

$(document).ready(function () {
  setSlicks();
  openDropDownFooter();
  modalNewsletter();
});