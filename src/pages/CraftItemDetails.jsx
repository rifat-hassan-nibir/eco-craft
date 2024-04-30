import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CraftItemDetails = () => {
  const { id } = useParams();
  const [craftItemData, setCraftItemData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://eco-craft-server.vercel.app/craft-item-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraftItemData(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  const {
    image_url,
    item_name,
    subcategory_name,
    rating,
    customization,
    short_description,
    price,
    stock_status,
    processing_time,
    user_name,
    user_email,
  } = craftItemData;

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white dark:bg-gray-600 dark:text-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={image_url} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm text-gray-500 tracking-widest">Category: {subcategory_name}</h2>
              <h1 className="text-gray-900 text-3xl font-semibold mb-1">{item_name}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-400 ml-3">{rating}</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <p>Customizable: {customization}</p>
                </span>
              </div>
              <p className="leading-relaxed">{short_description}</p>
              <h1 className="text-gray-900 text-xl font-semibold mb-1">Price: ${price}</h1>
              <p className="leading-relaxed">In Stock: {stock_status}</p>
              <p className="leading-relaxed">User Name: {user_name}</p>
              <p className="leading-relaxed">User Email: {user_email}</p>
              <p className="leading-relaxed">Processing Time: {processing_time}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CraftItemDetails;
