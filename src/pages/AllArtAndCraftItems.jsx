import SingleTableData from "../components/SingleTableData";
import { useEffect, useState } from "react";

const AllArtAndCraftItems = () => {
  const [allArtAndCraftItems, setAllArtAndCraftItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-items")
      .then((res) => res.json())
      .then((data) => {
        setAllArtAndCraftItems(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
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
