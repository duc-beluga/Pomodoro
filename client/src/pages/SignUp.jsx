import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="flex flex-col gap-3 border-2 p-3 rounded-lg shadow-lg w-96 bg-white py-10"
        >
          <input
            {...register("username")}
            placeholder="Email"
            className="p-3 border-2 rounded-md"
          />
          <input
            {...register("password")}
            placeholder="Password"
            className="p-3 border-2 rounded-md"
            type="password"
          />
          <input
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="p-3 border-2 rounded-md"
            type="password"
          />
          <p>{data}</p>
          <button
            type="submit"
            className="p-2 rounded-md shadow-lg bg-blue-500 text-white font-semibold"
          >
            Sign Up
          </button>
          <span className="my-4">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Log In
            </Link>
          </span>
          <Link
            to={`${import.meta.env.BACKEND_URL}/auth/github`}
            className="border-t-2"
          >
            <span className="flex gap-2 justify-center items-center bg-black text-white p-3 rounded-md shadow-lg my-3 ">
              <Github /> Login with GitHub
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
