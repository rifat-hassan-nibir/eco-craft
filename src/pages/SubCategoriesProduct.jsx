import { useLoaderData, useParams } from "react-router-dom";
import SubCategoryWiseProductCard from "../components/SubCategoryWiseProductCard";

const SubCategoriesProduct = () => {
  const loadedData = useLoaderData();
  const { name } = useParams();
  console.log(loadedData);

  return (
    <div className="container mx-auto">
      <h1 className="text-[32px] font-semibold text-center">{name}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {loadedData.map((item, index) => (
          <SubCategoryWiseProductCard productData={item} key={index}></SubCategoryWiseProductCard>
        ))}
      </div>
    </div>
  );
};

export default SubCategoriesProduct;
