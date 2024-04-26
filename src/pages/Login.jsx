import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../components/Hooks/UseAuth";
import { useState } from "react";
import SocialMediaLogin from "../components/SocialMediaLogin.jsx/SocialMediaLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("thi is", location);
  //

  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    //

    setRegError("");
    setRegSuccess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        setRegSuccess("Logged In");
        console.log();

        // navigating
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setRegError(error.errorMessage);
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered w-full"
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-4"
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="mb-2">
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2 underline" htmlFor="terms">
            Terms and Conditions
          </label>
        </div>
        {regError && <p className="text-red-700">{regError}</p>}
        {regSuccess && (
          <div>
            <span>
              <p className="text-green-700">{regSuccess}</p>
            </span>
            <span>
              <Link to="/">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="underline font-semibold ml-1 text-violet-600 "
                >
                  Go Home To Explore
                </a>
              </Link>
            </span>
          </div>
        )}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      {/* social media */}
      <div>
        <SocialMediaLogin></SocialMediaLogin>
      </div>
      <p className="text-sm bg-white rounded-lg py-2  text-center sm:px-6 dark:text-gray-600">
        Don't have an account?
        <Link to="/register">
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline font-semibold ml-1 text-red-500 dark:text-gray-800"
          >
            Register/Sign up
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Login;
