const A=window.ANAVA,app=document.querySelector('#app'),dialog=document.querySelector('#project'),lightbox=document.querySelector('#lightbox');
const arrow='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const mutedIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><line x1="16" y1="9" x2="21" y2="15"/><line x1="21" y1="9" x2="16" y2="15"/></svg>';
const unmutedIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18 6a8.5 8.5 0 0 1 0 12"/></svg>';
const chevron='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 6l-6 6 6 6"/></svg>';
const buildingIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="9" width="16" height="12" rx="1"/><path d="M9 21V9M15 21V9M4 9l8-6 8 6"/></svg>';
const filmIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="14" height="12" rx="1.5"/><path d="M16.5 10l5-3v10l-5-3"/></svg>';
const peopleIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3"/></svg>';
const globeIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z"/></svg>';
const bulbIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z"/></svg>';
const clapperIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z"/><path d="m4 11 3-7h3l-3 7"/><path d="m10 11 3-7h3l-3 7"/><path d="m16 11 3-7h1l-3 7"/></svg>';
const finishIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9h-9V3z"/><path d="M12 12 5.6 5.6"/><path d="M12 12v9"/></svg>';
const targetIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none"/></svg>';
const boltIcon='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>';
const pinIcon='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-7.58 7-12A7 7 0 0 0 5 10c0 4.42 7 12 7 12Z"/><circle cx="12" cy="10" r="2.4"/></svg>';
lightbox.querySelector('img')?.remove();
lightbox.insertAdjacentHTML('beforeend',`<div class="lightbox-stage"><img id="lightbox-image" alt=""><img id="lightbox-image-b" alt=""><div class="lightbox-counter">FRAME <span id="lightbox-count">01</span> / <span id="lightbox-total">01</span></div><button type="button" class="lightbox-nav prev" aria-label="Previous image">${chevron}</button><button type="button" class="lightbox-nav next" aria-label="Next image">${chevron}</button></div>`);
const imageWidths={};
const responsiveImage=(src,sizes='(max-width: 760px) 92vw, 70vw')=>imageWidths[src]?`srcset="${src.replace(/\.(jpe?g|png|webp)$/i,'-640.$1')} 640w, ${src} ${imageWidths[src]}w" sizes="${sizes}" decoding="async"`:'decoding="async"';
const MOTION={reveal:.65,feedback:.3,stagger:.08,scrub:1.1,ease:'power2.out'};
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let lenis;
function initLenis(){
  if(!window.Lenis||reducedMotion.matches||lenis)return;
  lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothTouch:false});
  lenis.on('scroll',()=>window.ScrollTrigger?.update());
  if(window.gsap){
    gsap.ticker.add(time=>lenis.raf(time*1000));
    gsap.ticker.lagSmoothing(0);
  }
  window.lenis=lenis;
}
initLenis();
const headerEl=document.querySelector('header');
function onHeaderScroll(){if(headerEl)headerEl.classList.toggle('scrolled',window.scrollY>40)}
onHeaderScroll();
window.addEventListener('scroll',onHeaderScroll,{passive:true});
const interactionTweens=new Set();
function settleInteractions(){interactionTweens.forEach(t=>{t.progress(1);t.kill()});interactionTweens.clear()}
reducedMotion.addEventListener('change',e=>{
  if(e.matches){
    settleInteractions();
    if(lenis){lenis.destroy();lenis=null;window.lenis=null}
  }else{
    initLenis();
  }
});
function interactionTween(target,from,to){let tween;tween=gsap.fromTo(target,from,{...to,onComplete:()=>interactionTweens.delete(tween),onInterrupt:()=>interactionTweens.delete(tween)});interactionTweens.add(tween);return tween}
const steps=[['The thought','A brief, a problem, a product. Or simply a thought.'],['The idea','We explore creative directions and find the idea worth making.'],['The deck','Concept, treatment, script and references become one visual world.'],['Pre-production','The right crew, cast, locations and a considered plan.'],['The shoot','The idea leaves the page. The deck becomes reality.'],['Post-production','Edit, music, sound, colour, VFX and the finishing details.'],['Delivery','One finished idea. Every format it needs to reach its audience.']];
const services=[['Think.','Creative direction · Ideation & concept development · Scripting · Creative consulting'],['Make.','Production · Direction · Casting · Art direction'],['Finish.','Offline editing · Music & sound · Colour & online · VFX & mastering']];
const card=p=>`<button class="card reveal" data-project="${p.id}" aria-label="Explore project ${p.title}"><div class="card-image"><img ${responsiveImage(p.image)} src="${p.image}" alt="${p.title}" loading="lazy" width="1200" height="900"><span class="open-arrow">${arrow}</span></div><div class="card-meta"><h3>${p.title}</h3><small>${p.client}</small></div></button>`;
const people=()=>`<div class="people">${A.founders.map((p,i)=>`<article class="person reveal">${p.photo?`<img class="person-photo" ${responsiveImage(p.photo,'(max-width: 760px) 80vw, 40vw')} src="${p.photo}" alt="${p.name}" loading="lazy" width="320" height="427">`:`<span class="initial" aria-hidden="true">${i?'ak.':'jk.'}</span>`}<div class="person-info"><h3>${p.name}</h3><small>${p.role}</small><p>${p.copy}</p>${p.continuation?`<p>${p.continuation}</p>`:''}${p.quote?`<blockquote class="person-quote">${p.quote}</blockquote>`:''}</div></article>`).join('')}</div>`;
const closeSection=()=>`<section class="closing"><span class="eyebrow reveal">Every good film starts somewhere.</span><h2 class="reveal">Got a <em>thought?</em></h2><p class="reveal">You don’t need a finished brief.<br>Just a place to begin.</p><a class="pill" href="#contact">Let’s make it ${arrow}</a></section>`;
const serviceSection=()=>`<section class="dark"><span class="eyebrow">One team. From beginning to end.</span>${services.map((s,i)=>`<div class="service-row reveal"><span class="num">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}<p style="margin-top:35px"><a class="text-link" href="#services">Explore our capabilities ↗</a></p></section>`;
const pageHead=(label,title,copy='')=>`<section class="page-head"><span class="eyebrow">${label}</span><h1 class="reveal">${title}</h1>${copy?`<p class="reveal">${copy}</p>`:''}</section>`;
const clientLogosList=[
  {name:'Godrej Properties',logo:'assets/clients/godrej-properties.png',width:145},
  {name:'Lenskart',logo:'assets/clients/lenskart.png',width:215},
  {name:'KFC',logo:'assets/clients/kfc.png',width:66},
  {name:'Tira Beauty',logo:'assets/clients/tira.png',width:70},
  {name:'Celio',logo:'assets/clients/celio.png',width:142},
  {name:'WOW Skin Science',logo:'assets/clients/wow-skin-science.png',width:60},
  {name:'FIKN Elixir',logo:'assets/clients/fikn.png',width:97},
  {name:'SimplAI',logo:'assets/clients/simplai.png',width:76},
  {name:'Indus Valley',logo:'assets/clients/indus-valley.png',width:97},
  {name:'Green Lotus',logo:'assets/clients/green-lotus.png',width:88}
];
const clientLogoItem=c=>`<div class="logo-item"><img src="${c.logo}" alt="${c.name}" width="${c.width}" height="32"><span class="logo-divider" aria-hidden="true"></span></div>`;
function clientLogos(){const set=clientLogosList.map(clientLogoItem).join('');return `<section class="logo-marquee-section" aria-label="Brands we work with"><div class="logo-marquee"><div class="logo-marquee-track">${set}${set}</div></div></section>`}
function brandsSection(){return `<section class="brands-hero" aria-label="What brands say"><div class="brands-hero-bg"><img src="assets/what brand say.jpg" alt="Behind the scenes on set" loading="lazy" width="1600" height="1000"></div><div class="brands-hero-inner"><span class="eyebrow reveal">COLLABORATORS</span><h2 class="reveal">What Brands <em>Say</em></h2><p class="reveal">Your friendly neighbourhood ANAVA FILMS.</p></div></section>`}
function home(){return `<section class="hero"><div class="hero-bg"><img src="assets/hero-bg.jpg" alt="" fetchpriority="high" width="1600" height="1000"></div><div class="hero-content"><span class="eyebrow hero-eyebrow reveal">Independent thinking. Collective making.</span><h1><span class="hero-line">Give us a thought.</span><br><span class="hero-line"><em class="hero-light-em">We’ll give you </em><em>ideas to shoot.</em></span></h1><p class="reveal">Anava Films is an agency-cum-production house built to take a thought all the way to the final frame.<br>We work across creative direction, ideation, scripting, production, direction and post-production<br>helping brands turn briefs into ideas, and ideas into films, campaigns and content.</p><div class="hero-ctas reveal"><a class="pill" href="#work">Explore our work ${arrow}</a><a class="pill secondary" href="#contact">Let’s talk ${arrow}</a></div></div><div class="hero-bottom-left"><svg class="hero-location-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg><span>Mumbai &amp; Delhi <span class="hero-bottom-sep" aria-hidden="true">·</span> Available everywhere</span></div><div class="hero-bottom-right" aria-hidden="true"><span class="hero-scroll-label">Scroll to explore</span><span class="hero-scroll-arrow">↓</span></div></section>${clientLogos()}<section class="film-stage"><div class="film-stage-head reveal"><span class="film-eyebrow">FEATURED PROJECT</span><span class="film-meta">TVCS · Sunil Shetty</span></div><div class="film reveal"><video src="assets/tvc/sunil-shetty-brand-film.mp4" poster="assets/tvc/sunil-shetty-brand-film.jpg" width="1600" height="1100" autoplay muted loop playsinline aria-label="Sunil Shetty — Brand Film — creative direction"></video><div class="film-label"><h2>Sunil Shetty — Brand Film.</h2></div><a class="play" href="#work" aria-label="Explore our work">${arrow}</a></div></section><section class="section intro"><span class="intro-label reveal">OUR PHILOSOPHY</span><div class="intro-photo reveal"><img src="assets/thinkers-who-make.jpg" alt="Thinkers who make — the ANAVA Films philosophy" loading="lazy" width="576" height="720"></div><div><h2 class="reveal">Thinkers <em>who make</em>.</h2><p class="reveal">Anava Films sits somewhere between an agency and a production house. We believe great ideas shouldn’t get lost between the people who think them and the people who make them.</p><p class="reveal">So we bring both sides together. You bring the thought. We build the idea, make the film and deliver the final product.</p><div class="philosophy-process reveal"><span>THINK</span><span class="philosophy-arrow" aria-hidden="true">→</span><span>MAKE</span><span class="philosophy-arrow" aria-hidden="true">→</span><span>DELIVER</span></div><a class="pill philosophy-cta reveal" href="#work">Watch the showreel 2026 ${arrow}</a></div><span class="intro-watermark" aria-hidden="true">PHILOSOPHY</span></section>${impactSection()}<section class="section"><div class="section-heading"><div><span class="eyebrow">02 / Selected perspectives</span><h2 class="reveal">Work that stays<br>with you.</h2></div><a class="text-link" href="#work">All work ↗</a></div><div class="grid">${['sunil-shetty-brand-film','lenskart-hustler'].map(id=>A.projects.find(p=>p.id===id)).filter(Boolean).map(card).join('')}</div></section><div class="motion-line" aria-hidden="true"><div>Thought. <em>Idea.</em> Action. Thought. <em>Idea.</em> Action.</div></div><section class="section"><div class="section-heading"><div><span class="eyebrow">03 / The way we work</span><h2 class="reveal">From thought<br>to screen.</h2></div><a class="text-link" href="#process">Our process ↗</a></div><div class="process-list">${[steps[0],steps[1],steps[4]].map((s,i)=>`<article class="process-item reveal"><small>0${i+1}</small><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div></section><section class="section"><span class="eyebrow">04 / The people behind the frame</span><h2 class="big reveal">The People<br><em>Behind Anava</em></h2>${people()}</section>${brandsSection()}${locationSection()}${collabSection()}`}
const workCategories=['TVCS','VERTICAL','EVENTS','PHOTOSHOOTS','TESTIMONIALS'];
const categoryName=c=>({TVCS:'TVCs / Digital',TESTIMONIALS:'Testimonials',VERTICAL:'Vertical',PHOTOSHOOTS:'Photoshoots',EVENTS:'Events'}[c]);
const portraitCategories=new Set(['VERTICAL','EVENTS']);
const isPortrait=p=>portraitCategories.has(p.category);
const supportsHoverReveal=()=>matchMedia('(hover: hover) and (pointer: fine)').matches&&!reducedMotion.matches;
const videoMode=cat=>cat==='VERTICAL'?'click':(cat==='EVENTS'||cat==='TESTIMONIALS')?'autoplay':'hover';
const archiveMedia=(p,mode)=>p.video?(mode==='hover'?`<img class="archive-poster" src="${p.image||''}" alt="${p.title}" loading="lazy" width="1200" height="900"><video class="lazy-video archive-video" muted loop playsinline preload="none" data-src="${p.video}" aria-label="${p.title}"></video>`:`<video class="lazy-video archive-video" muted loop playsinline preload="none" poster="${p.image||''}" data-src="${p.video}" aria-label="${p.title}"></video>`):p.raw&&supportsHoverReveal()?`<img class="archive-raw" src="${p.raw}" alt="${p.title}" loading="lazy" width="1200" height="900"><img class="archive-edited" ${responsiveImage(p.image)} src="${p.image}" alt="" aria-hidden="true" loading="lazy" width="1200" height="900">`:p.image?`<img ${responsiveImage(p.image)} src="${p.image}" alt="${p.title}" loading="lazy" width="1200" height="900">`:'';
function archiveCard(p,i){const hasVideo=!!p.video,mode=videoMode(p.category);return `<button class="archive-card ${isPortrait(p)?'portrait':''}" data-project="${p.id}"${hasVideo?` data-video-mode="${mode}"`:''}><div class="archive-image">${archiveMedia(p,mode)}<span class="archive-badge">${(p.client||'').toUpperCase()}</span>${hasVideo?`<span class="archive-mute" role="button" tabindex="0" aria-label="Unmute video" aria-pressed="false">${mutedIcon}</span>`:''}${hasVideo?`<span class="archive-play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>`:''}</div><div class="archive-caption-new"><h3>${p.title.toUpperCase()}</h3><p class="archive-format">${p.format||categoryName(p.category)}</p>${p.tagline?`<p class="archive-tagline">${p.tagline}</p>`:''}</div></button>`}
let lazyVideoObserver;
function initLazyVideos(){if(!lazyVideoObserver)lazyVideoObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const v=entry.target;if(v.dataset.src){v.src=v.dataset.src;v.removeAttribute('data-src');v.load();if(v.closest('.archive-card')?.dataset.videoMode==='autoplay')v.play().catch(()=>{})}lazyVideoObserver.unobserve(v)})},{rootMargin:'200px'});document.querySelectorAll('.lazy-video[data-src]').forEach(v=>lazyVideoObserver.observe(v))}
let currentGallery=[],lightboxIndex=0,lightboxLayer=0,galleryTriggers=[];
function killGalleryTriggers(){galleryTriggers.forEach(t=>t.kill());galleryTriggers=[]}
function initGalleryWipe(selector,scroller){killGalleryTriggers();const thumbs=document.querySelectorAll(selector);if(!thumbs.length||!window.gsap||!window.ScrollTrigger||reducedMotion.matches)return;gsap.set(thumbs,{clipPath:'inset(0 0 100% 0)'});const opts={start:'top 92%',once:true,onEnter:batch=>gsap.to(batch,{clipPath:'inset(0 0% 0 0)',duration:.5,ease:'power2.out',stagger:.05,overwrite:true})};if(scroller)opts.scroller=scroller;galleryTriggers=ScrollTrigger.batch(thumbs,opts);ScrollTrigger.refresh()}
function lightboxImgs(){return [document.querySelector('#lightbox-image'),document.querySelector('#lightbox-image-b')]}
function setBackdropVisible(v){requestAnimationFrame(()=>lightbox.classList.toggle('visible',v))}
function updateLightboxCounter(){const c=document.querySelector('#lightbox-count'),t=document.querySelector('#lightbox-total');if(c)c.textContent=String(lightboxIndex+1).padStart(2,'0');if(t)t.textContent=String(currentGallery.length).padStart(2,'0')}
function openLightbox(index){if(!currentGallery.length)return;lightboxIndex=index;lightboxLayer=0;const[a,b]=lightboxImgs();a.src=currentGallery[index];b.removeAttribute('src');a.style.zIndex='2';b.style.zIndex='1';lightbox.classList.remove('visible');lightbox.showModal();setBackdropVisible(true);updateLightboxCounter();lenis?.stop();if(window.gsap&&!reducedMotion.matches)interactionTween(a,{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)',duration:.45,ease:'power3.out',overwrite:true});else a.style.clipPath='inset(0 0% 0 0)'}
function lightboxNav(dir){if(currentGallery.length<2)return;lightboxIndex=(lightboxIndex+dir+currentGallery.length)%currentGallery.length;const imgs=lightboxImgs();const outgoing=imgs[lightboxLayer];const incoming=imgs[1-lightboxLayer];incoming.src=currentGallery[lightboxIndex];incoming.style.zIndex='2';outgoing.style.zIndex='1';const enterFrom=dir>0?'inset(0 0 0 100%)':'inset(0 100% 0 0)';updateLightboxCounter();if(window.gsap&&!reducedMotion.matches)interactionTween(incoming,{clipPath:enterFrom},{clipPath:'inset(0 0% 0 0)',duration:.36,ease:'power2.inOut',overwrite:true});else incoming.style.clipPath='inset(0 0% 0 0)';lightboxLayer=1-lightboxLayer}
function closeLightbox(){if(!lightbox.open)return;const front=lightboxImgs()[lightboxLayer];setBackdropVisible(false);lenis?.start();if(window.gsap&&!reducedMotion.matches){const t=gsap.to(front,{clipPath:'inset(0 100% 0 0)',duration:.35,ease:'power2.in',overwrite:true,onComplete:()=>{interactionTweens.delete(t);lightbox.close()},onInterrupt:()=>interactionTweens.delete(t)});interactionTweens.add(t)}else lightbox.close()}
function photoArchive(p){currentGallery=p.gallery;return `<div class="archive-title"><h2>ANAVA Product &amp; Portrait</h2></div><div class="photo-intro"><span class="eyebrow">${categoryName(p.category)}</span><h2>${p.title}</h2><p>${p.client}</p><div class="detail-columns"><div><h3>THE THOUGHT</h3><p>${p.thought}</p></div><div><h3>THE IDEA</h3><p>${p.idea}</p></div></div><h3>THE MAKING</h3><p>${p.making}</p></div><div class="photo-archive-grid">${p.gallery.map((src,i)=>`<button type="button" class="gallery-thumb" data-lightbox="${src}" data-index="${i}" aria-label="Open full-size image, frame ${i+1} of ${p.gallery.length}"><img src="${src}" alt="${p.title} — photography" loading="lazy"><span class="gallery-number">${String(i+1).padStart(2,'0')}</span></button>`).join('')}</div>`}
let verticalSubFilter = 'All';

function setVerticalSubFilter(subCat){
  verticalSubFilter = subCat;
  const category = document.querySelector('[data-archive].selected')?.dataset.archive || 'VERTICAL';
  killGalleryTriggers();
  document.querySelectorAll('#archive-results video').forEach(v=>v.pause());
  document.querySelector('#archive-results').innerHTML = archiveCollection(category, verticalSubFilter);
  initLazyVideos();
  if(document.querySelector('.archive-card')&&window.gsap&&!reducedMotion.matches){
    interactionTween('.archive-card',{opacity:0,y:20},{opacity:1,y:0,duration:MOTION.reveal,stagger:MOTION.stagger,ease:MOTION.ease,overwrite:true});
    ScrollTrigger.refresh();
  }
}

function archiveCollection(category='TVCS',subCategory=verticalSubFilter){
  let list=A.projects.filter(p=>category==='ALL'||p.category===category);
  if(category==='VERTICAL' && subCategory && subCategory.toLowerCase() !== 'all'){
    list=list.filter(p=>(p.vertical||'').toLowerCase()===subCategory.toLowerCase());
  }
  if(category==='PHOTOSHOOTS'){
    const p=list.find(x=>x.gallery&&x.gallery.length);
    if(p)return photoArchive(p);
  }

  const options=['All','Celebrity','Influencers','Performance'];
  const currentSub=options.find(o=>o.toLowerCase()===(subCategory||'all').toLowerCase())||'All';

  const subFilterHtml=category==='VERTICAL'?`<div class="vertical-sub-filter"><span class="vertical-sub-label" id="vertical-sub-label">Filter:</span><div class="custom-dropdown" id="vertical-custom-dropdown"><button type="button" class="custom-dropdown-trigger" id="vertical-dropdown-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="vertical-dropdown-menu" aria-label="Filter vertical films by type"><span>${currentSub}</span>${chevron}</button><ul class="custom-dropdown-menu" id="vertical-dropdown-menu" role="listbox" aria-labelledby="vertical-sub-label" hidden>${options.map(o=>`<li role="option" data-vertical-option="${o}" aria-selected="${currentSub===o}" class="custom-dropdown-option${currentSub===o?' selected':''}" tabindex="0">${o}</li>`).join('')}</ul></div></div>`:'';

  return `${subFilterHtml}${list.length?`<div class="archive-grid${(category==='VERTICAL'||category==='EVENTS')?' vertical-cols':''}${category==='EVENTS'?' events-cols':''}">${list.map(archiveCard).join('')}</div>`:'<div class="archive-empty"><h3>A new story goes here.</h3><p>This collection is ready for your original projects.</p></div>'}`}
function work(){return `<div class="work-page"><section class="work-masthead"><div class="work-heading-new"><div><span class="eyebrow">OUR WORK</span><h1>Curated Work.<br><em>Real Impact.</em></h1></div><p>A selection of films, content and campaigns we’ve created for brands across industries.</p></div><div class="archive-categories" aria-label="Project categories">${workCategories.map((c,i)=>`<button data-archive="${c}" aria-pressed="${i===0}" class="${i===0?'selected':''}">${categoryName(c)}</button>`).join('')}</div></section><section class="work-archive" id="work-archive"><div id="archive-results">${archiveCollection()}</div></section><section class="work-end"><span>YOUR NEXT PROJECT</span><a href="#contact">Let’s make<br><em>the next one.</em> ${arrow}</a></section></div>`}
document.addEventListener('click',e=>{
  const muteEl=e.target.closest('.archive-mute');
  if(muteEl){
    e.preventDefault();
    e.stopImmediatePropagation();
    const vid=muteEl.closest('.archive-image')?.querySelector('video');
    if(vid){
      vid.muted=!vid.muted;
      muteEl.innerHTML=vid.muted?mutedIcon:unmutedIcon;
      muteEl.setAttribute('aria-pressed',String(!vid.muted));
      muteEl.setAttribute('aria-label',vid.muted?'Unmute video':'Mute video');
    }
    return;
  }
  const clickCard=e.target.closest('.archive-card[data-video-mode="click"]');
  if(clickCard){
    e.preventDefault();
    e.stopImmediatePropagation();
    const img=clickCard.querySelector('.archive-image'),vid=img?.querySelector('video');
    if(vid){
      if(vid.paused){
        vid.play().catch(()=>{});
        img.classList.add('playing');
      }else{
        vid.pause();
        img.classList.remove('playing');
      }
    }
    return;
  }
  const cat=e.target.closest('[data-archive]');
  if(cat){
    const category=cat.dataset.archive;
    verticalSubFilter = 'All';
    killGalleryTriggers();
    document.querySelectorAll('#archive-results video').forEach(v=>v.pause());
    document.querySelectorAll('[data-archive]').forEach(b=>{
      b.classList.toggle('selected',b.dataset.archive===category);
      b.setAttribute('aria-pressed',b.dataset.archive===category);
    });
    document.querySelector('#archive-results').innerHTML=archiveCollection(category, 'All');
    initLazyVideos();
    if(category==='PHOTOSHOOTS')initGalleryWipe('#archive-results .gallery-thumb');
    if(document.querySelector('.archive-card')&&window.gsap&&!reducedMotion.matches){
      interactionTween('.archive-card',{opacity:0,y:20},{opacity:1,y:0,duration:MOTION.reveal,stagger:MOTION.stagger,ease:MOTION.ease,overwrite:true});
      ScrollTrigger.refresh();
    }
    return;
  }
  const trigger=e.target.closest('#vertical-dropdown-trigger');
  if(trigger){
    e.preventDefault();
    const menu=document.getElementById('vertical-dropdown-menu');
    if(menu){
      const isOpen=trigger.getAttribute('aria-expanded')==='true';
      trigger.setAttribute('aria-expanded',String(!isOpen));
      if(isOpen){
        menu.setAttribute('hidden','');
      }else{
        menu.removeAttribute('hidden');
        const selectedOpt=menu.querySelector('.custom-dropdown-option.selected')||menu.querySelector('.custom-dropdown-option');
        selectedOpt?.focus();
      }
    }
    return;
  }
  const option=e.target.closest('[data-vertical-option]');
  if(option){
    e.preventDefault();
    const subCat=option.dataset.verticalOption;
    setVerticalSubFilter(subCat);
    return;
  }
  const customDropdown=e.target.closest('#vertical-custom-dropdown');
  if(!customDropdown){
    const trig=document.getElementById('vertical-dropdown-trigger');
    const menu=document.getElementById('vertical-dropdown-menu');
    if(trig && menu && trig.getAttribute('aria-expanded')==='true'){
      trig.setAttribute('aria-expanded','false');
      menu.setAttribute('hidden','');
    }
  }
});
document.addEventListener('keydown',e=>{
  const trigger=document.getElementById('vertical-dropdown-trigger');
  const menu=document.getElementById('vertical-dropdown-menu');
  const isOpen=trigger && trigger.getAttribute('aria-expanded')==='true';

  if(e.key==='Escape' && isOpen){
    e.preventDefault();
    trigger.setAttribute('aria-expanded','false');
    menu?.setAttribute('hidden','');
    trigger.focus();
    return;
  }
  if(isOpen && (e.key==='ArrowDown' || e.key==='ArrowUp')){
    e.preventDefault();
    const options=Array.from(menu?.querySelectorAll('.custom-dropdown-option') || []);
    if(!options.length)return;
    const currentIndex=options.indexOf(document.activeElement);
    let nextIndex=0;
    if(e.key==='ArrowDown'){
      nextIndex=currentIndex<options.length-1?currentIndex+1:0;
    }else{
      nextIndex=currentIndex>0?currentIndex-1:options.length-1;
    }
    options[nextIndex].focus();
    return;
  }
  if(isOpen && (e.key==='Enter'||e.key===' ')){
    const activeOpt=document.activeElement?.closest('[data-vertical-option]');
    if(activeOpt){
      e.preventDefault();
      const subCat=activeOpt.dataset.verticalOption;
      setVerticalSubFilter(subCat);
      return;
    }
  }
  if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('archive-mute')){
    e.preventDefault();
    e.target.click();
  }
});
document.addEventListener('pointerenter',e=>{const card=e.target.closest?.('.archive-card[data-video-mode="hover"]');if(!card||!supportsHoverReveal())return;card.classList.add('playing');const vid=card.querySelector('video');if(vid&&vid.paused){vid.play().catch(()=>{})}},true);
document.addEventListener('pointerleave',e=>{const card=e.target.closest?.('.archive-card[data-video-mode="hover"]');if(!card)return;card.classList.remove('playing');const vid=card.querySelector('video');if(vid&&!vid.paused){vid.pause()}},true);
function servicesCta(){return `<section class="services-cta dark"><span class="eyebrow reveal">LET’S CREATE TOGETHER</span><h2 class="reveal">HAVE A PROJECT<br><em>IN MIND?</em></h2><p class="reveal">Let’s bring your idea to life.</p><a class="pill reveal" href="#contact">LET’S TALK ${arrow}</a></section>`}
function impactSection(){return `<section class="impact-hero" aria-label="From idea to impact"><div class="impact-media" aria-hidden="true"><img src="assets/from-idea-to-impact.jpg" alt="" loading="lazy" width="1600" height="1000"></div><div class="impact-main"><div class="impact-copy"><span class="impact-eyebrow reveal">OUR APPROACH</span><h1 class="reveal">From idea<br>to <em>impact.</em></h1><p class="reveal">Ideas are everywhere. Impact takes the right people,<br>the right process and the courage to make it real.</p><a class="impact-cta reveal" href="#process">Explore Our Process ${arrow}</a></div></div><div class="impact-bar"><div class="impact-stage reveal"><span class="impact-num">01</span><span class="impact-tag">/ CONCEPT</span><h3>THINK</h3><p>Creative Direction, Ideation &amp; Concept Development, Scripting, Creative Consulting.</p></div><div class="impact-stage reveal"><span class="impact-num">02</span><span class="impact-tag">/ SHOOT</span><h3>MAKE</h3><p>Production, Direction, Casting (Domestic &amp; International), Art Direction &amp; Production Design.</p></div><div class="impact-stage reveal"><span class="impact-num">03</span><span class="impact-tag">/ POST</span><h3>FINISH</h3><p>Editing, VFX, Sound Design, Color Grading, Motion Graphics &amp; Final Delivery.</p></div></div></section>`}
function servicePage(){return `${impactSection()}${servicesCta()}<div class="motion-line" aria-hidden="true"><div>THINK. <em>MAKE.</em> FINISH. THINK. <em>MAKE.</em> FINISH. THINK. <em>MAKE.</em> FINISH. THINK. <em>MAKE.</em> FINISH.</div></div>`}
function process(){const workflow=[['THOUGHT','THE THOUGHT','You bring us a brief, problem, product or simply a thought.'],['IDEA','THE IDEA','We explore, ideate and find the strongest creative direction.'],['DECK','THE DECK','The idea becomes a visual world:',['Concept','Treatment','Script','Mood','Visual references','Casting','Locations','Execution approach']],['PRE-PRODUCTION','PRE-PRODUCTION','We plan everything required to execute the idea:',['Crew','Casting','Locations','Art direction','Styling','Production design','Schedule','Equipment','Logistics']],['SHOOT','THE SHOOT','The deck becomes reality.'],['POST','POST','', ['Offline Edit','Music','Sound','Colour','Online','VFX','Mastering']],['DELIVERY','DELIVERY',steps[6][1]]];return `<section class="workflow-hero"><span class="eyebrow">OUR WORKFLOW</span><h1 class="reveal">From Thought to <em>Screen</em></h1><nav class="workflow-nav" aria-label="Workflow steps">${workflow.map((s,i)=>`<a href="#process/step-${i+1}" data-workflow-step="${i+1}"><small>0${i+1}</small>${s[0]}</a>`).join('')}</nav><p>A THOUGHT GOES IN. A FILM COMES OUT.</p><a class="text-link" href="#process/step-1" data-workflow-step="1">EXPLORE OUR PROCESS ↓</a></section><section class="workflow-steps" aria-label="Our process in detail">${workflow.map((s,i)=>`<article class="workflow-step" id="step-${i+1}" tabindex="-1"><span class="workflow-number">0${i+1} —</span><h2>${s[1]}</h2><div class="workflow-copy">${s[2]?`<p>${s[2]}</p>`:''}${s[3]?`<${i===5?'ol':'ul'} class="${i===5?'workflow-post':'workflow-list'}">${s[3].map(item=>`<li>${item}</li>`).join('')}</${i===5?'ol':'ul'}>`:''}</div></article>`).join('')}</section>${closeSection()}`}
const aboutStats=[[buildingIcon,'50+','Projects Delivered'],[filmIcon,'8+','Years of Experience'],[peopleIcon,'30+','Creative Professionals'],[globeIcon,'India','Clients & Collaborations']];
const aboutValues=[[bulbIcon,'Think Deep','We challenge ideas to find what’s worth making.'],[peopleIcon,'Work Together','Thinkers and makers under one roof.'],[targetIcon,'Make It Real','From thought to screen, we own the journey.'],[boltIcon,'Keep It Simple','Fewer layers. Faster decisions. Stronger outcomes.']];
const locations=[{name:'Mumbai',hq:true,tags:'BRANDS.<br>PEOPLE.<br>BIGGER STORIES.',phrase:'Same City<br>Bigger Stories',maps:'https://maps.google.com/?q=Linking+Road+Bandra+West+Mumbai+400050',slug:'loc-mumbai',image:'assets/locations/mumbai-gateway.jpg'},{name:'Delhi',hq:false,tags:'MORE IDEAS.<br>MORE FILMS.<br>NEW PERSPECTIVES.',phrase:'More Ideas<br>More Films',maps:'https://maps.google.com/?q=Saket+New+Delhi+110017',slug:'loc-delhi',image:'assets/locations/delhi-india-gate.jpg'}];
function locationSection(){return `<section class="locations-section" aria-label="Where we work"><div class="locations-top"><div class="locations-intro"><span class="locations-label reveal">WHERE WE WORK</span><h2 class="locations-heading reveal">Two cities. <em>One studio.</em></h2><p class="locations-copy reveal">Different landscapes. A shared vision.<br>We work from Mumbai and Delhi, creating stories for brands across India and beyond.</p></div><div class="locations-atmosphere" aria-hidden="true"><span class="brand-scribble locations-scribble">Same People<br>Bigger Stories</span><svg class="locations-map" viewBox="0 0 200 240" fill="none" aria-hidden="true"><path d="M60 10 L140 20 L150 70 L130 110 L145 150 L120 200 L90 230 L70 190 L55 140 L40 100 L45 55 Z" stroke="currentColor" stroke-width="1"/><circle class="locations-map-dot" cx="118" cy="55" r="3"/><circle class="locations-map-dot" cx="95" cy="150" r="3"/></svg><ul class="locations-meta"><li>IDEAS</li><li>PEOPLE</li><li>PLACES</li><li>IMPACT</li></ul></div></div><div class="locations-grid">${locations.map(l=>`<a class="location-tile ${l.slug} reveal" href="${l.maps}" target="_blank" rel="noopener" aria-label="Explore ${l.name} — Anava Films"><div class="location-tile-bg"><img src="${l.image}" alt="${l.name} landmark" loading="lazy" width="800" height="450"></div><div class="location-tile-top"><div class="location-tile-info"><h3>${l.name}${l.hq?'<span class="hq-tag">HQ</span>':''}</h3><span class="location-tags">${l.tags}</span></div><span class="location-phrase">${l.phrase}</span></div><div class="location-tile-bottom"><span class="location-cta"><span class="location-cta-icon">${arrow}</span>EXPLORE<br>${l.name.toUpperCase()}</span></div></a>`).join('')}</div></section>`}
function collabSection(){return `<section class="collab-section"><span class="collab-watermark" aria-hidden="true">ANAVA</span><span class="eyebrow reveal">Let’s create together</span><h2 class="reveal">Want to Collaborate<br><em>With Anava?</em></h2><a class="pill reveal" href="#contact">Let’s talk ${arrow}</a><div class="collab-meta reveal"><span>Creative minds</span><span>Fast response</span><span>Pan India</span><span>Real results</span></div></section>`}
function about(){return `<section class="about-hero" aria-labelledby="about-story-title"><div class="about-hero-bg"><img src="assets/think.jpg" alt="" loading="lazy"></div><div class="about-hero-inner"><span class="eyebrow">Our identity &amp; ethos</span><h1 id="about-story-title" class="reveal">We Are Not Just A<br><em>Production House.</em></h1><div class="about-hero-copy"><p class="reveal">A production house usually gets an idea and figures out how to make it. At Anava, we like to get involved a little earlier. Sometimes the client comes to us with a complete brief. Sometimes it's a problem. Sometimes it's a product. And sometimes it's just a thought.</p><p class="reveal">We take that thought, challenge it, shape it and turn it into an idea worth making.</p><p class="reveal">Then we make it. From creative direction and ideation to scripting, casting, production, direction and post-production, we bring the creative and executional sides of the process together.</p><p class="about-story-belief reveal">That's why we see Anava as an <strong>agency-cum-production house.</strong></p><div class="about-story-end"><p>We don't believe in the gap between the people who think and the people who make.</p><p>At Anava, the people who think are also close to the people who make.</p></div><blockquote class="about-quote reveal">“Fewer layers. Faster thinking. Better communication. Ideas that are actually made to work on screen.”</blockquote></div><dl class="about-hero-stats" aria-label="ANAVA in numbers">${aboutStats.map(s=>`<div><span class="stat-icon">${s[0]}</span><dd>${s[1]}</dd><dt>${s[2]}</dt></div>`).join('')}</dl><div class="about-values">${aboutValues.map(v=>`<div class="value-card"><span class="value-icon">${v[0]}</span><h3>${v[1]}</h3><p>${v[2]}</p></div>`).join('')}</div></div></section><section class="section about-team"><span class="eyebrow">The people behind ANAVA</span><h2 class="big reveal">Thinking. Making.<br>Together.</h2>${people()}</section>${locationSection()}${collabSection()}${closeSection()}`}
function contact(){return `<section class="contact-hero"><div class="contact-hero-grid"><div class="contact-hero-copy"><span class="contact-eyebrow reveal">CONTACT</span><h1 class="reveal">Got a <em class="accent-text">Thought?</em></h1><p class="contact-hero-lead reveal">Let’s turn it into something powerful.</p><p class="reveal">Whether it’s a product, a problem, a brief or simply a thought — we’re here to listen, ideate and make it real.</p><div class="contact-hero-ctas reveal"><a class="pill" href="#enquiry-form">Let’s Make It ${arrow}</a><a class="showreel-link" href="#work"><span class="showreel-play" aria-hidden="true">▶</span>Watch our showreel</a></div></div><div class="contact-hero-media reveal"><img src="assets/what brand say.jpg" alt="Behind the scenes on an Anava Films set" loading="lazy" width="1600" height="1200"><span class="contact-hero-tag" aria-hidden="true">Ideas<br>People<br>Films</span><span class="contact-hero-caption" aria-hidden="true">A thought today.<br>A story tomorrow.</span></div></div></section><section class="contact-cards-section" id="enquiry-form"><div class="contact-grid"><div class="contact-card form-card reveal"><span class="eyebrow">SEND US A MESSAGE</span><h2>Tell us about your project.</h2><form id="enquiry"><div class="form-row"><label><span class="field-label">YOUR NAME *</span><input name="name" autocomplete="name" required placeholder="e.g. Rahul / Brand Name"></label><label><span class="field-label">YOUR EMAIL *</span><input name="email" type="email" autocomplete="email" required placeholder="name@company.com"></label></div><label><span class="field-label">COMPANY / BRAND</span><input name="company" autocomplete="organization" placeholder="Optional"></label><label><span class="field-label">PROJECT TYPE</span><select name="project_type" class="contact-select" required><option value="" disabled selected>Select content type...</option><option value="Commercial TVC / Brand Film">Commercial TVC / Brand Film</option><option value="Vertical / Social Film">Vertical / Social Film</option><option value="Event Film">Event Film</option><option value="Testimonial">Testimonial</option><option value="Photoshoot">Photoshoot</option><option value="Not sure yet">Not sure yet</option></select></label><label><span class="field-label">TELL US ABOUT YOUR PROJECT</span><textarea name="message" required maxlength="500" placeholder="Even if it's just one thought, problem or product objective..."></textarea><span class="char-count" aria-hidden="true"><span class="char-count-current">0</span>/500</span></label><div class="form-footer"><button class="contact-submit-btn" type="submit"><span>Send Message</span> ${arrow}</button><p class="form-hint">We usually respond within 24 hours.</p></div><p class="form-status" role="status"></p></form></div><div class="contact-card direct-contact-card reveal"><span class="eyebrow">GET IN TOUCH</span><h2>Let’s <em class="accent-text">Connect.</em></h2><p class="contact-card-sub">Our team in Mumbai and Delhi is ready — for a product campaign, a single-line thought, or creative consulting.</p><div class="contact-divider"></div><div class="contact-info-group"><span class="info-label">EMAIL</span><a class="contact-link" href="mailto:office@anavafilms.com"><span class="contact-icon-circle"><img src="assets/icons/email.svg" width="18" height="18" alt="" loading="lazy"></span><span>office@anavafilms.com</span></a></div><div class="contact-info-group"><span class="info-label">PHONE</span><a class="contact-link" href="tel:+918691924669"><span class="contact-icon-circle"><img src="assets/icons/phone.svg" width="18" height="18" alt="" loading="lazy"></span><span>Jackson: +91 86919 24669</span></a><a class="contact-link" href="tel:+919911111273"><span class="contact-icon-circle"><img src="assets/icons/phone.svg" width="18" height="18" alt="" loading="lazy"></span><span>Anjan: +91 99111 11273</span></a></div><div class="contact-info-group"><span class="info-label">LOCATIONS</span><div class="contact-link contact-link-static"><span class="contact-icon-circle"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg></span><span>Mumbai · Delhi · Across India &amp; beyond</span></div></div><div class="contact-info-group"><span class="info-label">FOLLOW US</span><div class="social-pills"><a class="social-pill-btn" href="https://www.instagram.com/anava_films" target="_blank" rel="noopener"><img src="assets/icons/instagram.png" width="15" height="15" alt="" loading="lazy"><span>INSTAGRAM</span></a><a class="social-pill-btn" href="https://vimeo.com/zackdirect" target="_blank" rel="noopener"><img src="assets/icons/vimeo.png" width="15" height="15" alt="" loading="lazy"><span>VIMEO</span></a><a class="social-pill-btn" href="https://www.youtube.com/@anava-films" target="_blank" rel="noopener"><img src="assets/icons/youtube.png" width="15" height="15" alt="" loading="lazy"><span>YOUTUBE</span></a></div></div></div></div><span class="contact-watermark" aria-hidden="true">Let’s create</span></section>`}
const dragScrollDisposers = [];
function disposeDragScroll(){dragScrollDisposers.splice(0).forEach(dispose=>dispose())}
function enableDragScroll(el){
  if(!el||el.dataset.dragScroll)return;
  el.dataset.dragScroll='1';
  const listeners=[];
  const on=(target,type,handler,options)=>{target.addEventListener(type,handler,options);listeners.push(()=>target.removeEventListener(type,handler,options))};
  let active=false,axis='',kind='',touchId=null,startX=0,startY=0,startScroll=0,lastX=0,lastT=0,vx=0,raf=null,frameT=0,suppressUntil=0,lastTouch=-Infinity;
  const maxScroll=()=>Math.max(0,el.scrollWidth-el.clientWidth);
  const writeScroll=value=>{el.scrollLeft=Math.max(0,Math.min(maxScroll(),value))};
  const stopMomentum=()=>{if(raf!==null)cancelAnimationFrame(raf);raf=null;vx=0};
  const cancel=()=>{if(active&&axis==='x')suppressUntil=performance.now()+500;active=false;axis='';touchId=null;stopMomentum()};
  const momentum=now=>{
    raf=null;
    if(!el.isConnected||reducedMotion.matches){stopMomentum();return}
    const dt=Math.min(64,Math.max(0,now-frameT));frameT=now;
    const decay=Math.exp(-(-Math.log(.95)/16)*dt);
    const next=el.scrollLeft-vx*(1-decay)/(-Math.log(.95)/16);
    writeScroll(next);vx*=decay;
    if(Math.abs(vx)<.05||next<=0||next>=maxScroll()){stopMomentum();return}
    raf=requestAnimationFrame(momentum);
  };
  const start=(point,input)=>{
    cancel();suppressUntil=0;
    if(maxScroll()<=1)return;
    active=true;kind=input;axis='';startX=lastX=point.clientX;startY=point.clientY;
    startScroll=el.scrollLeft;lastT=performance.now();
  };
  const move=(point,event)=>{
    if(!active)return;
    const dx=point.clientX-startX,dy=point.clientY-startY;
    if(!axis){
      if(Math.max(Math.abs(dx),Math.abs(dy))<6)return;
      if(Math.abs(dx)<=Math.abs(dy)*1.2){cancel();return}
      axis='x';
    }
    if(event.cancelable)event.preventDefault();
    const now=performance.now(),dt=now-lastT;
    writeScroll(startScroll-dx);
    if(dt>0)vx=Math.max(-3,Math.min(3,(point.clientX-lastX)/dt));
    lastX=point.clientX;lastT=now;
  };
  const end=()=>{
    if(!active)return;
    active=false;touchId=null;
    const dragged=axis==='x';axis='';
    if(dragged)suppressUntil=performance.now()+500;
    if(!dragged||performance.now()-lastT>80||reducedMotion.matches||Math.abs(vx)<.05){stopMomentum();return}
    frameT=performance.now();raf=requestAnimationFrame(momentum);
  };
  on(el,'touchstart',e=>{
    lastTouch=performance.now();
    if(e.touches.length!==1){cancel();return}
    start(e.touches[0],'touch');touchId=e.touches[0].identifier;
  },{passive:true});
  on(el,'touchmove',e=>{
    if(kind!=='touch'||!active)return;
    if(e.touches.length!==1||e.touches[0].identifier!==touchId){cancel();return}
    move(e.touches[0],e);
  },{passive:false});
  on(el,'touchend',e=>{
    lastTouch=performance.now();
    if(kind!=='touch')return;
    if(e.touches.length){cancel();return}
    end();
  },{passive:true});
  on(el,'touchcancel',()=>{lastTouch=performance.now();cancel()},{passive:true});
  on(el,'mousedown',e=>{
    if(e.button!==0||performance.now()-lastTouch<700)return;
    start(e,'mouse');
  });
  on(window,'mousemove',e=>{if(kind==='mouse'&&active){if(!(e.buttons&1)){cancel();return}move(e,e)}});
  on(window,'mouseup',()=>{if(kind==='mouse')end()});
  on(el,'dragstart',e=>{if(active)e.preventDefault()});
  on(el,'click',e=>{
    if(e.detail!==0&&performance.now()<suppressUntil){e.preventDefault();e.stopPropagation()}
    suppressUntil=0;
  },true);
  on(el,'wheel',cancel,{passive:true});
  on(el,'keydown',cancel);
  on(window,'blur',cancel);
  on(window,'resize',cancel);
  on(document,'visibilitychange',()=>{if(document.hidden)cancel()});
  on(reducedMotion,'change',cancel);
  dragScrollDisposers.push(()=>{cancel();listeners.forEach(remove=>remove());delete el.dataset.dragScroll});
}
let motion;let projectOpener;
function animate(){if(motion)motion.revert();if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);motion=gsap.matchMedia();motion.add({allowed:'(prefers-reduced-motion: no-preference)',desktop:'(min-width: 761px) and (hover: hover) and (pointer: fine)'},ctx=>{if(!ctx.conditions.allowed)return;if(document.querySelector('.hero-line'))gsap.from('.hero-line',{y:35,opacity:0,duration:MOTION.reveal,stagger:MOTION.stagger,ease:MOTION.ease});gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:ctx.conditions.desktop?24:12,opacity:0,duration:ctx.conditions.desktop?MOTION.reveal:.4,ease:MOTION.ease,scrollTrigger:{trigger:el,start:'top 94%',once:true}}));if(document.querySelector('.work-heading h1'))gsap.from('.work-heading h1',{y:30,opacity:0,duration:MOTION.reveal,ease:MOTION.ease});if(document.querySelector('.motion-line'))gsap.to('.motion-line div',{xPercent:-25,ease:'none',scrollTrigger:{trigger:'.motion-line',start:'top bottom',end:'bottom top',scrub:MOTION.scrub}});if(!ctx.conditions.desktop)return;gsap.utils.toArray('.card-image img').forEach(el=>{gsap.fromTo(el,{yPercent:-8},{yPercent:0,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:MOTION.scrub}});gsap.fromTo(el,{opacity:.4},{opacity:1,duration:1.1,ease:'sine.inOut',scrollTrigger:{trigger:el.parentElement,start:'top 92%',once:true}})});if(document.querySelector('.film')){gsap.fromTo('.film img,.film video',{yPercent:-10},{yPercent:0,ease:'none',scrollTrigger:{trigger:'.film-stage',start:'top bottom',end:'bottom top',scrub:MOTION.scrub}});gsap.fromTo('.film img,.film video',{opacity:.35},{opacity:1,duration:1.3,ease:'sine.inOut'})}})}
function render(){disposeDragScroll();lazyVideoObserver?.disconnect();app.querySelectorAll('video').forEach(v=>v.pause());settleInteractions();killGalleryTriggers();disposeThought();if(dialog.open)dialog.close();if(motion)motion.revert();let route=location.hash.slice(1).split('/')[0]||'home';const pages={home,work,services:servicePage,process,about,contact};if(!pages[route])route='home';app.innerHTML=pages[route]();document.title=`${route==='home'?'Creative Production':route==='services'?'What We Do':route[0].toUpperCase()+route.slice(1)} — ANAVA FILMS`;document.querySelectorAll('header nav a').forEach(a=>{a.classList.toggle('active',a.hash==='#'+route);if(a.hash==='#'+route)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});document.querySelector('nav').classList.remove('open');document.querySelector('.menu-button').setAttribute('aria-expanded','false');document.querySelector('.menu-button').setAttribute('aria-label','Open navigation');if(lenis){lenis.scrollTo(0,{immediate:true})}else{window.scrollTo({top:0,behavior:'instant'})}animate();if(window.ScrollTrigger)ScrollTrigger.refresh();initThought();applyThoughtDraft();initLazyVideos();enableDragScroll(document.querySelector('.archive-categories'))}
function focusWorkflowStep(){const match=location.hash.match(/^#process\/step-([1-7])$/);if(!match)return false;const step=document.querySelector('#step-'+match[1]);if(!step)return false;step.focus({preventScroll:true});if(lenis&&!reducedMotion.matches){lenis.scrollTo(step,{duration:1.2})}else{step.scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'})}return true}window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#process/')&&document.querySelector('.workflow-steps')){focusWorkflowStep();return}render();if(!focusWorkflowStep())app.focus({preventScroll:true})});document.querySelector('.menu-button').onclick=()=>{const open=document.querySelector('nav').classList.toggle('open');document.querySelector('.menu-button').setAttribute('aria-expanded',open);document.querySelector('.menu-button').setAttribute('aria-label',open?'Close navigation':'Open navigation')};document.querySelector('.skip-link').addEventListener('click',e=>{e.preventDefault();app.focus({preventScroll:true});app.scrollIntoView({behavior:'instant',block:'start'})});document.querySelector('nav').addEventListener('click',e=>{if(e.target.closest('a')&&document.querySelector('nav').classList.contains('open'))document.querySelector('.menu-button').click()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.querySelector('nav').classList.contains('open')){document.querySelector('.menu-button').click();document.querySelector('.menu-button').focus()}});
document.addEventListener('click',e=>{const p=e.target.closest('[data-project]');if(p){const d=A.projects.find(x=>x.id===p.dataset.project);const hasGallery=d.gallery&&d.gallery.length;currentGallery=hasGallery?d.gallery:[];const portraitClass=isPortrait(d)?' portrait':'';projectOpener=p;document.querySelector('#project-content').innerHTML=`${hasGallery?`<div class="detail-gallery">${d.gallery.map((src,i)=>`<button type="button" class="gallery-thumb" data-lightbox="${src}" data-index="${i}" aria-label="Open full-size image, frame ${i+1} of ${d.gallery.length}"><img src="${src}" alt="${d.title} — photography" loading="lazy"><span class="gallery-number">${String(i+1).padStart(2,'0')}</span></button>`).join('')}</div>`:d.video?`<video class="detail-image${portraitClass}" controls playsinline poster="${d.image}" src="${d.video}"></video>`:`<img class="detail-image${portraitClass}" src="${d.image}" alt="${d.title}">`}<div class="detail"><span class="eyebrow">${d.category}</span><h2 id="project-title">${d.title}</h2><p>${d.client}${d.format?`<br>${d.format}`:''}</p>${d.role?`<div class="role-block"><span class="role-label">ANAVA’S ROLE</span><div class="role-chips">${d.role.map(r=>`<span class="role-chip">${r}</span>`).join('')}</div></div>`:''}<div class="detail-columns"><div><h3>THE THOUGHT</h3><p>${d.thought}</p></div><div><h3>THE IDEA</h3><p>${d.idea}</p></div></div><h3>THE MAKING</h3><p>${d.making}</p><p class="sample">${d.video||hasGallery?'':'Film playback becomes available when an original video is added.'}</p></div>`;dialog.showModal();document.querySelector('#project-content').scrollTop=0;document.body.classList.add('project-open');lenis?.stop();dialog.querySelector('.close').focus({preventScroll:true});initGalleryWipe('#project-content .gallery-thumb','#project-content')}const lb=e.target.closest('[data-lightbox]');if(lb){openLightbox(Number(lb.dataset.index))}const f=e.target.closest('[data-filter]');if(f){document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('selected',b===f);b.setAttribute('aria-pressed',b===f)});const list=A.projects.filter(p=>f.dataset.filter==='ALL'||p.category===f.dataset.filter);document.querySelector('#work-grid').innerHTML=list.length?list.map(card).join(''):'<p class="empty">No projects in this category yet.</p>';animate()}});
document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.classList.remove('project-open');lenis?.start();dialog.querySelectorAll('video').forEach(v=>v.pause());if(lightbox.open)lightbox.close();if(projectOpener?.isConnected)projectOpener.focus({preventScroll:true});projectOpener=null;killGalleryTriggers()});document.querySelector('#lightbox-close').onclick=closeLightbox;document.querySelector('.lightbox-nav.prev').onclick=()=>lightboxNav(-1);document.querySelector('.lightbox-nav.next').onclick=()=>lightboxNav(1);lightbox.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeLightbox()}});document.addEventListener('keydown',e=>{if(!lightbox.open)return;if(e.key==='ArrowRight')lightboxNav(1);else if(e.key==='ArrowLeft')lightboxNav(-1)});let touchX=null,touchY=null;const stage=lightbox.querySelector('.lightbox-stage');stage.addEventListener('touchstart',e=>{touchX=e.touches.length===1?e.touches[0].clientX:null;touchY=e.touches[0].clientY},{passive:true});stage.addEventListener('touchend',e=>{if(touchX==null)return;const dx=e.changedTouches[0].clientX-touchX;const dy=e.changedTouches[0].clientY-touchY;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.25)lightboxNav(dx<0?1:-1);touchX=null;touchY=null},{passive:true});stage.addEventListener('touchcancel',()=>{touchX=null;touchY=null},{passive:true});document.addEventListener('input',e=>{if(e.target.name!=='message'||e.target.closest('form')?.id!=='enquiry')return;const counter=e.target.closest('label')?.querySelector('.char-count-current');if(counter)counter.textContent=e.target.value.length});document.addEventListener('submit',async e=>{if(e.target.id!=='enquiry')return;e.preventDefault();const data=new FormData(e.target),typeVal=data.get('project_type'),typeLine=typeVal?`Content Type: ${typeVal}\n`:'',companyVal=data.get('company'),companyLine=companyVal?`Company / Brand: ${companyVal}\n`:'',message=`Name / Brand: ${data.get('name')}\nEmail: ${data.get('email')}\n${companyLine}${typeLine}\n${data.get('message')}`,status=e.target.querySelector('.form-status');if(A.email){location.href=`mailto:${encodeURIComponent(A.email)}?subject=Project%20enquiry&body=${encodeURIComponent(message)}`;status.textContent='Your email app will open with the enquiry. Send it from there.'}else{try{await navigator.clipboard.writeText(message);status.textContent='Enquiry copied. This preview does not send messages.'}catch{status.textContent='Copy is unavailable in this browser. Select and copy your enquiry text manually.'}}});render();

// Close the mobile menu when tapping outside it or returning to desktop.
document.addEventListener('click',e=>{if(!e.target.closest('header')&&document.querySelector('nav.open'))document.querySelector('.menu-button').click()});
matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches&&document.querySelector('nav.open'))document.querySelector('.menu-button').click()});

focusWorkflowStep();
document.addEventListener('click',e=>{const link=e.target.closest('[data-workflow-step]');if(link&&link.hash===location.hash){e.preventDefault();focusWorkflowStep()}});
