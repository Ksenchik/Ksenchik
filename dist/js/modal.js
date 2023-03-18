export function modalOpen() {
  const buttonOpen = document.querySelector(".portfolio__gallery-see-all");
  const modal = document.querySelector(".modal");
  const contentBody = document.querySelector("body");

  buttonOpen.onclick = function () {
    modal.classList.add("active");
    contentBody.classList.add("lock");
  };

  modal.onclick = function () {
    modal.classList.remove("active");
    contentBody.classList.remove("lock");
  };
}
