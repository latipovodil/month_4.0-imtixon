export function small_slide() {
  let button_small_slider = document.querySelector(".hero__bottom-container");

  button_small_slider.addEventListener("click", (e) => {
    setTimeout(() => {
      window.scroll(0, 1500);
    }, 700);
  });
}
