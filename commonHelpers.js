import{S as M,N as j,i as x}from"./assets/vendor-b5d83026.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();document.querySelector(".menu");const q=document.querySelector(".menu-title"),f=document.querySelector(".menu-list"),L=document.querySelector(".open-mobile-menu"),u=document.querySelector(".mobile-menu"),P=document.querySelector(".header-nav");document.querySelectorAll(".menu-list-item");u.addEventListener("click",z);P.addEventListener("click",F);function z(e){e.target.nodeName==="BUTTON"&&u.classList.remove("is-open")}function F(e){e.target===q||e.target.parentNode===q?f.classList.toggle("visually-hidden-menu"):e.target===L||e.target.parentNode===L?u.classList.add("is-open"):f.contains(e.target)&&(f.classList.toggle("visually-hidden-menu"),u.classList.remove("is-open"))}const V=document.querySelectorAll(".accordion");V.forEach(e=>{new Accordion(e)});const p=document.querySelectorAll(".about-con-list-iteam");document.addEventListener("DOMContentLoaded",function(){function e(){this.classList.toggle("active");const t=this.querySelector(".about-con-list-iteam-id");t.style.display==="block"?t.style.display="none":t.style.display="block",this.querySelector(".arrow-up").classList.toggle("arrow-down")}p.forEach(t=>{t.addEventListener("click",e)});for(let t=1;t<p.length;t++){const n=p[t].querySelector(".about-con-list-iteam-id");n.style.display="none"}});const $=document.querySelector(".about-skills-list"),o=document.querySelectorAll(".about-skills-list-div"),D=document.querySelector(".swipers");let c=document.querySelector(".about-container.container"),l=o.length,k=c.clientWidth;I();window.addEventListener("resize",()=>{c=document.querySelector(".about-container.container"),c.clientWidth!==k&&(k=c.clientWidth,I())});function I(){c.clientWidth<=767&&(l=2),c.clientWidth>767&&c.clientWidth<=1439&&(l=3),c.clientWidth>=1440&&(l=o.length);for(let t=0;t<l;t++)o[t].style.display="block";for(let t=l;t<o.length;t++)o[t].style.display="none";let e=0;o[e].style.backgroundColor="#ed3b44",$.addEventListener("click",()=>{if(o[e].style.backgroundColor="transparent",e=(e+1)%o.length,console.log(e),console.log((e+1)%o.length),o[e].style.backgroundColor="#ed3b44",o[e].style.display="block",e===0||e===1){for(let t=l;t<o.length;t++)o[t].style.display="none";for(let t=0;t<l;t++)o[t].style.display="block"}if(o[e-l].style.display="none",e===0||e===1)for(let t=l;t<o.length;t++)o[t].style.display="none";else o[e-l].style.display="none"}),D.addEventListener("click",()=>{if(o[e].style.backgroundColor="transparent",e=(e+1)%o.length,o[e].style.backgroundColor="#ed3b44",o[e].style.display="block",e===0||e===1){for(let t=l;t<o.length;t++)o[t].style.display="none";for(let t=0;t<l;t++)o[t].style.display="block"}if(o[e-l].style.display="none",e===0||e===1)for(let t=l;t<o.length;t++)o[t].style.display="none";else o[e-l].style.display="none"})}const C=document.querySelector(".swiper-button-next-proj-btn"),h=document.querySelector(".swiper-button-prev-proj-btn");new M(".swiper-proj",{modules:[j],direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next-proj-btn",prevEl:".swiper-button-prev-proj-btn"},on:{slideChangeTransitionEnd:function(){const e=this.isBeginning,t=this.isEnd;e?h.disabled=!0:h.disabled=!1,t?C.disabled=!0:C.disabled=!1}}});h.disabled=!0;const H=document.querySelectorAll(".accordion");H.forEach(e=>{new Accordion(e)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".faq-ac");for(let n=1;n<e.length;n++){const r=e[n].querySelector(".faq-ac-panel");r.style.display="none",r.style.transition="transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"}e.forEach(n=>{n.addEventListener("click",t)});function t(){this.classList.toggle("active");const n=this.querySelector(".faq-ac-panel"),r=this.querySelector(".faq-arrow-down");n.style.display==="block"?(n.style.display="none",r.style.transform="none"):(n.style.display="block",r.style.transform="rotate(0.5turn)",r.style.transition="transform 500ms cubic-bezier(0.4, 0, 0.2, 1)")}});const A=document.querySelectorAll(".CoversImgContainer"),R=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",U);function U(){_(R)?A.forEach(e=>e.classList.add("AnimationOn")):A.forEach(e=>e.classList.remove("AnimationOn"))}function _(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.left<(window.innerWidth||document.documentElement.clientWidth)}const O=document.querySelector(".swiper-button-next-rev-btn"),g=document.querySelector(".swiper-button-prev-rev-btn"),J="https://portfolio-js.b.goit.study/api/reviews",B=document.querySelector(".cards-list");fetch(J).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{B.innerHTML=e.map(t=>`
    <li class="swiper-slide swiper-slide-rev cards-item-natalia">
            <img
              src=${t.avatar_url}
              alt="student"
              width="48"
              height="48"
              loading="lazy"
            />
          <div class="info">
            <h3 class="name">${t.author}</h3>
            <p class="text">
              ${t.review}
            </p>
          </div>
        </li>
    `).join("")}).catch(e=>{console.log(e),B.innerHTML="<li><span>Not found</span></li>"});new M(".swiper-reviews",{modules:[j],direction:"horizontal",centeredSlides:!1,slidesPerView:4,navigation:{nextEl:".swiper-button-next-rev-btn",prevEl:".swiper-button-prev-rev-btn"},on:{resize:function(){const e=window.innerWidth;e<=768?this.params.slidesPerView=1:e<=1440?this.params.slidesPerView=2:this.params.slidesPerView=4,this.update()},slideChangeTransitionEnd:function(){const e=this.isBeginning,t=this.isEnd;e?g.disabled=!0:g.disabled=!1,t?O.disabled=!0:O.disabled=!1}}});g.disabled=!0;const b=document.querySelector(".work-form"),d=document.querySelector(".work-form input[name=email]"),v=document.querySelector(".work-form input[name=comment]"),m=document.querySelector(".work-form-succes"),w=document.querySelector(".work-form-invalid"),N=document.querySelector("body");m.style.display="none";w.style.display="none";const G="https://portfolio-js.b.goit.study/api/requests",S="work-form-state";let a={};K();b.addEventListener("input",e=>{a[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(a)),d.validity.valid?(m.style.display="block",w.style.display="none",d.style.borderColor="#3CBC81"):(m.style.display="none",w.style.display="block",d.style.borderColor="#E74A3B")});b.addEventListener("submit",e=>{if(e.preventDefault(),m.style.display="none",d.style.borderColor="#1c1d20",d.value!==""&&v.value!==""){const t={method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(a)};fetch(G,t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{x.show({class:"work-modal",id:"custom-modal",title:n.title,theme:"dark",message:n.message,position:"center",timeout:!1,overlay:!0,close:!0,closeOnEscape:!0,closeOnClick:!1,onOpened:()=>{N.style.overflow="hidden"},onClosed:()=>{N.style.overflow="scroll"}}),b.reset()}).catch(n=>{alert(n),d.value=a.email,v.value=a.comment}),localStorage.removeItem(S);return}alert("All fields must be filled!")});function K(){const e=localStorage.getItem(S);e&&(a=JSON.parse(e),d.value=a.email||"",v.value=a.comment||"")}const Q=document.querySelector(".open-mobile-menu"),X=document.querySelector(".close-menu"),W=document.querySelector(".mobile-menu"),T=document.querySelectorAll(".mobile-menu-item"),Y=document.querySelector(".order-project-mobm");Q.addEventListener("click",Z);X.addEventListener("click",E);Y.addEventListener("click",E);T.forEach(e=>e.addEventListener("click",E));function Z(){W.classList.add("is-open")}function E(){console.log(T),W.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map