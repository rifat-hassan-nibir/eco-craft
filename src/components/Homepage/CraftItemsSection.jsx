import CraftItemCard from "./CraftItemCard";

const CraftItemsSection = () => {
  return (
    <div className="py-[70px] bg-secondary dark:bg-gray-600">
      <div className="container mx-auto">
        <h1 className="text-[36px] font-semibold text-center dark:text-white">Craft Items</h1>
        <CraftItemCard></CraftItemCard>
      </div>
    </div>
  );
};

export default CraftItemsSection;
