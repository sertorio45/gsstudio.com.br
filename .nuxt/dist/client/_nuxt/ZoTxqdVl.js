import{q as a}from"./DEIQAQ4v.js";function i(){a(()=>{const n=document.querySelectorAll(".gscard"),o=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){const s=Math.random()*500;setTimeout(()=>{t.target.classList.add("animate"),o.unobserve(t.target)},s)}})},{threshold:.3});n.forEach(e=>{e.getBoundingClientRect().top<window.innerHeight?e.classList.add("animate"):o.observe(e)})})}export{i as u};
