document.getElementById('burger')?.addEventListener('click',()=>{
document.getElementById('mobileMenu').classList.toggle('show');
});

window.addEventListener('scroll',()=>{
const h=document.documentElement;
const sc=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
document.getElementById('progressBar').style.width=sc+'%';
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

let i=0;
const reviews=document.querySelectorAll('.review');
setInterval(()=>{
if(!reviews.length) return;
reviews[i].classList.remove('active');
i=(i+1)%reviews.length;
reviews[i].classList.add('active');
},5000);