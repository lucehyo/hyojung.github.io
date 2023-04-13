"use strict";
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container"
  });

  gsap.to(".main_visual .txt_box .txt1", {
    scrollTrigger: ".txt1", 
    duration: 2, 
    rotation: 360,
    markers:true,
  });
};