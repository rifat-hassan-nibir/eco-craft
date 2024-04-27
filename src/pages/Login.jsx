import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
