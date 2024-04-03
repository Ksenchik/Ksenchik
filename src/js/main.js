import { animation } from "./animation.js";
import { burger } from "./burger.js";
import { modalOpen, modalWrite } from "./modal.js";
import { createSlider } from "./slider.js";

document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('.loader');
  app(); 
  preloader.style.display = 'none'; 
});

function app() {
  burger();
  animation();
  modalOpen();
  modalWrite();
  createSlider();
}