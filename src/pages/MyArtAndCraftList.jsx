import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import MyItemsCard from "../components/MyItemsCard";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
  const [myItems, setMyItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    fetch(`https://eco-craft-server.vercel.app/my-art-and-craft-list/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
        setIsLoading(false);
      });
  }, [email]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-spinner loading-lg mx-auto"></span>
      </div>
    );
  }

  // Delete item function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eco-craft-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const itemAfterDelete = myItems.filter((item) => item._id !== id);
              console.log(itemAfterDelete);
              setMyItems(itemAfterDelete);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // Customization Filter
  const handleCustomization = (e) => {
    const selectedOption = e.target.value;

    fetch(`https://eco-craft-server.vercel.app/customization/${email}/${selectedOption}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  };

  return (
    <div className="container mx-auto lg:mt-[50px] lg:mb-[100px]">
      <div className="lg:w-[30%] w-[60%] mx-auto mb-5">
        <label htmlFor="customization">Filter By Customization</label>
        <select
          onChange={handleCustomization}
          id="customization"
          name="customization"
          className="select select-bordered w-full rounded-none"
        >
          <option>Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {myItems.length === 0 && (
        <h1 className="text-[32px] flex items-center justify-center font-semibold text-center h-[50vh]">You have not added any item yet</h1>
      )}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {myItems.map((myItem, index) => (
          <MyItemsCard myItem={myItem} handleDelete={handleDelete} key={index}></MyItemsCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
