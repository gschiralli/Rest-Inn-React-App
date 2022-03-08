import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" max-w-md my-0 mx-auto px-5">
      <h2 className=" text-2xl text-blue-400 font-semibold mt-12 mb-4 outline-black">
        Sign In
      </h2>
      <form>
        <div className=" space-y-2">
          <label className=" text-left block" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block"
            type="email"
            name="email"
            id="email"
          />
          <label className=" text-left block" htmlFor="password">
            Password
          </label>
          <input
            className=" w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block"
            type="password"
            name="password"
            id="password"
          />

          <p className=" text-blue-600">
            <Link to={"/"}> Forgot your password? </Link>
          </p>
        </div>
        <button
          type="submit"
          className=" bg-blue-400 text-white p-2 rounded-lg w-full mt-6 font-semibold text-md"
        >
          Sign In
        </button>
        <p className="mt-4 text-md">
          Dont have an account?{" "}
          <Link className=" underline text-blue-500" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
