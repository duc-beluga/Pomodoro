import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="flex flex-col gap-3 border-2 p-3 rounded-lg shadow-lg w-96"
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
          />
          <input
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="p-3 border-2 rounded-md"
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
            <Link to="/login" className="underline">
              Log In
            </Link>
          </span>
          <Link to={"http://localhost:3000/auth/github"} className="border-t-2">
            <span className="flex gap-2 justify-center items-center bg-black text-white p-3 rounded-md shadow-lg my-3 ">
              <Github /> Login with GitHub
            </span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
