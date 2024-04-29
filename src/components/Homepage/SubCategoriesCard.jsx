const SubCategoriesCard = ({ category }) => {
  const { image, name, short_description } = category;
  return (
    <div className="mx-auto">
      <div className="relative flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img src={image} className="h-[250px] w-full" alt={name} />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{name}</h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">{short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default SubCategoriesCard;
