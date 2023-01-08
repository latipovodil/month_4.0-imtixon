export function best(basket_page, like) {
  let best__catigories_all = document.querySelector(".best__catigories-all");
  let best__main_all_items = document.querySelector(".best__main-all-items");
  best__catigories_all.style.color = "rgb(51, 160, 255)"

  best__main_all_items.addEventListener("click", () => {
    best__main_all_items.style.display = "none";
    fetch("https://fakestoreapi.com/products")
      .then((item) => item.json())
      .then((data) => render_best_main(data, data.length, true));
  });

  best__catigories_all.classList.add("best__catigories-checked");

  let best__catigories = document.querySelectorAll(".best__catigories");
  function best_render(data) {
    for (let i = 0; i < data.length; i++) {
      best__catigories[i].textContent = data[i];
    }
  }
  fetch("https://fakestoreapi.com/products/categories")
    .then((item) => item.json())
    .then((data) => best_render(data));

  let best__main = document.querySelector(".best__main");

  function render_best_main(data, count, click = false) {
    if (data.length > 8) {
      if (!click) {
        best__main_all_items.style.display = "inline-block";
      }
    }

    function title_length(title) {
      if (title) {
        if (title.length > 15) {
          return title.substring(0, 15) + "...";
        }
      } else {
        return title;
      }
    }

    function star(star) {
      let all_star = Math.round(star);
      let str = "";
      for (let i = 0; i < all_star + "".length; i++) {
        str += "⭐";
      }
      if (str.length < 5) {
        for (let j = 0; j < 5 - str.length; j++) {
          str += "❌";
        }
      }
      if (str.length == 4) {
        str += "❌";
      }
      return str;
    }

    best__main.textContent = "";
    if (data.length < 9) {
      best__main_all_items.style.display = "none";
    }
    for (let i = 0; i < count; i++) {
      if (data[i]) {
        best__main.innerHTML += `
      <li style="position: relative;" id="${
        data[i].id
      }" class="best__main-items">
      <div class="small_slider-box2">
      <button id="${data[i].id}" class="best__like-add add_like" type="button">
 
        <img id="${data[i].id}" class="like1" src="./imgs/like1.svg" alt="like">
        <img id="${
          data[i].id
        }" class="like2" src="./imgs/like2.svg" alt="like2">
     
      </button>

      <button id="${
        data[i].id
      }" class=best__basket-add add_basket" type="button">

        <img class="basket1" src="./imgs/basket1.svg" id="${
          data[i].id
        }" alt="basket1">
        <img class="basket2" id="${
          data[i].id
        }" src="./imgs/basket2.svg" alt="basket2">
     
      </button>

     </div>
      <div class="best__main-items-img-box">
        <img src="${data[i].image}" alt="img" />
      </div>
      <div class="best__main-items-textes">
            <h3 class="best__main-items-title">${title_length(
              data[i].title
            )}<span style="display: none;">${data[i].title}</span></h3>
      <p>${star(data[i].rating.rate)}</p>
      <div class="best__main-items-money">
        <span class="best__main-items1">$${(data[i].price * 0.76).toFixed(
          2
        )}</span>
        <s class="best__main-items2">$${data[i].price}</s>
        <span class="best__main-items3">24% Off</span>
      </div>
      </div>

      <img class="basket_okey" src="./imgs/basket_okey.svg" alt="basket_okey">
      <img class="basket_okey like_okey" src="./imgs/like_okey.svg" alt="like_okey">

    </li>
      `;
      }
    }
    basket_page();
    like();

    let like_okey = document.querySelectorAll(".like_okey");
    let basket_okey = document.querySelectorAll(".basket_okey");
    let basket1 = document.querySelectorAll(".basket1");
    let basket2 = document.querySelectorAll(".basket2");
    for (const i of basket1) {
      i.addEventListener("click", () => {
        i.style.display = "none";
        for (const j of basket2) {
          j.addEventListener("click", () => {});
          if (j.id == i.id) {
            j.style.display = "block";
            j.classList.add("basket__none");
            setTimeout(() => {
              j.classList.remove("basket__none");
            }, 800);
          }
        }
      });
    }
    for (const j of basket2) {
      j.addEventListener("click", () => {
        j.style.display = "none";
        for (const k of basket1) {
          if (j.id == k.id) {
            k.style.display = "block";
          }
        }
      });
    }
    let like1 = document.querySelectorAll(".like1");
    let like2 = document.querySelectorAll(".like2");
    for (const i of like1) {
      i.addEventListener("click", () => {
        i.style.display = "none";
        for (const j of like2) {
          j.addEventListener("click", () => {});
          if (j.id == i.id) {
            j.style.display = "block";
            j.classList.add("basket__none");
            setTimeout(() => {
              j.classList.remove("basket__none");
            }, 800);
          }
        }
      });
    }
    for (const j of like2) {
      j.addEventListener("click", () => {
        j.style.display = "none";
        for (const k of like1) {
          if (j.id == k.id) {
            k.style.display = "block";
          }
        }
      });
    }

    for (let i = 0; i < like1.length; i++) {
      like1[i].addEventListener("click", () => {});
    }

    best__catigories_all.classList.remove("reload");
    for (const i of best__catigories) {
      i.classList.remove("reload");
    }
  }
  fetch("https://fakestoreapi.com/products")
    .then((item) => item.json())
    .then((data) => render_best_main(data, 8));

  let best__search_input = document.querySelector(".best__search-input");

  best__search_input.addEventListener("keyup", function (e) {

    if (best__catigories_all.style.color == "rgb(51, 160, 255)") {
      fetch("https://fakestoreapi.com/products/")
      .then((item) => item.json())
      .then((data) => search(data));
    } 
    
    else {
      for (const i of best__catigories) {
        if (i.style.color == "rgb(51, 160, 255)") {
          fetch("https://fakestoreapi.com/products/category/" + i.textContent)
            .then((item) => item.json())
            .then((data) => search(data));
        }
      }
    }

    function search(data) {
      let new_data = [];
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].title
            .toLowerCase()
            .includes(best__search_input.value.toLowerCase())
        ) {
          new_data.push(data[i]);
        }
      }
      return render_best_main(new_data, 8);
    }
  });

  best__catigories_all.addEventListener("click", () => {
    for (const i of best__catigories) {
      i.style.color = "#000";
    }
    best__catigories_all.style.color = "rgb(51, 160, 255)";

    best__catigories_all.classList.add("reload");
    fetch("https://fakestoreapi.com/products/")
      .then((item) => item.json())
      .then((data) => render_best_main(data, 8));
  });

  for (const i of best__catigories) {
    i.addEventListener("click", () => {
      for (const k of best__catigories) {
        k.style.color = "rgb(0,0,0)";
      }
      best__catigories_all.style.color = "#000";
      function search(data) {
        for (const j of data) {
          if (i.textContent.toUpperCase() == j.toUpperCase()) {
            i.style.color = "rgb(51, 160, 255)";
            i.classList.add("reload");

            fetch(`https://fakestoreapi.com/products/category/${j}`)
              .then((item) => item.json())
              .then((data) => render_best_main(data, 8));
          }
        }
      }

      fetch("https://fakestoreapi.com/products/categories")
        .then((item) => item.json())
        .then((data) => search(data));
    });
  }











}
