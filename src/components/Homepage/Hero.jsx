import Slider from "./Slider";

const Hero = () => {
  return (
    <div className="lg:pt-[40px] lg:pb-[100px] container mx-auto">
      <div className="flex lg:flex-row lg:items-center flex-col">
        <div className="lg:w-1/2 space-y-[8px]">
          <h1 className="lg:text-[54px] font-bold dark:text-white">Welcome To Eco Craft</h1>
          <p className="text-[16px] lg:w-[80%] tracking-wide text-gray-500 dark:text-gray-300">
            Discover the Natural Elegance: Crafted Wood & Jute Creations Await! Explore Our Sustainable Selection Today.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
