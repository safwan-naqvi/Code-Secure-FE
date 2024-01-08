import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Billings = () => {
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
    <section ref={ref} id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImg} flex-col`}>
        <img src={bill} alt="" className="z-5 h-[90%] w-[90%] object-contain" />
        <div className="absolute z-[3] top-0 w-[80%] h-[50%] rounded-full white__gradient -left-1/2" />
        <div className="absolute z-[3] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient -left-1/2" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
          <img
            src={apple}
            alt="Apple Store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billings;
