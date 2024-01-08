import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const CardDeal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, duration: 2, ease: "sine.out" },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: el,
          start: "top 40%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section ref={ref} className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal .
          <br className="sm:block hidden" /> in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <img src={card} alt="" className="z-5 h-[90%] w-[90%] object-contain" />
        <div className="absolute z-[3] top-0 w-[80%] h-[50%] rounded-full blue__gradient -right-1/2" />
      </div>
    </section>
  );
};

export default CardDeal;
