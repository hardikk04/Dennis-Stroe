let number = 0;
const myInterval = setInterval(() => {
  number++;
  document.querySelector(".loader>h1").textContent = number + "%";
  if (number === 100) {
    gsap.to(".loader", {
      top: "100vh",
      //   duration: 1,
      ease: "power1.in",
    });
    clearInterval(myInterval);
  }
}, 45);

function navAnimation() {
  const clutterAnimation = (element) => {
    const htmlTagAll = document.querySelectorAll(element);
    htmlTagAll.forEach((htmlTag) => {
      let clutter = "";
      htmlTag.textContent.split("").forEach((word) => {
        clutter += `<span class="inline-block">${word}</span>`;
      });
      htmlTag.innerHTML = clutter;
    });
  };

  clutterAnimation(".nav-left>h3");
  const navLeft = document.querySelector(".nav-left");

  navLeft.addEventListener("mouseenter", () => {
    gsap.to(".nav-left1>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".nav-left2>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navLeft.addEventListener("mouseleave", () => {
    gsap.to(".nav-left1>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".nav-left2>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-elem1>h3");
  const navCenterElem1 = document.querySelector(".nav-elem1");

  navCenterElem1.addEventListener("mouseenter", () => {
    gsap.to(".center-text1>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text2>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navCenterElem1.addEventListener("mouseleave", () => {
    gsap.to(".center-text1>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text2>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-elem2>h3");
  const navCenterElem2 = document.querySelector(".nav-elem2");

  navCenterElem2.addEventListener("mouseenter", () => {
    gsap.to(".center-text3>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text4>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navCenterElem2.addEventListener("mouseleave", () => {
    gsap.to(".center-text3>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text4>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-elem3>h3");
  const navCenterElem3 = document.querySelector(".nav-elem3");

  navCenterElem3.addEventListener("mouseenter", () => {
    gsap.to(".center-text5>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text6>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navCenterElem3.addEventListener("mouseleave", () => {
    gsap.to(".center-text5>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text6>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-elem4>h3");
  const navCenterElem4 = document.querySelector(".nav-elem4");

  navCenterElem4.addEventListener("mouseenter", () => {
    gsap.to(".center-text7>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text8>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navCenterElem4.addEventListener("mouseleave", () => {
    gsap.to(".center-text7>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text8>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-elem5>h3");
  const navCenterElem5 = document.querySelector(".nav-elem5");

  navCenterElem5.addEventListener("mouseenter", () => {
    gsap.to(".center-text9>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text10>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  navCenterElem5.addEventListener("mouseleave", () => {
    gsap.to(".center-text9>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".center-text10>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });

  clutterAnimation(".nav-right>h3");
  const navright = document.querySelector(".nav-right");

  navright.addEventListener("mouseenter", () => {
    gsap.to(".nav-right1>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".nav-right2>span", {
      y: -25,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });
  navright.addEventListener("mouseleave", () => {
    gsap.to(".nav-right1>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });

    gsap.to(".nav-right2>span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 0.6,
    });
  });
}

navAnimation();

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000, // Delay between slides in milliseconds (5 seconds in this example)
  },
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  const currentTime = `${formattedHours}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")} ${ampm}`;

  console.clear(); // Use console.clear() to clear the console before printing the updated time
  console.log(`Current Time: ${currentTime}`);
  document.querySelector(".time").textContent = currentTime;
}

setInterval(updateClock, 1000);
