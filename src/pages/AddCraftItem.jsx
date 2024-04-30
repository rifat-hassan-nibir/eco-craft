import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image_url = form.image_url.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;

    const artAndCraftItems = {
      image_url,
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_name,
      user_email,
    };

    fetch("https://eco-craft-server.vercel.app/add-craft-item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(artAndCraftItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Item Added",
            text: "Item added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="lg:pt-[40px] lg:pb-[100px] container mx-auto">
      <h1 className="text-[32px] font-semibold text-center lg:mb-[50px]">Add Craft Items</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="grid lg:grid-cols-3 gap-[24px]">
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image_url"
              placeholder="Image URL"
              id="image"
              className="input input-bordered w-full rounded-none"
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
              required
            />
          </div>
          <div>
            <label htmlFor="subcategory-name">Subcategory Name</label>
            <select id="subcategory-name" name="subcategory_name" className="select select-bordered w-full rounded-none" required>
              <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
              <option value="Wooden Home Decor">Wooden Home Decor</option>
              <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
              <option value="Jute Home Decor">Jute Home Decor</option>
              <option value="Jute Kitchenware & Utensils">Jute Kitchenware & Utensils</option>
              <option value="Jute and Wooden Jewellery">Jute and Wooden Jewellery</option>
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
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" name="price" placeholder="Price" id="price" className="input input-bordered w-full rounded-none" />
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
              required
            />
          </div>
          <div>
            <label htmlFor="customization">Customization</label>
            <select id="customization" name="customization" className="select select-bordered w-full rounded-none" required>
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
              required
            />
          </div>
          <div>
            <label htmlFor="stock-status">Stock Status</label>
            <select id="stock-status" name="stock_status" className="select select-bordered w-full rounded-none" required>
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
        <button className="btn w-full p-3 rounded-none font-semibold bg-primary text-white mt-[32px]">Add Item</button>
      </form>
    </div>
  );
};

export default AddCraftItem;
