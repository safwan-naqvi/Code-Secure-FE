import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonial,
  Hero,
} from "./components";
import styles from "./style";
// typical import

import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useLayoutEffect } from "react";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({});

      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        x: "-=50",
        stagger: 0.5,
        ease: "power4.inOut",
      })
        .from("#title-author", {
          opacity: 0,
          y: "+=50",
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 2.3,
          delay: 0.3,
          ease: "power4.out",
        });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-[#2a1259] text-white fixed top-0 left-0 z-50 w-full flex flex-col sm:items-start sm:justify-between items-center justify-center gap-10 "
        >
          <div className="font-poppins tracking-tighter">
            <h1
              id="title-1"
              className="sm:text-9xl text-6xl sm:text-left text-center"
            >
              Security
            </h1>
            <h1
              id="title-2"
              className="sm:text-9xl text-6xl sm:text-left text-center"
            >
              Reliability
            </h1>
            <h1
              id="title-3"
              className="sm:text-9xl text-6xl sm:text-left text-center"
            >
              Solidity
            </h1>
          </div>
          <p id="title-author" className="font-spaceGrotesk sm:text-xl text-lg">
            Project By Syed Safwan Abbas (HBS)
          </p>
        </div>
      </div>
      <div className="bg-primary w-full overflow-hidden">
        <div
          className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}
        >
          <Navbar />
        </div>
        {/* Hero Section  */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        {/* Other Section  */}
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.wrapperWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonial />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
