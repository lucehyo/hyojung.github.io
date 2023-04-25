"use strict";
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.to('.txt-box .txt1', { y: 0, opacity: 1, duration: 0.5, delay: 0.35,addClass:"active"});
  gsap.to('.txt-box .name', { y: 0, opacity: 1, duration: 0.5, delay: 0.45});
  gsap.to('.txt-box .txt2', { y: 0, opacity: 1, duration: 0.5, delay: 0.55 });
 /* gsap.to("#home", {
      scrollTrigger: {
      trigger: "#home",
      scrub: true,
      pin: true,
      start: "top top",
      end: "bottom center",
      toggleClass: "active",
      ease: "power2"
    }
  });*/


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

  //profile
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
    trigger: '.profile',
    start: 'bottom center',
    end: 'bottom top',
    scrub: !0,
    animation: timeline(),
    markers:true,
  });

  var about = document.querySelector('.about');
  gsap.set('.about', { zIndex: (i, target, targets) => targets.length - i });
  let timeline2 = function () {
    return gsap.timeline().fromTo(
      '.about',
      {
        yPercent: 0,
      },
      {
        yPercent: -160,
        ease: 'linear',
        duration: 5,
      }
    );
  };
  ScrollTrigger.create({
    trigger: '.about',
    start: 'top top',
    end: '100%',
    scrub: true,
    pin: true,
    animation: timeline2(),
  });

  //about
  let timeline4 = function () {
    return gsap
      .timeline()
      .set('.portfolio', {
        willChange: 'transform',
      })
      .fromTo(
        '.portfolio',
        {
          yPercent: -100,
          opacity: 0.7,
        },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          duration: 0.4,
        }
      )
      .set('.portfolio', {
        willChange: 'auto',
      });
  };
  ScrollTrigger.create({
    trigger: '.portfolio',
    animation: timeline4(),
    scrub: !0,
    start: 'top bottom',
    end: () => `+=${about.clientHeight}`,
  }),
  ScrollTrigger.create({
    trigger: '.portfolio',
    scrub: !0,
    pin: true,
    start: 'top top',
    end: '100%',
  });

  //section 넘기기
  /*gsap.to("section:not(:last-child)", {
    yPercent: -100, 
    ease: "none",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      end: "bottom bottom",
      markers:true,
      scrub: true,
      pin: true
    }
  });
  
  
  gsap.set("section", {zIndex: (i, target, targets) => targets.length - i});*/


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

/*function setTab(id) {
  $(".tabArea").removeClass("on");
  $("#area-" +id).addClass("on");
  $(".pf-box").hide();
  $("#content-" + id).show();
}

$(document).ready(function() {
  if("{{area}}" == "") setTab("all");
  else setTab("{{}}");
});*/