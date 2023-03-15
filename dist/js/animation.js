export function animation(entry){
   // console.log(entry)
   if (entry) entry.forEach;
   entry.forEach(change => {
      if(change.isIntersecting){
         change.target.classList.add('el-show');
      } else {
         change.target.classList.remove('el-show');
      }
   });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(animation, options);
let elements = document.querySelectorAll('.animation-x-l');
let elements2 = document.querySelectorAll('.animation-x-r');
let elements3 = document.querySelectorAll('.animation-y');

for(let el of elements){
   observer.observe(el);
}
for(let el of elements2){
   observer.observe(el);
}
for(let el of elements3){
   observer.observe(el);
}