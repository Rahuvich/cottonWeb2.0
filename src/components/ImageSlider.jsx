import React, { useState } from "react";
import Instalacion0 from "../assets/bg_instalaciones/instalaciones-0.jpg";
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
  const images = [
    Instalacion0,
    Instalacion1,
    Instalacion2,
    Instalacion3,
    Instalacion4,
    Instalacion5,
    Instalacion6,
    Instalacion7,
    Instalacion8,
    Instalacion9,
    Instalacion10,
    Instalacion11,
    Instalacion12,
    Instalacion13,
    Instalacion14,
    Instalacion15,
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  function plusDivs(n) {
    n = slideIndex + n;

    var x = document.getElementsByClassName("mySlides");

    if (n > x.length - 1) {
      n = 0;
    } else if (n < 0) {
      n = x.length - 1;
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
      <div className="flex justify-center items-center h-almost-screen w-full relative select-none">
        <div className="absolute top-0 right-0 p-5 bg-white bg-opacity-75">
          ({slideIndex}/{document.getElementsByClassName("mySlides").length - 1}
          )
        </div>
        {images.map((image, index) => (
          <img
            className={classNames(
              "mySlides rounded-lg h-almost-screen w-full object-contain",
              {
                hidden: slideIndex !== index,
              }
            )}
            src={image}
          />
        ))}
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
