
document.getElementById('burger').onclick=()=>{
document.getElementById('mobileMenu').classList.toggle('show');
};

document.querySelectorAll('.faq-btn').forEach(btn=>{
btn.onclick=()=>{
const c=btn.nextElementSibling;
c.style.display=c.style.display==='block'?'none':'block';
};
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

let i=0;
const reviews=document.querySelectorAll('.review');
setInterval(()=>{
reviews[i].classList.remove('active');
i=(i+1)%reviews.length;
reviews[i].classList.add('active');
},4000);
