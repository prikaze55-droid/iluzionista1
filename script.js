
document.getElementById('menuBtn').onclick=()=>document.getElementById('overlay').classList.add('show');
document.getElementById('closeBtn').onclick=()=>document.getElementById('overlay').classList.remove('show');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
