import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
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
    <section ref={ref} id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionFeatures} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
