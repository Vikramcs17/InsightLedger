function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        inertia: .9,
        getDirection: true,
        mobile: {
            breakpoint: 0,  
            smooth: true,
            inertia: .9,
            getDirection: true,
        },
        tablet: {
            breakpoint: 0,  
            smooth: true,
            inertia: 0.9,
            getDirection: true,
        },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, true) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locomotive();


//Swiper js home page
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



  // gsap.from(".loader>img",{
  //   duration: 6,
  //   opacity: 0,
  //   delay: 1,
  //   ease: "elastic.out(1,0.8)",
  // },"hero")
  // gsap.to(".loader",{
  //   duration: 2,
  //   opacity: 1,
  //   delay: 6,
  //   y: -1000,
  //   ease: "elastic.out(1,0.7)",
  // },"hero")



//   let tl1= gsap.timeline();

//   tl1.from(".section1>.overlay>video",{
//     opacity: 0,
//     duration: 2,
//     scale: 2,
//     ease: "elastic.out(1,0.7)",
//     delay: 6.3
//   }, "hero")
//   .from(".nav-desktop",{
//     x: 10,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic.out(1,0.8)",
//     delay: 6.6,
//     stagger: .1
//   }, "hero")
//   .from(".nav-desktop>button",{
//     x: 100,
//     opacity: 0,
//     duration: 2,
//     scale: 0.8,
//     ease: "elastic.out(1,0.8)",
//     delay: 6.9,
//     stagger: .1
//   }, "hero")
//   .from(".section1>.mid>.content>p, .section1>.mid>.content>h1, .section1>.mid>.content>.messageBox",{
//     y: 20,
//     rotateX: -45,
//     opacity: 0,
//     duration: 1.5,
//     ease: "elastic.out(1, .6)",
//     delay: 7.1,
//     stagger: .2
//   }, "hero")
//   .from(".section1>.left",{
//     // y: 20,
//     scale: .9,
//     opacity: 0,
//     duration: 7.4,
//     ease: "elastic.out(1, .6)",
//     delay: 7.4,
//     // stagger: .2
//   }, "hero")
//   .from(".section1>.left>.left-top>img , .section1>.left>.left-top>h2",{
//     x: 20,
//     duration: 1.5,
//     scale: .95,
//     opacity: 0,
//     ease: "elastic.out(1, .6)",
//     delay: 7.6,
//     stagger: .2
//   }, "hero")
//   .from(".section1>.left>.left-mid",{
//     y: 40,
//     duration: 2,
//     scale: .8,
//     opacity: 0,
//     ease: "elastic.out(1, .6)",
//     delay: 7.8,
//     // stagger: .2
//   }, "hero")
//   .from(".section1>.left>.left-bottom>h4, .section1>.left>.left-bottom>button",{
//     y: 20,
//     duration: 2,
//     scale: .8,
//     opacity: 0,
//     ease: "elastic.out(1, .6)",
//     delay: 8,
//     stagger: .2
//   }, "hero")
//   .from(".section1>.right>.top",{
//     y: 40,
//     duration: 2,
//     scale: 1.2,
//     opacity: 0,
//     ease: "elastic.out(1, .8)",
//     delay: 7.6,
//     // stagger: .2
//   }, "hero")
//   .from(".section1>.right>.bottom",{
//     y: 30,
//     duration: 2,
//     scale: 1.2,
//     opacity: 0,
//     ease: "elastic.out(1, .8)",
//     delay: 8,
//     // stagger: .2
//   }, "hero")
//   .from(".section1>.right>.bottom>.up",{
//     y: 40,
//     duration: 2,
//     scale: 1.2,
//     opacity: 0,
//     ease: "elastic.out(1, .8)",
//     delay: 8.1,
//     // stagger: .2
//   }, "hero")
//   .from(".section1>.right>.bottom>.down>button",{
//     y: 40,
//     duration: 2,
//     scale: .8,
//     opacity: 0,
//     ease: "elastic.out(1, .6)",
//     delay: 8.2,
//     stagger: .2
//   }, "hero")
//   .from(".section1>.mid>.tools>.icons>img, .section1>.mid>.tools>p",{
//     x: 40,
//     duration: 2,
//     scale: .95,
//     opacity: 0,
//     ease: "elastic.out(1, .6)",
//     delay: 8.3  ,
//     stagger: .2
//   }, "hero")


//   gsap.to(".section3>.page1",{
//     scrollTrigger: {
//       scroller: ".main",
//       trigger: ".section3>.page1",
//       start: "top 0%",
//       end: "+=300%",
//       // markers: true,
//       pin: true,
//       pinSpacing: false, 
//       scrub: 1
//   },
//   scale: .7,
//   opacity: .8

// })

// gsap.to(".section3>.page2",{
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".section3>.page2",
//     start: "top 0%",
//     end: "+=200%",
//     // markers: true,
//     pin: true,
//     pinSpacing: false, 
//     scrub: 1
// },
// scale: .7,
// opacity: .8

// })
// gsap.to(".section3>.page3",{
//   scrollTrigger: {
//     scroller: ".main",
//     trigger: ".section3>.page3",
//     start: "top 0%",
//     end: "+=100%",
//     // markers: true,
//     pin: true,
//     pinSpacing: false, 
//     scrub: 1
// },
// scale: .9,
// opacity: 1,

// })



gsap.from(".section6>.top>.left>img",{
  scrollTrigger: {
    scroller: ".main",
    trigger: ".section6>.top>.left",
    start: "top 90%",
    end: "bottom bottom",
    // markers: true,
  },
  scale: .7,
  opacity: .8,
  x: 30,
  duration: 1.5

})


const dropContainer = document.getElementById("dropcontainer")
const fileInput = document.getElementById("images")

dropContainer.addEventListener("dragover", (e) => {
  // prevent default to allow drop
  e.preventDefault()
}, false)

dropContainer.addEventListener("dragenter", () => {
  dropContainer.classList.add("drag-active")
})

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
  e.preventDefault()
  dropContainer.classList.remove("drag-active")
  fileInput.files = e.dataTransfer.files;
  const event = new Event('change', { bubbles: true });
  fileInput.dispatchEvent(event);
})