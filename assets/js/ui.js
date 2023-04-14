"use strict";
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.to('.txt_box .txt1', { y: 0, opacity: 1, duration: 0.5, delay: 0.35,addClass:"active"});
  gsap.to('.txt_box .txt2', { y: 0, opacity: 1, duration: 0.5, delay: 0.55 });
  gsap.to("#home", {
      scrollTrigger: {
      trigger: "#home",
      scrub: true,
      pin: true,
      start: "top top",
      end: "bottom center",
      toggleClass: "active",
      ease: "power2"
    }
  });


  //gnb 스크롤
  const names = ["home", "about", "portfolio","profile"];
  names.forEach(name => {
    let section = document.querySelector("#" + name);
    let nav = document.querySelector(".nav-" + name);
    ScrollTrigger.create({
      trigger: section,
      start: "top 40%",
      end: "bottom 40%",
      toggleClass: {targets: nav, className: "selected"}
    });
    
    let trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top"
        });
    nav.addEventListener("click", e => {
      e.preventDefault();
      gsap.to(window, {scrollTo: trigger.start});
    })
  })


};