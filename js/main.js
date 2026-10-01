(()=>{
const nav=document.querySelector('.nav'),b=document.querySelector('.burger'),m=document.getElementById('menu');
const onS=()=>nav.classList.toggle('scrolled',scrollY>8);onS();addEventListener('scroll',onS,{passive:true});
const set=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')};
b.addEventListener('click',()=>set(b.getAttribute('aria-expanded')!=='true'));
addEventListener('keydown',e=>e.key==='Escape'&&set(false));m.addEventListener('click',e=>e.target.tagName==='A'&&set(false));
const nf=document.getElementById('news');
nf&&nf.addEventListener('submit',e=>{e.preventDefault();const i=nf.querySelector('input'),o=nf.querySelector('.msg');
 if(!i.checkValidity()){o.style.color='#A12A2A';o.textContent='Enter a valid email address.';i.focus();return}
 o.style.color='';o.textContent='Thanks. You are on the list (demo only: no email was sent).';nf.reset()});
const cf=document.getElementById('cform');
if(cf){const R={n:'Enter your name.',e:'Enter a valid email address.',s:'Add a subject.',m:'Write at least 20 characters.'};
 cf.addEventListener('submit',e=>{e.preventDefault();let bad=null;
  cf.querySelectorAll('input,textarea').forEach(f=>{const ok=f.value.trim()&&f.checkValidity(),er=f.parentNode.querySelector('.err');
   f.setAttribute('aria-invalid',!ok);er.textContent=ok?'':R[f.id];if(!ok&&!bad)bad=f});
  const o=cf.querySelector('.msg');if(bad){bad.focus();o.textContent='';return}
  o.textContent='Message received. Thanks for writing: I will reply within a few days (demo only: nothing was sent).';cf.reset()})}
const c=document.getElementById('copy');
c&&c.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(c.dataset.url);c.textContent='Copied'}catch{c.textContent='Copy failed'}});
})();
(()=>{const a=document.querySelector('.body');if(!a)return;
const p=document.createElement('div');p.className='prog';document.body.append(p);
const u=()=>{const r=a.getBoundingClientRect(),t=r.height-innerHeight*.5;p.style.width=Math.min(100,Math.max(0,-r.top/t*100))+'%'};
addEventListener('scroll',u,{passive:true});u()})();
