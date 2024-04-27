import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, image, email, password } = data;
    console.log(name, image, email, password);

    // Password validation
    if (password.length < 6) {
      return toast.error("Password should not be less than 6 digits");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password should contain at least one uppercase character");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password should contain at least one lowercase character");
    }

    // Create User Function
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        }).then(() => {
          toast.success("Account created successfuly");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error");
      });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 lg:my-[50px] space-y-3 rounded-xl bg-secondary dark:bg-slate-400 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-full px-4 py-3 rounded-none input input-bordered text-gray-800 focus:border-primary"
          />
          {errors.name && <span className="text-red-400">This field is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block text-gray-600">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            placeholder="Photo URL"
            {...register("image")}
            className="w-full px-4 py-3 rounded-none input input-bordered text-gray-800 focus:border-primary"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full px-4 py-3 rounded-none input input-bordered text-gray-800 focus:border-primary"
          />
          {errors.email && <span className="text-red-400">This field is required</span>}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <div>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                {...register("password", { required: true })}
                className="w-full px-4 py-3 rounded-none input input-bordered text-gray-800 focus:border-primary"
              />
              <span className="absolute right-4 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            {errors.password && <span className="text-red-400">This field is required</span>}
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-primary">Register</button>
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-600">
        Already have an account?
        <span> </span>
        <Link to="/login" className="underline text-gray-800">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
