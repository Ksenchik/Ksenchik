import { projectData } from "./projectData.js";
import { create } from "./create.js";

const wrap = document.querySelector(".swiper-wrapper");

export function createSlider() {
  for (let i = 0; i < projectData.length; i++) {
      const item = create("div", "swiper-slide");

      item.innerHTML = `
      <h4 class="portfolio__card-title">${projectData[i].name}</h4>
      <div class="portfolio__card-photo">
          <a class="portfolio__card-link" href="${projectData[i].link}" target="_blank">
              <img class="portfolio__card-img" src="${projectData[i].image}">
          </a>
      </div>
      <p class="portfolio__card-description">${projectData[i].description}</p>
      <a class="portfolio__card-code" href="${projectData[i].code}" target="_blank">See code &#10142;</a>
    `;

    wrap.append(item);
  }
}

const swiper = new Swiper('.swiper', {
   navigation: {
      nextEl: '.portfolio__card-ntn-right',
      prevEl: '.portfolio__card-ntn-left'
   },
   speed: 500,
   spaceBetween: 100,
   slidesPerView: 1,
   loop: true,
});















// let offset = 0;
// let widthItem = 0;
// if (document.documentElement.clientWidth < 768) {
//   widthItem = 280;
// } else {
//   widthItem = 700;
// }

// const sliderLine = document.querySelector(".slider-line");
// sliderLine.style.width = (widthItem * projectData.length) + 'px';

// document
//   .querySelector(".portfolio__card-ntn-right")
//   .addEventListener("click", function () {
//     offset = offset + widthItem;
//     if (offset > widthItem * (projectData.length - 1)) {
//       offset = 0;
//     }
//     sliderLine.style.left = -offset + "px";
//   });

// document
//   .querySelector(".portfolio__card-ntn-left")
//   .addEventListener("click", function () {
//     offset = offset - widthItem;
//     if (offset < 0) {
//       offset = widthItem * (projectData.length - 1);
//     }
//     sliderLine.style.left = -offset + "px";
//   });