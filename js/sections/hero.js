export function hero() {



  if (localStorage.getItem("basket")) {
    let basket_arr = JSON.parse(localStorage.getItem("basket"));

    let header__top_count= document.querySelector('.header__top-right-count')
    header__top_count.textContent = basket_arr.length
  }


  function render(data) {
    for (let i = 0; i < data.length; i++) {
      let box = document.querySelector(".hero__bottom-slide");
      let small_slide = document.querySelectorAll(".small-slide");
      let slick_dots = document.querySelectorAll(".slick-dots");
      let slick_prev = document.querySelectorAll(".slick-prev");
      let slick_next = document.querySelectorAll(".slick-next");

      slick_prev[1].style.top = "2%";
      slick_next[1].style.top = "-5%";

      slick_dots[1].classList.add("slick-dots-js", "slick-dots-js-act");
      slick_dots[1].style.top = "-3%";

      function title_length(title) {
        let str = "12345678910";
        if (title.length > 15) {
          return title.substring(0, 15) + "...";
        } else {
          return title;
        }
      }
      small_slide[i].id = data[i].id;
      small_slide[i].innerHTML = `  
      
            <img class="small-slider-img" src="${
              data[i].image
            }" alt="img">          
            <h2 class="hero__bottom-slide-title">${title_length(
              data[i].title
            )}<span id="${data[i].id}" style="display:none">${
        data[i].title
      }</span></h2>
            <p class="hero__bottom-slide-text">${data[i].price}$</p>
            <p style="color: #9098b1" class="hero__bottom-slide-text"> ${
              data[i].rating.count
            } ta</p>
            <button id="${
              data[i].id
            }" type="button" class="button_small_slider">Buy</button>
            `;
    }
  }

  fetch("https://fakestoreapi.com/products/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((item) => item.json())
    .then((data) => {
      render(data);
    });


}
