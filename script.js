const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click',()=>nav.classList.remove('open'));
});
document.getElementById('year').textContent=new Date().getFullYear();
const sections=document.querySelectorAll('section[id]');
const links=document.querySelectorAll('.nav a');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-160) current=section.id;
  });
  links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current));
});
