import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import MyItemsCard from "../components/MyItemsCard";

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
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="container mx-auto">
      {myItems.length < 1 && (
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
