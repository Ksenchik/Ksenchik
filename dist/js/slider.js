import { projectData } from "./projectData.js";

let order = 0;
let slider = document.querySelector(".slider");

let cardSize = 716;
if(document.documentElement.clientWidth < 768){
   cardSize = 296;
}

// slider.src = projectData[order].image;
// document.querySelector('.slider-img').src = projectData[order].image;

