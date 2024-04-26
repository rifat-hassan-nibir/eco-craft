import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <div className="flex lg:flex-row lg:items-center flex-col">
        <div className="lg:w-1/2 space-y-[8px]">
          <h1 className="text-[48px] font-bold">Welcome To Eco Craft</h1>
          <p className="text-[16px] lg:w-[70%]">
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

export default Home;
