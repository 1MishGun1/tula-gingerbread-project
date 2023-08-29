const btnlogo = document.querySelector(".logo");
const btnProductItem = document.querySelectorAll(".catalog-item");
const btnOpenShop = document.querySelector(".btn-shop");

btnOpenShop.addEventListener("click", function () {
  window.open("basket.html");
});

btnlogo.addEventListener("click", function () {
  window.open("index.html");
});

const openPageProduct = function () {
  window.open("product.html");
};
for (let i = 0; i < btnProductItem.length; i++) {
  btnProductItem[i].addEventListener("click", openPageProduct);
}