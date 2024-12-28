import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (prop) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true, // Enable swipe gestures
    touchMove: true,
    arrows: false,
    border: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnTouch: true,
  };

  return (
    <div className={`mt-14 sm:px-8  lg:flex lg:justify-center`}>
      <Slider {...settings} className="border-0 p-0 slick-container lg:w-[50%]">
        <div className="text-white flex px-4 pl-6 py-9 worker sm:py-14 rounded-3xl duration-300 cursor-pointer shadow-xl sm:px-6 border-0">
          <SingleQuote />
          <span className="opacity-70 mt-5 sm:leading-8 font-medium block sm:text-xl lg:text-2xl ">
            Money is only a tool. It will take you wherever you wish, but it wll
            not replace you as the driver
          </span>
          <div className="flex mt-6  items-center gap-5">
            <img
              alt=""
              src="src/assets/people01.a40f2b61208976a6d644.png"
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="">
              <div className="font-bold text-lg sm:text-xl">Hannah Jenson</div>
              <span className="opacity-70 font-medium sm:text-lg">
                Founder & Leader
              </span>
            </div>
          </div>
        </div>
        <div className="text-white flex px-4 pl-6 py-9 worker sm:py-14 rounded-3xl duration-300 cursor-pointer shadow-xl sm:px-6 border-0">
          <SingleQuote />
          <span className="opacity-70 mt-5 sm:leading-8 font-medium block sm:text-xl lg:text-2xl ">
            Money makes your life easier. if you're lucky to have it, you're
            lucky.
          </span>
          <div className="flex mt-6 items-center gap-5">
            <img
              src="src/assets/people02.bba1091ac468e1439956.png"
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="">
              <div className="font-bold text-lg sm:text-xl">Steve Mark</div>
              <span className="opacity-70 font-medium sm:text-lg">
                Founder & Leader
              </span>
            </div>
          </div>
        </div>
        <div className="text-white flex px-4 pl-6 py-9 worker sm:py-14 rounded-3xl duration-300 cursor-pointer shadow-xl sm:px-6 border-0">
          <SingleQuote />
          <span className="opacity-70 mt-5 sm:leading-8 font-medium block sm:text-xl lg:text-2xl ">
            It is usually in the money business, finance, and international
            trade that are really rich.
          </span>
          <div className="flex mt-6 items-center gap-5">
            <img
              src="src/assets/download (4).png"
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="">
              <div className="font-bold text-lg sm:text-xl">Kenn Gallagher</div>
              <span className="opacity-70 font-medium sm:text-lg">
                Founder & Leader
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

function SingleQuote() {
  return (
    <svg
      className={`w-[33px] sm:w-[50px]`}
      viewBox="0 0 43 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7984 27.6L18.9984 0H12.3984L0.398438 27.6H11.7984ZM35.7984 27.6L42.9984 0H36.3984L24.3984 27.6H35.7984Z"
        fill="url(#paint0_linear_310_509)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_310_509"
          x1="28.8615"
          y1="-24.7969"
          x2="41.7939"
          y2="24.1471"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00887753" stopColor="#DEF9FA" />
          <stop offset="0.1723" stopColor="#BEF3F5" />
          <stop offset="0.4204" stopColor="#9DEDF0" />
          <stop offset="0.5512" stopColor="#7DE7EB" />
          <stop offset="0.7154" stopColor="#5CE1E6" />
          <stop offset="1" stopColor="#33BBCF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Carousel;
