"use strict";
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.to('.txt-box .txt1', { y: 0, opacity: 1, duration: 0.5, delay: 0.35});
  gsap.to('.txt-box .name', { y: 0, opacity: 1, duration: 0.5, delay: 0.45});
  gsap.to('.txt-box .txt2', { y: 0, opacity: 1, duration: 0.5, delay: 0.55 });
  gsap.to('.img-gallery', { y: 0, opacity: 1, duration: 0.5, delay: 0.65 });


  //gnb 스크롤
  const names = ["home","portfolio","profile"];
  names.forEach(name => {
    let section = document.querySelector("#" + name);
    let nav = document.querySelector(".nav-" + name);
    ScrollTrigger.create({
      trigger: section,
      start: "top 40%",
      end: "bottom 40%",
      toggleClass: {targets: nav, className: "active"}
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
  
  // progress
  gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
  });

  
  //profile 배경 변경
  let timeline = function () {
    return gsap.timeline().fromTo(
      '.bg-wrap .bg-1',
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 1.7,
        ease: 'linear',
        duration: 5,
      }
    );
  };
  
  ScrollTrigger.create({
    trigger: '.portfolio',
    start: 'bottom center',
    end: 'bottom top',
    scrub: !0,
    animation: timeline(),
    markers:true,
  });

  let panels = gsap.utils.toArray("section");
  let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
  
  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", 
      pin: true, 
      markers:true,
      pinSpacing: false 
    })
  });



  /* btn-top*/
	$(".btn-top").hide();
	$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btn-top').fadeIn();
		} else {
			$('.btn-top').fadeOut();
		}
		});

  $('.btn-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
    });
  });
  
};

function setTab(id) {
  $(".tabArea").removeClass("on");
  $("#area-" +id).addClass("on");
  $(".pf-box").hide();
  $("#content-" + id).show();
}

$(document).ready(function() {
	if("" == "") setTab("all");
	else setTab("");
});