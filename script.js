
const pb=document.getElementById('progressBar');const smoke=document.querySelector('.smoke-layer');
window.addEventListener('scroll',()=>{const h=document.documentElement;pb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';smoke.style.transform=`translateY(${window.scrollY*0.04}px)`;document.querySelector('.hero').style.backgroundPositionY=`${window.scrollY*0.03}px`;});
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('visible')),{threshold:.12}).observe(el));
phoneBtn.onclick=()=>phoneBox.style.display=phoneBox.style.display==='block'?'none':'block';
const c=document.querySelector('.cursor');window.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';});

window.addEventListener('scroll',()=>{
const nav=document.querySelector('.nav');
if(window.scrollY>60){nav.style.background='transparent';}
else{nav.style.background='transparent';}
});

const mt=document.querySelector('.menu-toggle');
const mo=document.querySelector('.menu-overlay');
if(mt) mt.onclick=()=>mo.classList.toggle('open');
document.querySelectorAll('.menu-overlay a').forEach(a=>a.onclick=()=>mo.classList.remove('open'));
window.addEventListener('scroll',()=>{
const n=document.querySelector('.nav');
if(window.scrollY>20)n.classList.add('scrolled');else n.classList.remove('scrolled');
});
document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));


// repeatable reveal system
const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
      entry.target.classList.add('visible');
   }else{
      entry.target.classList.remove('visible');
   }
 });
},{threshold:0.18});

document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));


const track=document.querySelector('.gallery-track');
document.getElementById('galPrev')?.addEventListener('click',()=>track.scrollBy({left:-600,behavior:'smooth'}));
document.getElementById('galNext')?.addEventListener('click',()=>track.scrollBy({left:600,behavior:'smooth'}));

const lb=document.getElementById('lightbox');
const lbi=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-track img').forEach(i=>{
 i.addEventListener('click',()=>{lb.classList.add('open');lbi.src=i.src;});
});
lb?.addEventListener('click',()=>lb.classList.remove('open'));
