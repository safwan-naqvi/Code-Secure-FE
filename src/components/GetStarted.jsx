import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[3px] cursor-pointer`}
  >
    <div
      className={`flex flex-col items-center justify-center bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins text-[18px] font-medium leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="Arrow Up"
          className="h-[24px] w-[24px] object-contain"
        />
      </div>
      <p className="font-poppins text-[18px] font-medium leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
