export function header() {
  let header_search = document.querySelector(".header__top-right-search");

  header_search.addEventListener("click", () => {
    window.scroll(0, 1200);
  });
}
