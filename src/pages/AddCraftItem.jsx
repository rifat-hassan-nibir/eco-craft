const AddCraftItem = () => {
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

    console.log(
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
      user_email
    );
  };
  return (
    <div className="lg:pt-[40px] lg:pb-[100px]">
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
              <option value="wooden_furniture_&_sculptures">Wooden Furniture & Sculptures</option>
              <option value="wooden_home_decor">Wooden Home Decor</option>
              <option value="wooden_utensils_and_kitchenware">Wooden Utensils and Kitchenware</option>
              <option value="jute_home_decor">Jute Home Decor</option>
              <option value="jute_kitchenware_and_utensils">Jute Kitchenware & utensils</option>
              <option value="jute_and_wooden_jewellery">Jute and wooden jewellery</option>
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
            <select id="rating" name="rating" className="select select-bordered w-full rounded-none" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label htmlFor="customization">Customization</label>
            <select id="customization" name="customization" className="select select-bordered w-full rounded-none" required>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label htmlFor="processing-time">Processing Time</label>
            <input
              type="number"
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
              <option value="yes">In Stock</option>
              <option value="no">Made to Order</option>
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
              required
            />
          </div>
        </div>
        <button className="btn w-full p-3 rounded-none font-semibold bg-primary text-white mt-[24px]">Add Item</button>
      </form>
    </div>
  );
};

export default AddCraftItem;
