import Button from "./Button";
import Carousel from "./Carousel";
// import Slider from "./Slider";

function About() {
  return (
    <div className="p-10 mt-10 text-white lg:px-24 lg:mt-20" id="about">
      <div className="flex item flex-col items-center justify-center">
        <div className="text-center lg:text-start font-bold tracking-wider text-3xl leading-10 sm:text-4xl sm:leading-[50px] lg:text-5xl">
          What people are saying about us
        </div>
        <span className="opacity-70 text-base text-center font-medium leading-7 mt-4 sm:leading-8 sm:text-xl">
          Everything you need to accepts card payments and your business
          anywhere on the planet.
        </span>
      </div>
      <div>
        {/* <Slider /> */}
        <Carousel />
        <div className="flex flex-col gap-14 lg:justify-between sm:gap-7 justify-center items-center mt-24 sm:flex-wrap sm:flex-row lg:px-0 l">
          <img
            src="src/assets/download.png"
            className="w-[130px] sm:w-[150px] lg:w-[200px]"
            alt=""
          />
          <img
            src="src/assets/download (1).png"
            alt=""
            className="w-[130px] sm:w-[150px] lg:w-[200px]"
          />
          <img
            src="src/assets/download (2).png"
            alt=""
            className="w-[130px] sm:w-[150px] lg:w-[200px]"
          />
          <img
            src="src/assets/download (3).png"
            alt=""
            className="w-[130px] sm:w-[150px] lg:w-[200px]"
          />
        </div>

        <div id="solution"></div>
        <div className="bg py-12 sm:py-14 sm:px-14 sm:mx-4 px-10 rounded-3xl shadow-xl mt-28 flex flex-col justify-center items-center lg:flex-row lg:gap-10 lg:mt-20 lg:py-20 lg:mb-10 lg:mx-0">
          <div className="lg:flex lg:flex-col lg:items-start lg:">
            <div className="font-bold text-xl text-center sm:text-4xl sm:leading-[50px] lg:text-start">
              Let's try our service now!
            </div>
            <div className="font-medium opacity-65 text-center text-base mt-5 mb-1 leading-7 sm:leading-8 sm:text-xl lg:text-start ">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </div>
          </div>
          <Button className="lg:whitespace-nowrap" />
        </div>
      </div>
    </div>
  );
}

export default About;
