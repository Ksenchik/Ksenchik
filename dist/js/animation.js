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
  ...document.querySelectorAll(".photo-1"),
  ...document.querySelectorAll(".photo-2"),
  ...document.querySelectorAll(".photo-3"),
  ...document.querySelectorAll(".photo-4"),
];

for (let el of elements) {
  observer.observe(el);
}
