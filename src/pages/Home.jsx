import CraftItems from "../components/Homepage/CraftItemsSection";
import Hero from "../components/Homepage/Hero";
import SubCategoriesCard from "../components/Homepage/SubCategoriesCard";
import { useEffect, useState } from "react";

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
      <CraftItems></CraftItems>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {subCategoriesData.map((category, index) => (
          <SubCategoriesCard category={category} key={index}></SubCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
