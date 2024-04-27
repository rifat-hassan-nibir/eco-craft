import { useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const allArtAndCraftItems = useLoaderData();
  console.log(allArtAndCraftItems);
  return (
    <div className="container mx-auto">
      <h1>All art and crafts {allArtAndCraftItems.length}</h1>
    </div>
  );
};

export default AllArtAndCraftItems;
