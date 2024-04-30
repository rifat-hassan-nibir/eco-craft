import { Link } from "react-router-dom";

const SubCategoriesCard = ({ category }) => {
  const { image, name, short_description } = category;
  return (
    <Link to={`/sub-category/${name}`} className="mx-auto">
      <div className="relative flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <img src={image} className="h-[250px] w-full" alt={name} />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-3">{name}</h4>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">{short_description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SubCategoriesCard;
