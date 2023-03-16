export function animation(entry) {
  if (entry)
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("el-show");
      } else {
        change.target.classList.remove("el-show");
      }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(animation, options);

const elements = [
  ...document.querySelectorAll(".animation-x-l"),
  ...document.querySelectorAll(".animation-x-r"),
  ...document.querySelectorAll(".animation-y"),
  ...document.querySelectorAll(".animation-about"),
  ...document.querySelectorAll(".about__photo-1"),
  ...document.querySelectorAll(".about__photo-2"),
  ...document.querySelectorAll(".about__photo-3"),
  ...document.querySelectorAll(".about__photo-4")
];

for (let el of elements) {
  observer.observe(el);
}
