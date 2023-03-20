export function create(type, classNM, options = {}) {
   const el = document.createElement(type);
   el.classList.add(classNM);
 
   if (options?.href) el.setAttribute("href", options.href);
   if (options?.src) el.setAttribute("src", options.src);
   if (options?.target) el.setAttribute("target", options.target);
   if (options?.innerHTML) el.innerHTML = options.innerHTML;
 
   return el;
 }