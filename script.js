
document.getElementById('menuBtn').onclick=()=>document.getElementById('menu').classList.toggle('show');
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}));
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
