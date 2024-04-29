import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/Homepage/CraftItemsSection";
import Hero from "../components/Homepage/Hero";
import SubCategoriesCard from "../components/Homepage/SubCategoriesCard";

const Home = () => {
  const subCategoriesData = useLoaderData();
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
