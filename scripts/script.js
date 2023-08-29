document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    document.querySelectorAll("a").forEach((el) => {
      el.classList.remove("scroll-active");
    });
    this.classList.add("scroll-active");
  });
});

const btnPayProduct = document.querySelectorAll(".product-button");
const btnOpenCatalog = document.querySelectorAll(".btn-catalog");
const btnPost = document.querySelectorAll(".news-item");
const btnOpenNews = document.querySelectorAll(".btn-news");

btnPost.addEventListener("click", function () {
  window.open("product.html");
});
