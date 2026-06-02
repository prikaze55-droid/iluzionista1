
const pb=document.getElementById('progressBar');const smoke=document.querySelector('.smoke-layer');
window.addEventListener('scroll',()=>{const h=document.documentElement;pb.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';smoke.style.transform=`translateY(${window.scrollY*0.04}px)`;document.querySelector('.hero').style.backgroundPositionY=`${window.scrollY*0.12}px`;});
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('visible')),{threshold:.12}).observe(el));
phoneBtn.onclick=()=>phoneBox.style.display=phoneBox.style.display==='block'?'none':'block';
const c=document.querySelector('.cursor');window.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';});
