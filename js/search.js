// Search icon: on the Blog page focus the search box; elsewhere it links to blog.html?focus=1
(()=>{const q=document.getElementById('q'),btn=document.getElementById('searchBtn');
if(q){btn&&btn.addEventListener('click',e=>{e.preventDefault();q.focus();q.scrollIntoView({block:'center',behavior:'smooth'})});
if(new URLSearchParams(location.search).get('focus'))q.focus()}})();
