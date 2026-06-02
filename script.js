
document.getElementById('burger')?.addEventListener('click',()=>{
document.getElementById('mobileMenu')?.classList.toggle('show');
});
window.addEventListener('scroll',()=>{
const h=document.documentElement;
const sc=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
const pb=document.getElementById('progressBar');
if(pb) pb.style.width=sc+'%';
document.querySelectorAll('.format-card').forEach((c,i)=>{
c.style.transform=`translateY(${window.scrollY*0.03*(i+1)}px)`;
});
});
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
