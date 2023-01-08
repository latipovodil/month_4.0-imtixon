export function slide() {

  
  
  $(".hero__slide").slick({
    autoplay: true,
    dots: true,
    speed: 600,
  });

  
  $(".hero__bottom-slide").slick({
    autoplay: true,
    dots: true,
    speed: 600,
    slidesToShow: 3,
  });

}
