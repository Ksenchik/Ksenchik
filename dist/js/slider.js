import { projectData } from "./projectData.js";

let order = 0;

const left = document.querySelector(".portfolio__card-ntn-left");
const right = document.querySelector(".portfolio__card-ntn-right");

right.addEventListener("click", () => {
  order++;
  galleryRight();
});

left.addEventListener("click", () => {
  order--;
  galleryLeft();
});

function write() {
  document.querySelector(".portfolio__card-title").innerHTML =
    projectData[order].name;
  document.querySelector(".portfolio__card-img").src = projectData[order].image;
  document.querySelector(".portfolio__card-link").href =
    projectData[order].link;
  document.querySelector(".portfolio__card-description").innerHTML =
    projectData[order].description;
  document.querySelector(".portfolio__card-code").href =
    projectData[order].code;
}

export function galleryRight() {
  if (order >= projectData.length) {
    order = 0;
  }
  write();
}

export function galleryLeft() {
  if (order < 0) {
    order = projectData.length;
  }
  write();
}
