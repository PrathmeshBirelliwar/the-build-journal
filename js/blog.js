(()=>{
const g=document.querySelector('[data-grid]');if(!g)return;
const cards=[...g.querySelectorAll('.card')],chips=document.querySelectorAll('.chip'),q=document.getElementById('q'),
 sort=document.getElementById('sort'),clear=document.getElementById('clear'),empty=document.getElementById('empty');
let cat='All';
const apply=()=>{const t=q?q.value.trim().toLowerCase():'';let n=0;g.classList.toggle('flt',g.classList.contains('list')||cat!=='All'||!!t);
 cards.forEach(c=>{const ok=(cat==='All'||c.dataset.cat===cat)&&(!t||c.dataset.text.includes(t));c.hidden=!ok;n+=ok});
 empty.hidden=n>0;chips.forEach(x=>{const on=x.dataset.cat===cat;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)})};
chips.forEach(x=>x.addEventListener('click',()=>{cat=x.dataset.cat;apply()}));
q&&q.addEventListener('input',apply);
sort&&sort.addEventListener('change',()=>{const d=sort.value==='old'?1:-1;
 cards.sort((a,b)=>d*a.dataset.date.localeCompare(b.dataset.date)).forEach(c=>g.append(c))});
clear&&clear.addEventListener('click',()=>{cat='All';q.value='';sort.value='new';sort.dispatchEvent(new Event('change'));apply()});
const p=new URLSearchParams(location.search);
if(q&&p.get('q'))q.value=p.get('q');apply();
})();
