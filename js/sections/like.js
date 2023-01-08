export function like() {
  let like_count = document.querySelector(".like_count");
  let like_arr = JSON.parse(localStorage.getItem("like"));
  let like_section = document.querySelector(".like_page-section");
  let like_page = document.querySelector(".like_page");
  like_page.addEventListener("click", () => {
    like_section.style.display = "inline-block";
    let best_bottom = document.querySelector(".best-bottom");
    let hero = document.querySelector(".hero");
    let best = document.querySelector(".best");
    let basket = document.querySelector(".basket");
    best.style.display = "none";
    hero.style.display = "none";
    best_bottom.style.display = "none";
    basket.style.display = "none";
  });
if (like_arr) {
  like_count.textContent = like_arr.length + 1;
}
  let add_like = document.querySelectorAll(".like1");
  let remove_like = document.querySelectorAll(".like2");
  for (const i of add_like) {
    i.addEventListener("click", () => {
      if (localStorage.getItem("like")) {
        let like_arr = JSON.parse(localStorage.getItem("like"));
if (like_arr) {
  like_count.textContent = like_arr.length + 1;
}

        if (like_arr.length) {
          for (let j = 0; j < like_arr.length; j++) {
            if (like_arr[j] * 1 == i.id) {
            } else {
              like_arr.push(i.id);
              localStorage.setItem("like", JSON.stringify(like_arr));
              break;
            }
          }
        } else {
          like_arr.push(i.id);
          localStorage.setItem("like", JSON.stringify(like_arr));
        }

        localStorage.setItem("like", JSON.stringify(like_arr));
      } else {
        let like_arr = [];
        like_arr.push(i.id);
        localStorage.setItem("like", JSON.stringify(like_arr));
      }
    });
  }

  for (const i of remove_like) {
    i.addEventListener("click", () => {
      let like_arr = JSON.parse(localStorage.getItem("like"));
      if (like_arr) {
        like_count.textContent = like_arr.length + 1;
      }
      if (localStorage.getItem("like")) {
        let like_arr = JSON.parse(localStorage.getItem("like"));
        if (like_arr.length) {
          for (let j = 0; j < like_arr.length; j++) {
            if (like_arr[j] * 1 == i.id) {
              like_arr.splice(j, 1);
            }
          }
        }
        localStorage.setItem("like", JSON.stringify(like_arr));
      }
    });
  }




let like_main = document.querySelector('.like__main')
  function like_main_render(data) {
    like_main.textContent = "";
    if (JSON.parse(localStorage.getItem("like")).length > 0) {
      let products_id = JSON.parse(localStorage.getItem("like"));

      for (const i of products_id) {
        for (const j of data) {
          if (i == j.id) {
            let like_arr = JSON.parse(localStorage.getItem("like"));
            if (like_arr) {
              like_count.textContent = like_arr.length + 1;
            }
            like_main.innerHTML += `
            <div id="${j.id}" class="basket__main-product1">
            <button id="${
              j.id
            }" type="button" class="basket__main-remove-product-btn">
              <img class="basket__main-remove-product-btn-img" id="${
                j.id
              }" src="./imgs/remove.svg" alt="remove basket" />
            </button>
            <div id="${j.id}" class="basket__main-img-box">
              <img id="${j.id}" src="${j.image}" alt="img" />
            </div>
            <h3 id="${j.id}" class="basket__main-product-title">
              ${j.title}
            </h3>
            <div id="${j.id}" class="basket__main-product-money">
              <p id="${j.id}" class="basket__main-price">$${(
              data[i].price * 0.76
            ).toFixed(2)}</p>
              <div id="${j.id}" class="basket__main-add-pro">
                <button id="${j.id}" type="button" class="basket__main-minus">
                  -
                </button>
                <p id="${j.id}" class="basket__main-add-pro-count">1</p>
                <button id="${
                  j.id
                }" type="button" class="basket__main-plus">+</button>
              </div>
              <p id="${j.id}" class="basket__main-unit-price">${(
              data[i].price * 0.76
            ).toFixed(2)}</p>
            </div><span class="basket__main-money" style="display:none;">${Math.round(
              (data[i].price * 0.76).toFixed(2)
            )}</span>
            <span class="basket__main-money-all" style="display:none;">${Math.round(
              (data[i].price * 0.76).toFixed(2)
            )}</span>
          </div>
            `;
          }
        }
      }
    }

    let basket__main_unit_price = document.querySelectorAll(
      ".basket__main-unit-price"
    );
    let basket__buy_all_price = document.querySelector(
      ".basket__buy-total-text-price"
    );
    let basket__main_count = document.querySelectorAll(
      ".basket__main-add-pro-count"
    );
    basket__buy_all_price.textContent = 0;
    let price_all = 0;
    for (const i of basket__main_unit_price) {
      price_all += Math.round(i.textContent);
      i.textContent = "$" + i.textContent;
    }
    basket__buy_all_price.textContent = "$" + price_all;
    let basket__main_money_all = document.querySelectorAll(
      ".basket__main-money-all"
    );
    let basket__main_plus = document.querySelectorAll(".basket__main-plus");
    let basket__main_money = document.querySelectorAll(".basket__main-money");
    for (const i of basket__main_plus) {
      let like_arr = JSON.parse(localStorage.getItem("like"));
      if (like_arr) {
        like_count.textContent = like_arr.length + 1;
      }
      i.addEventListener("click", () => {
        for (let j = 0; j < basket__main_unit_price.length; j++) {
          if (i.id == basket__main_unit_price[j].id) {
            basket__main_unit_price[j].textContent =
              basket__main_money_all[j].textContent * 1 +
              basket__main_money[j].textContent * 1;
            basket__main_money_all[j].textContent =
              basket__main_unit_price[j].textContent;
            basket__main_unit_price[j].textContent =
              "$" + basket__main_unit_price[j].textContent;
          }

          if (basket__main_count[j].id == i.id) {
            basket__main_count[j].textContent =
              basket__main_count[j].textContent * 1 + 1;
          }

          let price_all = 0;
          for (const i of basket__main_money_all) {
            price_all += Math.round(i.textContent);
          }
          basket__buy_all_price.textContent = "$" + price_all;
        }
      });
    }

    let basket__main_product = document.querySelectorAll(
      ".basket__main-product1"
    );
    let basket__main_minus = document.querySelectorAll(".basket__main-minus");
    for (const i of basket__main_minus) {
      i.addEventListener("click", () => {
        for (let j = 0; j < basket__main_unit_price.length; j++) {
          if (basket__main_count[j].textContent * 1 > 0) {
            if (i.id == basket__main_unit_price[j].id) {
              basket__main_unit_price[j].textContent =
                basket__main_money_all[j].textContent * 1 -
                basket__main_money[j].textContent * 1;

              basket__main_money_all[j].textContent =
                basket__main_unit_price[j].textContent;

              basket__main_unit_price[j].textContent =
                "$" + basket__main_unit_price[j].textContent;

              if (basket__main_count[j].id == i.id) {
                basket__main_count[j].textContent =
                  basket__main_count[j].textContent * 1 - 1;
              }

              let price_all = 0;
              for (const i of basket__main_money_all) {
                price_all += Math.round(i.textContent);
              }
              basket__buy_all_price.textContent = "$" + price_all;
            }
          } else if (Number(basket__main_count[j].textContent) == 0) {
            let basket_arr = JSON.parse(localStorage.getItem("like"));
            for (let j = 0; j < basket_arr.length; j++) {
              if (basket__main_product[j].id * 1 == i.id) {
                basket__main_product[j].style.display = "none";
              }

              if (basket_arr[j] * 1 == i.id) {
                basket_arr.splice(j, 1);
              }
              localStorage.setItem("like", JSON.stringify(basket_arr));

              fetch("https://fakestoreapi.com/products/")
                .then((item) => item.json())
                .then((data) => like_main_render(data));
              let header__top_count = document.querySelector(
                ".header__top-right-count"
              );
              header__top_count.textContent = basket_arr.length;
            }
          }
        }
      });
    }

    let basket__main_remove_btn = document.querySelectorAll(
      ".basket__main-remove-product-btn"
    );

    for (const i of basket__main_remove_btn) {
      i.addEventListener("click", () => {
        let like_arr = JSON.parse(localStorage.getItem("like"));
        if (like_arr) {
          like_count.textContent = like_arr.length + 1;
        }
        let basket_arr = JSON.parse(localStorage.getItem("like"));
        for (let j = 0; j < basket_arr.length; j++) {
          if (basket_arr[j] * 1 == i.id) {
            basket_arr.splice(j, 1);
          }
          localStorage.setItem("like", JSON.stringify(basket_arr));

          fetch("https://fakestoreapi.com/products/")
            .then((item) => item.json())
            .then((data) => like_main_render(data));
          let header__top_count = document.querySelector(
            ".header__top-right-count"
          );
          header__top_count.textContent = basket_arr.length;
        }
      });
    }
  }

  fetch("https://fakestoreapi.com/products/")
    .then((item) => item.json())
    .then((data) => like_main_render(data));







}
