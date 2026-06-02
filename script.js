
window.addEventListener('scroll',()=>{const h=document.documentElement;progressBar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100+'%';document.querySelector('.hero').style.backgroundPositionY=(window.scrollY*0.15)+'px';});
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12}).observe(document.querySelector('#about'));
document.querySelectorAll('.reveal').forEach(el=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12}).observe(el));
mailBtn.onclick=(e)=>{e.preventDefault();mailModal.style.display='block';}
document.querySelector('#mailModal button').onclick=()=>mailModal.style.display='none';
phoneBtn.onclick=(e)=>{e.preventDefault();phoneBox.style.display=phoneBox.style.display==='block'?'none':'block';}
