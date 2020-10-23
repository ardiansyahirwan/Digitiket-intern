$('.gallery-jumbo').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.thumbnail'
   });
   $('.thumbnail').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.gallery-jumbo',
   dots: false,
   centerMode: true,
   focusOnSelect: true
   });