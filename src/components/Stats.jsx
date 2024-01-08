import { useEffect, useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Stats = () => {
  const stat = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    const el = stat.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, duration: 2, ease: "sine.out" },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section
      ref={stat}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[54px] leading-[48px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-white xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
