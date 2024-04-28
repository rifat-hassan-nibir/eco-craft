import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const UpdateItem = () => {
  const { user } = useContext(AuthContext);

  const myItemData = useLoaderData();

  const { image_url, item_name, subcategory_name, rating, customization, short_description, price, stock_status, processing_time } =
    myItemData;

  const handleUpdate = () => {
    console.log("hello");
  };
  console.log(myItemData);

  return (
    <div className="lg:pt-[40px] lg:pb-[100px] container mx-auto">
      <h1 className="text-[32px] font-semibold text-center lg:mb-[50px]">Add Craft Items</h1>
      <form onSubmit={handleUpdate}>
        <div className="grid lg:grid-cols-3 gap-[24px]">
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              id="image"
              className="input input-bordered w-full rounded-none"
              defaultValue={image_url}
              required
            />
          </div>
          <div>
            <label htmlFor="item-name">Item Name</label>
            <input
              type="text"
              name="item_name"
              placeholder="Item Name"
              id="item-name"
              className="input input-bordered w-full rounded-none"
              defaultValue={item_name}
              required
            />
          </div>
          <div>
            <label htmlFor="subcategory-name">Subcategory Name</label>
            <select
              id="subcategory-name"
              name="subcategory_name"
              className="select select-bordered w-full rounded-none"
              required
              defaultValue={subcategory_name}
            >
              <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
              <option value="Wooden Home Decor">Wooden Home Decor</option>
              <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
              <option value="Jute Home Decor">Jute Home Decor</option>
              <option value="Jute Kitchenware & Utensils">Jute Kitchenware & Utensils</option>
              <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
            </select>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="short-description">Short Description</label>
            <input
              type="text"
              name="short_description"
              placeholder="Short Description"
              id="short-description"
              className="input input-bordered w-full rounded-none"
              defaultValue={short_description}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              id="price"
              className="input input-bordered w-full rounded-none"
              defaultValue={price}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              id="rating"
              name="rating"
              className="input input-bordered w-full rounded-none"
              defaultValue={rating}
              required
            />
          </div>
          <div>
            <label htmlFor="customization">Customization</label>
            <select
              id="customization"
              name="customization"
              className="select select-bordered w-full rounded-none"
              defaultValue={customization}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="processing-time">Processing Time</label>
            <input
              type="text"
              name="processing_time"
              placeholder="Processing Time"
              id="processing-time"
              className="input input-bordered w-full rounded-none"
              defaultValue={processing_time}
              required
            />
          </div>
          <div>
            <label htmlFor="stock-status">Stock Status</label>
            <select
              id="stock-status"
              name="stock_status"
              className="select select-bordered w-full rounded-none"
              defaultValue={stock_status}
              required
            >
              <option value="Yes">In Stock</option>
              <option value="No">Made to Order</option>
            </select>
          </div>
          <div>
            <label htmlFor="user-name">User Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="User Name"
              id="user-name"
              className="input input-bordered w-full rounded-none"
              defaultValue={user.displayName}
              disabled
              required
            />
          </div>
          <div>
            <label htmlFor="user-email">User Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="User Email"
              id="user-email"
              className="input input-bordered w-full rounded-none"
              defaultValue={user.email}
              disabled
              required
            />
          </div>
        </div>
        <button className="btn w-full p-3 rounded-none font-semibold bg-primary text-white mt-[32px]">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;