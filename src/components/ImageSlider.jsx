import React, { useState } from "react";
import Instalacion1 from "../assets/bg_instalaciones/instalaciones-1.jpg";
import Instalacion2 from "../assets/bg_instalaciones/instalaciones-2.jpg";
import Instalacion3 from "../assets/bg_instalaciones/instalaciones-3.jpg";
import Instalacion4 from "../assets/bg_instalaciones/instalaciones-4.jpg";
import Instalacion5 from "../assets/bg_instalaciones/instalaciones-5.jpg";
import Instalacion6 from "../assets/bg_instalaciones/instalaciones-6.jpg";
import Instalacion7 from "../assets/bg_instalaciones/instalaciones-7.jpg";
import Instalacion8 from "../assets/bg_instalaciones/instalaciones-8.jpg";
import Instalacion9 from "../assets/bg_instalaciones/instalaciones-9.jpg";
import Instalacion10 from "../assets/bg_instalaciones/instalaciones-10.jpg";
import Instalacion11 from "../assets/bg_instalaciones/instalaciones-11.jpg";
import Instalacion12 from "../assets/bg_instalaciones/instalaciones-12.jpg";
import Instalacion13 from "../assets/bg_instalaciones/instalaciones-13.jpg";
import Instalacion14 from "../assets/bg_instalaciones/instalaciones-14.jpg";
import Instalacion15 from "../assets/bg_instalaciones/instalaciones-15.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusDivs(n) {
    n = slideIndex + n;

    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {
      n = 1;
    } else if (n < 1) {
      n = x.length;
    }

    setSlideIndex(n);
  }

  return (
    <div className="flex flex-row items-stretch justify-center">
      <div
        className="p-5 flex flex-col justify-center cursor-pointer"
        onClick={() => plusDivs(-1)}
      >
        <IoIosArrowBack />
      </div>
      <div className="flex justify-center items-center h-screen w-full relative select-none">
        <div className="absolute top-0 right-0 p-5">
          ({slideIndex}/{document.getElementsByClassName("mySlides").length})
        </div>
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 1,
            }
          )}
          src={Instalacion1}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 2,
            }
          )}
          src={Instalacion2}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 3,
            }
          )}
          src={Instalacion3}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 4,
            }
          )}
          src={Instalacion4}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 5,
            }
          )}
          src={Instalacion5}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 6,
            }
          )}
          src={Instalacion6}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 7,
            }
          )}
          src={Instalacion7}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 8,
            }
          )}
          src={Instalacion8}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 9,
            }
          )}
          src={Instalacion9}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 10,
            }
          )}
          src={Instalacion10}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 11,
            }
          )}
          src={Instalacion11}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 12,
            }
          )}
          src={Instalacion12}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 13,
            }
          )}
          src={Instalacion13}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 14,
            }
          )}
          src={Instalacion14}
        />
        <img
          className={classNames(
            "mySlides rounded-lg h-screen w-full object-contain",
            {
              hidden: slideIndex !== 15,
            }
          )}
          src={Instalacion15}
        />
      </div>
      <div
        className="p-5 flex flex-col justify-center cursor-pointer"
        onClick={() => plusDivs(+1)}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default ImageSlider;
