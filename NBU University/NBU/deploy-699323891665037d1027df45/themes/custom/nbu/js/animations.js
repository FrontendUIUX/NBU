
function InitializeAllAnimations(){
  gsap.registerPlugin(ScrollTrigger);
gsap.to(".eservicesSection  .col-lg-3", {
  y: 0,
  duration: 1,
  opacity: 1,
  delay:.3,
  stagger:.4,
  scrollTrigger: {
    trigger: ".eservicesSection",
    start: "top 80%",
    
    
  },
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".eservicesSection  .topSection .description", {
  x: 0,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: ".eservicesSection  .topSection .description",
    start: "top bottom",
    
    
  },
});
gsap.to(".eservicesSection  .topSection h1", {
  x: 0,
  duration: 1,
  opacity: 1,

  scrollTrigger: {
    trigger: ".eservicesSection  .topSection h1",
    start: "top bottom",
    
    
  },
});
gsap.to(".eservicesSection  .topSection .sectionTitle", {
  x: 0,
  duration: 1,
  opacity: 1,

  scrollTrigger: {
    trigger: ".eservicesSection  .topSection .sectionTitle",
    start: "top bottom",
    
    
  },
});
gsap.to(".academicPrograms p.sectionTitle", {
    x: 0,
    duration: 1,
    opacity: 1,
  
    scrollTrigger: {
      trigger: ".academicPrograms p.sectionTitle",
      start: "top bottom",
    },
  });
  gsap.to(".academicPrograms .topSection h1", {
    x: 0,
    duration: 1,
    opacity: 1,
    stagger:.1,
    scrollTrigger: {
      trigger: ".academicPrograms .topSectio",
      start: "top bottom",
    },
  });
  gsap.to(".academicPrograms .topSection .description", {
    x: 0,
    duration: 1,
    opacity: 1,
    stagger:.1,
    scrollTrigger: {
      trigger: ".academicPrograms .topSection",
      start: "top bottom",
    },
  });
  gsap.to(".academicPrograms .gridLayout .card", {
    y: 0,
    duration: 1,
    opacity: 1,
    stagger:.3,
    scrollTrigger: {
      trigger: ".academicPrograms",
      start: "top bottom",
    },
  });
  gsap.to(".latestNews p.sectionTitle", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".latestNews p.sectionTitle",
      start: "top bottom",
    },
  });
  gsap.to(".latestNews h1.title", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".latestNews h1.title",
      start: "top bottom",
    },
  });
  gsap.to(" .latestNews .nav-pills", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".latestNews .nav-pills",
      start: "top 80%",
    },
  });
  gsap.to(".latestNews .col-lg-4 .card", {
    y: 0,
    duration: 1,
    opacity: 1,
    stagger:.3,
    scrollTrigger: {
      trigger: ".latestNews",
      start: "top bottom",
    },
  });
  gsap.to(".openData h1.title", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".openData h1.title",
      start: "top bottom",
    },
  });
  gsap.to(".openData .data-slide", {
    y: 0,
    duration: 1,
    opacity: 1,
    stagger:.3,
    scrollTrigger: {
      trigger: ".openData .data-slide",
      start: "top bottom",
    },
  });
  gsap.to(".ourVision .storyTabs .nav-item", {
    y: 0,
    duration: 1,
    opacity: 1,
    stagger:.3,
    scrollTrigger: {
      trigger: ".ourVision .storyTabs .nav-item",
      start: "top bottom",
    },
  });
  gsap.to(".ourVision .imagesContainer .img-container:first-child", {
    x: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision .imagesContainer",
      start: "top bottom",
    },
  });
  gsap.to(".ourVision .imagesContainer .img-container:last-child", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision .imagesContainer .img-container:last-child",
      start: "top bottom",
    },
  });
  gsap.to(".ourVision .discoverOurStory", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision",
      start: "top bottom",
    },
  });
  gsap.to(".ourVision .sectionTitle", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision",
      start: "top bottom",
    },
  });
 /* gsap.to(".ourVision .ourStory p.description", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision .ourStory p.description",
      start: "top bottom",
    },
  });*/
  gsap.to(".eservicesSection .nav-pills .nav-item", {
    y: 0,
    duration: 1,
    opacity: 1,
    stagger:.4,
    scrollTrigger: {
      trigger: ".eservicesSection .nav-pills",
      start: "top 80%",
    },
  });
  gsap.to("footer .quickLinks", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay:1,
    stagger:.3,
    scrollTrigger: {
      trigger: "footer ",
      start: "top bottom",
    },
  });
  gsap.to("footer  .uniSocialIcons", {
    x: 0,
    duration: 1,
    opacity: 1,
   
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
    },
  });
  gsap.to("footer .downloadApp", {
    x: 0,
    duration: 1,
    opacity: 1,
    delay:1.5,
    scrollTrigger: {
      trigger: "footer .downloadApp",
      start: "top bottom",
    },
  });
  gsap.to("footer .copyrightSection .stamps img", {
    x: 0,
    duration: 1,
    opacity: 1,
    stagger:.4,
    scrollTrigger: {
      trigger: "footer .copyrightSection",
      start: "top bottom",
    },
  });
  gsap.to("footer .copyrightSection .copyrightText", {
    x: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: "footer .downloadApp",
      start: "top 80%",
    },
  });
  gsap.to(".ourVision .tab-pane .card", {
    y: 0,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".ourVision .tab-pane",
      start: "top 80%",
    },
  });  
}
// new animations
ScrollTrigger.batch(".overall-vision-pattern", {
  once: true,
  start: "top 15%",
  onEnter: (element, triggers) => {
      gsap.to(element, {y:0, opacity: 1, delay: 1.8, stagger: 0.15 });

  },
});

ScrollTrigger.batch(".overall-line", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, {height: "100%", delay:0.3,  opacity: 1, stagger: 0.15 });

  },
});

ScrollTrigger.batch(".subtitle-design-class", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, x:0, opacity: 1, delay: 0.4,stagger: 0.2 });

  },
});

ScrollTrigger.batch(".maintitle-design-class", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, x:0, opacity: 1, delay: 0.5, stagger: 0.2 });

  },
});

ScrollTrigger.batch(".vision-card", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, x:0, opacity: 1, delay: 0.5, stagger: 0.35 });

  },
});

ScrollTrigger.batch(".vision-content-section", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });

  },
});

ScrollTrigger.batch(".vision-images", {
  once: true,
  start: "top 95%",
  onEnter: (element, triggers) => {
      gsap.to(element, { y: 0, opacity: 1, stagger: 0.2 });
      gsap.to(".student-image", { y: 0, duration: 0.6 })
      gsap.to(".student-image-background", { y: 0, duration: 0.5 })

  },
});
