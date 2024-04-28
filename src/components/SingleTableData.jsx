import { Link } from "react-router-dom";

const SingleTableData = ({ singleCraftItem, index }) => {
  const { _id, item_name, subcategory_name, price } = singleCraftItem;
  return (
    <tr className="items-center">
      <th>
        <p>{index + 1}</p>
      </th>
      <td>
        <p>{item_name}</p>
      </td>
      <td>
        <p>{subcategory_name}</p>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        <Link to={`/craft-item-details/${_id}`} className="bg-primary text-white inline-block text-center py-2 px-4">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default SingleTableData;
