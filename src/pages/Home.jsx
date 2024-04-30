import AboutUs from "../components/Homepage/AboutUs";
import CraftItems from "../components/Homepage/CraftItemsSection";
import Hero from "../components/Homepage/Hero";
import SubCategoriesCard from "../components/Homepage/SubCategoriesCard";
import { useEffect, useState } from "react";
import WhatDoWeOffer from "../components/Homepage/WhatDoWeOffer";

const Home = () => {
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://eco-craft-server.vercel.app/sub-categories")
      .then((res) => res.json())
      .then((data) => {
        setSubCategoriesData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  return (
    <div>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <CraftItems></CraftItems>
      <div className=" bg-secondary dark:bg-gray-700 lg:py-[100px] py-[50px]">
        <h1 className="lg:text-[32px] text-[24px] dark:text-white text-center font-semibold mb-5">Sub Categories</h1>
        <div className="container mx-auto  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {subCategoriesData.map((category, index) => (
            <SubCategoriesCard category={category} key={index}></SubCategoriesCard>
          ))}
        </div>
      </div>
      <WhatDoWeOffer></WhatDoWeOffer>
    </div>
  );
};

export default Home;
