import { projectData } from "./projectData.js";
import { create } from "./create.js";

// let order = 0;

// const left = document.querySelector(".portfolio__card-ntn-left");
// const right = document.querySelector(".portfolio__card-ntn-right");

// right.addEventListener("click", () => {
//   order++;
//   galleryRight();
// });

// left.addEventListener("click", () => {
//   order--;
//   galleryLeft();
// });

// function write() {
//   document.querySelector(".portfolio__card-title").innerHTML =
//     projectData[order].name;
//   document.querySelector(".portfolio__card-img").src = projectData[order].image;
//   document.querySelector(".portfolio__card-link").href =
//     projectData[order].link;
//   document.querySelector(".portfolio__card-description").innerHTML =
//     projectData[order].description;
//   document.querySelector(".portfolio__card-code").href =
//     projectData[order].code;
// }

// export function galleryRight() {
//   if (order >= projectData.length) {
//     order = 0;
//   }
//   write();
// }

// export function galleryLeft() {
//   if (order < 0) {
//     order = projectData.length;
//   }
//   write();
// }

// import Swiper from '../slider/swiper-bundle.esm.browser.min.js'



 const wrap = document.querySelector('.slider-line');

 export function createSlider(){
   for (let i = 0; i < projectData.length; i++){
      const item = create('div', 'slider-item');
      const title = create('h4', 'portfolio__card-title', {innerHTML: projectData[i].name,});
      const wrapPhoto = create('div', 'portfolio__card-photo');
      const aPhoto = create('a', 'portfolio__card-link', {href: projectData[i].link,});
      aPhoto.setAttribute("target", "_blank");
      const img = create('img', 'portfolio__card-img', {src: projectData[i].image,});
      const pDescription = create('p', 'portfolio__card-description', {innerHTML: projectData[i].description,});
      const aCode = create('a', 'portfolio__card-code', {href: projectData[i].code,})
      aCode.setAttribute("target", "_blank");
      aCode.innerHTML = 'See code &#10142;';

      wrap.append(item);
      item.append(title);
      item.append(wrapPhoto);
      wrapPhoto.append(aPhoto);
      aPhoto.append(img);
      item.append(pDescription);
      item.append(aCode);
   }
 }


 let offset = 0;
 let widthItem = 0;
 if(document.documentElement.clientWidth < 768){
   widthItem = 280;
} else{
   widthItem = 700;
}

 const sliderLine = document.querySelector('.slider-line');
 sliderLine.style.width = widthItem * projectData.length;

 document.querySelector('.portfolio__card-ntn-right').addEventListener('click', function(){
     
   offset = offset + widthItem;
   if(offset > (widthItem * (projectData.length - 1))){
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';

 })

 document.querySelector('.portfolio__card-ntn-left').addEventListener('click', function(){
     
   offset = offset - widthItem;
   if(offset < 0){
      offset = widthItem * (projectData.length - 1);
   }
   sliderLine.style.left = -offset + 'px';

 })

