
const pb=document.getElementById('progressBar');
const smoke=document.querySelector('.smoke-layer');
const heroImage=document.querySelector('.hero-image');

window.addEventListener('scroll',()=>{
 const h=document.documentElement;
 pb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';
 if(smoke) smoke.style.transform=`translateY(${window.scrollY*0.04}px)`;
 if(heroImage) heroImage.style.transform=`translateY(${window.scrollY*0.003}px)`;
});

const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting) entry.target.classList.add('visible');
   else entry.target.classList.remove('visible');
 });
},{threshold:.18});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));

const mt=document.querySelector('.menu-toggle');
const mo=document.querySelector('.menu-overlay');
if(mt&&mo){
 mt.onclick=()=>mo.classList.toggle('open');
 document.querySelectorAll('.menu-overlay a').forEach(a=>a.onclick=()=>mo.classList.remove('open'));
}

const c=document.querySelector('.cursor');
if(c){
 window.addEventListener('mousemove',e=>{
  c.style.left=e.clientX+'px';
  c.style.top=e.clientY+'px';
 });
}
