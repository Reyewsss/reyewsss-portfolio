import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation - SUPER FAST
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.02, // Was 0.05 - SUPER FAST
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.01, // Was 0.01
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    // ============================================
    // UPWARD ANIMATION (Letters slide UP from below) - SUPER FAST
    // ============================================
    .from(".texts-container span", {
      duration: 0.3,    // Was 0.8 - SUPER FAST
      delay: 0.1,       // Was 0.5 - SUPER FAST
      y: 70,
      skewY: 10,
      stagger: 0.06,    // Was 0.2 - SUPER FAST
      ease: "Power3.easeOut",
    })
    // ============================================
    // DOWNWARD ANIMATION (Letters slide DOWN and out) - SUPER FAST
    // ============================================
    .to(".texts-container span", {
      duration: 0.2,    // Was 0.5 - SUPER FAST
      y: 70,
      skewY: -20,
      stagger: 0.04,    // Was 0.1 - SUPER FAST
      ease: "Power3.easeOut",
    })
    .to(".landing", {
      duration: 0.02,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.02,   // Was 0.05 - SUPER FAST
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 0.3,    // Was 0.6 - SUPER FAST
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 0.4,  // Was 0.8 - SUPER FAST
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: mobileLanding(),
      },
      "-=0.5"           // Was -=1 - SUPER FAST
    )
    .from(".landing__main .text", {
      duration: 0.5,    // Was 1 - SUPER FAST
      y: 10,
      opacity: 0,
      stagger: {
        amount: 0.5,    // Was 1 - SUPER FAST
      },
      ease: "power3.easeInOut",
    })
    .from(".links .item", {
      duration: 0.15,   // Was 0.3 - SUPER FAST
      opacity: 0,
      delay: window.innerWidth < 763 ? -1 : -0.2, // Was -2 : -0.4 - SUPER FAST
      stagger: {
        amount: 0.15,   // Was 0.3 - SUPER FAST
      },
      ease: "expo.easeOut",
      onComplete: animateMainShape(),
    })
    .from(".main-circle", {
      duration: 0.3,    // Was 0.6 - SUPER FAST
      opacity: 0,
      ease: "power3.easeInOut",
      onComplete: animateShapes(),
    })
    .from(".shapes .shape", {
      duration: 0.3,    // Was 0.6 - SUPER FAST
      opacity: 0,
      delay: -0.2,      // Was -0.5 - SUPER FAST
      ease: "power3.easeInOut",
      stagger: 0.2,     // Was 0.5 - SUPER FAST
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const openMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.02, // Was 0.05 - SUPER FAST
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.02, // Was 0.05 - SUPER FAST
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.02, // Was 0.05 - SUPER FAST
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.02, // Was 0.05 - SUPER FAST
      delay: 0.08,    // Was 0.15 - SUPER FAST
      css: { fill: "#ffffff" },
    })
    .to(
      [".nav-secondary", ".nav-primary"],
      {
        duration: 0.25, // Was 0.5 - SUPER FAST
        height: "100%",
        transformOrigin: "right top",
        stagger: {
          amount: 0.03, // Was 0.05 - SUPER FAST
        },
        ease: "power3.inOut",
      },
      "-=.15" // Was -=.3 - SUPER FAST
    )
    .from(
      ".nav-link",
      {
        duration: 0.15, // Was 0.3 - SUPER FAST
        x: -80,
        opacity: 0,
        stagger: {
          amount: 0.15, // Was 0.3 - SUPER FAST
        },
        ease: "Power3.in",
      },
      "-=.1" // Was -=.2 - SUPER FAST
    );
};

export const closeMenu = () => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.01, // Was 0.03 - SUPER FAST
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.25, // Was 0.5 - SUPER FAST
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.03, // Was 0.05 - SUPER FAST
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.02, // Was 0.05 - SUPER FAST
      delay: -0.08,   // Was -0.15 - SUPER FAST
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.15, // Was 0.3 - SUPER FAST
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.01, // Was 0.03 - SUPER FAST
      css: { display: "none" },
    });
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 0.3, // Was 0.6 - SUPER FAST
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 0.3, // Was 0.6 - SUPER FAST
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .shape", {
      duration: 1, // Was 2 - SUPER FAST
      rotate: 360,
      delay: -0.2, // Was -0.5 - SUPER FAST
      ease: "power3.easeInOut",
      stagger: 0.5, // Was 1 - SUPER FAST
    })
    .to(".shapes .shape-3", {
      duration: 0.25, // Was 0.5 - SUPER FAST
      rotate: 360,
      delay: -0.5, // Was -1 - SUPER FAST
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 0.75, // Was 1.5 - SUPER FAST
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 0.25, // Was 0.5 - SUPER FAST
    })
    .to(".shapes .shape", {
      duration: 0.25, // Was 0.5 - SUPER FAST
      opacity: 0,
      delay: -0.25, // Was -0.5 - SUPER FAST
      ease: "power3.easeInOut",
      stagger: 0.25, // Was 0.5 - SUPER FAST
    })
    .to(".shapes .shape", {
      duration: 0.4, // Was 0.8 - SUPER FAST
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 0.25, // Was 0.5 - SUPER FAST
    });
};

const animateMainShape = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 1.5, // Was 3 - SUPER FAST
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 1.5, // Was 3 - SUPER FAST
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 1, // Was 2 - SUPER FAST
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 1,
      })
      .from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.1, // Was 0.2 - SUPER FAST
        opacity: 0,
        y: 30,
        stagger: 0.02, // Was 0.05 - SUPER FAST
        ease: "Power3.easeOut",
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector(".link"), {
      duration: 0,
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 0.5, // Was 1 - SUPER FAST
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 0.25, // Was 0.5 - SUPER FAST
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};