document.addEventListener('DOMContentLoaded',()=>{
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1), el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
  }));
  // Prefill WhatsApp message
  const wa = document.querySelectorAll('a[href*="wa.me"]');
  wa.forEach(a=>a.setAttribute('href', `https://wa.me/525520162288?text=${encodeURIComponent('Hola, necesito una cotización. Mi referencia es 5520162288.')}`));
});
