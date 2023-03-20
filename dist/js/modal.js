import { projectData } from "./projectData.js";

export function modalOpen() {
  const modal = document.querySelector(".modal");
  const btn = document.querySelector(".portfolio__gallery-see-all");
  const span = document.querySelector(".modal__close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

let container = document.querySelector(".modal__projects");

export function modalWrite() {
  for (let i = 0; i < projectData.length; i++) {
    let item = document.createElement("div");
    let title = document.createElement("h6");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let p = document.createElement("p");
    item.classList.add("modal__projects-item");
    title.classList.add("modal__projects-name");
    a.classList.add("modal__projects-link");
    a.setAttribute("href", "somelink url");
    a.setAttribute("target", "_blank");
    img.classList.add("modal__projects-img");
    img.setAttribute("src", "searchPic");
    p.classList.add("modal__projects-description");

    container.append(item);
    item.append(title);
    title.innerHTML = projectData[i].name;
    item.append(a);
    a.href = projectData[i].link;
    a.append(img);
    img.src = projectData[i].image;
    item.append(p);
    p.innerHTML = projectData[i].description;
  }
}
