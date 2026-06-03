
const pb=document.getElementById('progressBar');
const smoke=document.querySelector('.smoke-layer');
const heroImage=document.querySelector('.hero-image');

window.addEventListener('scroll',()=>{
 const h=document.documentElement;
 pb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';
 if(smoke) smoke.style.transform=`translateY(${window.scrollY*0.03}px)`;
 if(heroImage) heroImage.style.transform=`translateY(${window.scrollY*0.01}px) scale(1.08)`;

 const nav=document.querySelector('.nav');
 if(nav) nav.classList.toggle('scrolled', window.scrollY>50);
});

const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(e=>e.target.classList.toggle('visible',e.isIntersecting));
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));

const mt=document.querySelector('.menu-toggle');
const mo=document.querySelector('.menu-overlay');
if(mt&&mo){
 mt.onclick=()=>mo.classList.toggle('open');
 document.querySelectorAll('.menu-overlay a').forEach(a=>a.onclick=()=>mo.classList.remove('open'));
}

const track=document.querySelector('.gallery-track');
document.querySelector('.gallery-next')?.addEventListener('click',()=>track.scrollBy({left:500,behavior:'smooth'}));
document.querySelector('.gallery-prev')?.addEventListener('click',()=>track.scrollBy({left:-500,behavior:'smooth'}));
