import { Link } from "react-router-dom";

const SubCategoryWiseProductCard = ({ productData }) => {
  const { _id, image_url, item_name, price, rating, customization, stock_status, short_description, processing_time } = productData;
  return (
    <div className="mx-auto">
      <div className="relative flex flex-col gap-5 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-[250px]">
          <img src={image_url} alt="card-image" className="w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">{item_name}</p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">${price}</p>
          </div>
          <div className="flex justify-between">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">Rating: {rating}</p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              Customization: {customization}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            Stock Status: {stock_status}
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            Processing Time: {processing_time}
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">{short_description}</p>
        </div>
        <Link
          to={`/craft-item-details/${_id}`}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-primary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          type="button"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default SubCategoryWiseProductCard;
