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

// locomotive();



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

  //Mouse Follower

  // Shery.mouseFollower({
  //   //Parameters are optional.
  //   skew: true,
  //   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  //   duration: 1,
  // });

//Buttons Working 
document.querySelector('.nav-desktop button:nth-child(1)').addEventListener('click', function() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-desktop button:nth-child(2)').addEventListener('click', function() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-desktop button:nth-child(3)').addEventListener('click', function() {
  document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav-desktop button:nth-child(4)').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

