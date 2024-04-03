import { animation } from "./animation.js";
import { burger } from "./burger.js";
import { modalOpen, modalWrite } from "./modal.js";
import { createSlider } from "./slider.js";

window.addEventListener('load', function() {
  const preloader = document.querySelector('.loader');

  preloader.style.display = 'none';
});

function app() {
  burger();
  animation();
  modalOpen();
  modalWrite();
  createSlider();
}

app();