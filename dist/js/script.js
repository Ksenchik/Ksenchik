import { animation } from "./animation.js";
import { burger } from "./burger.js";
import { modalOpen, modalWrite } from "./modal.js";
import { createSlider } from "./slider.js";
// import { galleryLeft, galleryRight } from "./slider.js";

function app() {
  burger();
//   galleryRight();
//   galleryLeft();
  animation();
  modalOpen();
  modalWrite();
  createSlider();
}












app();
