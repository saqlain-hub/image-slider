const imgSrc = "./assets/img-";
const slider = document.querySelector(".slider__img");
const left = document.querySelector(".main--left-sign");
const right = document.querySelector(".main--right-sign");
const img = slider.querySelector("img");

let i = 1;
let imgPath = imgSrc + i + ".jpg";

left.addEventListener("click", function () {
  if (i > 1) {
    i--;
  } else {
    i = 10;
  }
  imgPath = imgSrc + i + ".jpg";
  img.setAttribute("src", imgPath);
});

right.addEventListener("click", function () {
  if (i < 10) {
    i++;
  } else {
    i = 1;
  }
  imgPath = imgSrc + i + ".jpg";
  img.setAttribute("src", imgPath);
});
