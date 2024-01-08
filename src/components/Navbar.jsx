import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import gsap from "gsap";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    let timeline = gsap.timeline({
      delay: 2.5,
    });
    timeline.fromTo(
      ["#header-nav"],
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      id="header-nav"
      className="w-full flex py-6 justify-between items-center navbar"
    >
      <img src={logo} className="w-[125px] h-[30px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-spaceGrotesk uppercase font-[400] text-[16px] cursor-pointer text-white hover:text-[#5fd9d1] transition-all ease-in-out ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Toggle Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-[600] text-[16px] cursor-pointer text-white  ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
