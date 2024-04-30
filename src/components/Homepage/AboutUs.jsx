import AboutUsImage from "../../assets/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="bg-secondary dark:bg-gray-700 lg:py-[100px] py-[50px]">
      <div className=" container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-[50px] gap-[25px]">
          <div className="lg:w-1/2">
            <img src={AboutUsImage} alt="" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="lg:text-[32px] text-[24px] dark:text-white text-center lg:text-left font-bold mb-5">About Us</h1>
            <p className="text-[16px] text-gray-600 dark:text-gray-300">
              Welcome to Eco Craft, your destination for beautifully crafted wood and jute creations. At Eco Craft, we blend the natural
              elegance of wood with the rustic charm of jute to create unique pieces that add warmth and character to any space. Each item
              in our collection is meticulously handcrafted by skilled artisans, combining traditional techniques with modern design
              sensibilities. We&apos;re committed to sustainability and ethical practices, sourcing our materials responsibly and supporting
              local communities. Discover the beauty of handmade craftsmanship with Eco Craft. Thank you for choosing us to adorn your home
              with timeless elegance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
