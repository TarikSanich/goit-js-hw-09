import"./assets/styles-5d2db232.js";import{d as s}from"./assets/vendor-cfef1661.js";const t=document.querySelector(".feedback-form"),r="feedback-form-state";try{const a=JSON.parse(localStorage.getItem(r))||{};Array.from(t.elements).forEach(e=>{const o=a[e.name];(e.name==="email"||e.name==="message")&&o!==void 0&&(e.value=o.trim())})}catch{console.error("LOCAL STORAGE PARSE ERROR")}t.addEventListener("input",s(()=>{const a=new FormData(t),e={};a.forEach((o,m)=>{e[m]=o.trim()}),localStorage.setItem(r,JSON.stringify(e))},300));t.addEventListener("submit",a=>{a.preventDefault(),console.log({email:t.elements.email.value.trim(),message:t.elements.message.value.trim()}),localStorage.removeItem(r),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map