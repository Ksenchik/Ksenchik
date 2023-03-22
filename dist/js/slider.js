import { projectData } from "./projectData.js";
import { create } from "./create.js";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const wrap = document.querySelector(".swiper-wrapper");

export function createSlider() {
  for (let i = 0; i < projectData.length; i++) {
    const item = create("div", "swiper-slide");
    const title = create("h4", "portfolio__card-title", {
      innerHTML: projectData[i].name,
    });
    const wrapPhoto = create("div", "portfolio__card-photo");
    const aPhoto = create("a", "portfolio__card-link", {
      href: projectData[i].link,
    });
    aPhoto.setAttribute("target", "_blank");
    const img = create("img", "portfolio__card-img", {
      src: projectData[i].image,
    });
    const pDescription = create("p", "portfolio__card-description", {
      innerHTML: projectData[i].description,
    });
    const aCode = create("a", "portfolio__card-code", {
      href: projectData[i].code,
    });
    aCode.setAttribute("target", "_blank");
    aCode.innerHTML = "See code &#10142;";

    wrap.append(item);
    item.append(title);
    item.append(wrapPhoto);
    wrapPhoto.append(aPhoto);
    aPhoto.append(img);
    item.append(pDescription);
    item.append(aCode);
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
