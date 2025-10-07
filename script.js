// script.js - animations, darkmode, back-to-top, reveal on scroll

// DARK / LIGHT toggle (persist)
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'dark') document.documentElement.classList.add('dark');

function toggleTheme(){
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
window.toggleTheme = toggleTheme;

// Back to top
const backBtn = document.createElement('button');
backBtn.id = 'backToTop';
backBtn.title = 'Back to top';
backBtn.innerHTML = '↑';
document.body.appendChild(backBtn);
backBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300) backBtn.classList.add('show'); else backBtn.classList.remove('show');
});

// IntersectionObserver for reveal animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.18});

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

  // Attach theme toggle button if placeholder exists
  const toggles = document.querySelectorAll('.theme-toggle');
  toggles.forEach(btn => btn.addEventListener('click', toggleTheme));

  // Simple smooth anchor scroll for local nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });

  // Simple form submission stub (client-only)
  document.querySelectorAll('.contact-form').forEach(f=>{
    f.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Thanks — message captured locally. (This demo does not send emails.)');
      f.reset();
    });
  });
});
