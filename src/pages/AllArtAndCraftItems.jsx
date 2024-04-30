import SingleTableData from "../components/SingleTableData";
import { useEffect, useState } from "react";

const AllArtAndCraftItems = () => {
  const [allArtAndCraftItems, setAllArtAndCraftItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://eco-craft-server.vercel.app/all-items")
      .then((res) => res.json())
      .then((data) => {
        setAllArtAndCraftItems(data);
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
    <div className="container mx-auto pt-[30px] pb-[50px]">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allArtAndCraftItems.map((singleCraftItem, index) => (
              <SingleTableData singleCraftItem={singleCraftItem} index={index} key={index}></SingleTableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
