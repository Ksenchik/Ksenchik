import { create } from "./create.js";
import { projectData } from "./projectData.js";

export function modalOpen() {
  const modal = document.querySelector(".modal");
  const modalSF = document.querySelector(".courses__modal");
  const btn = document.querySelector(".portfolio__gallery-see-all");
  const btnSF = document.querySelector(".courses__certificate");
  const close = document.querySelector(".modal__close");
  const closeSF = document.querySelector(".courses__modal-close");
  const contentBody = document.querySelector("body");

  btn.onclick = function () {
    modal.style.display = "block";
    contentBody.classList.toggle("lock");
  };

  btnSF.onclick = function () {
   modalSF.style.display = "block";
   contentBody.classList.toggle("lock");
 };

  close.onclick = function () {
    modal.style.display = "none";
    contentBody.classList.remove("lock");
  };

  closeSF.onclick = function () {
   modalSF.style.display = "none";
   contentBody.classList.remove("lock");
 };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      contentBody.classList.remove("lock");
    };
    if (event.target == modalSF) {
      modalSF.style.display = "none";
     contentBody.classList.remove("lock");
   }
  };
}

let container = document.querySelector(".modal__projects");

export function modalWrite() {
  for (let i = 0; i < projectData.length; i++) {
    const item = create("div", "modal__projects-item");
    const title = create("h6", "modal__projects-name", {innerHTML: projectData[i].name,});
    const a = create("a", "modal__projects-link", {href: projectData[i].link,});
    a.setAttribute("target", "_blank");
    const img = create("img", "modal__projects-img", {src: projectData[i].image,});
    const p = create("p", "modal__projects-description", {innerHTML: projectData[i].description,});

    container.append(item);
    item.append(title);
    item.append(a);
    a.append(img);
    item.append(p);
  }
}