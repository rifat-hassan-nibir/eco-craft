import { useContext, useEffect } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/my-art-and-craft-list/${email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [email]);

  return (
    <div className="container mx-auto">
      <h1>My art and craft items</h1>
    </div>
  );
};

export default MyArtAndCraftList;
