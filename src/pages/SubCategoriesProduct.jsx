import { useLoaderData, useParams } from "react-router-dom";
import SubCategoryWiseProductCard from "../components/SubCategoryWiseProductCard";

const SubCategoriesProduct = () => {
  const loadedData = useLoaderData();
  const { name } = useParams();

  return (
    <div className="container mx-auto">
      <h1 className="lg:text-[32px] text-[24px] dark:text-white text-center font-semibold mb-5">{name}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-[80px]">
        {loadedData.map((item, index) => (
          <SubCategoryWiseProductCard productData={item} key={index}></SubCategoryWiseProductCard>
        ))}
      </div>
    </div>
  );
};

export default SubCategoriesProduct;
