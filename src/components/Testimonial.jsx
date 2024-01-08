import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "../components/FeedbackCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Testimonial = () => {
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
    <section
      ref={ref}
      id="clients"
      className={`${styles.paddingY} flex-col relative`}
    >
      {/* TODO  */}
      <div className="absolute z-0 w-[69%] h-[70%] -left-1/2 rounded-full blue__gradient " />
      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col relative mb-6 z-10`}
      >
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className={`w-full md:mt-0 mt-6`}>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-20">
        {feedback.map((card, i) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
