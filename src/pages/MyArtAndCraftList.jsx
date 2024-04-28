import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import MyItemsCard from "../components/MyItemsCard";

const MyArtAndCraftList = () => {
  const [myItems, setMyItems] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/my-art-and-craft-list/${email}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, [email]);

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {myItems.map((myItem, index) => (
          <MyItemsCard myItem={myItem} key={index}></MyItemsCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
