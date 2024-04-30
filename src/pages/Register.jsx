import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialMediaLogin from "../components/SocialMediaLogin.jsx/SocialMediaLogin";
import useAuth from "../components/Hooks/UseAuth";
import AwesomeReveal from "../components/AwesomeReveal/AwesomeReveal";
const Register = () => {
  const { createUser } = useAuth();
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);
  //   const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(email, password, name, photoURL);

    const acceptTerms = e.target.terms.checked;
    // password validation
    if (password.length < 6) {
      setRegError("Password should be at least 6 charecters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Must have an Uppercase letter in the password.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegError("Must have a Lowercase letter in the password");
      return;
    } else if (!acceptTerms) {
      setRegError("Please accept our terms and conditions!");
      return;
    }

    setRegError("");
    setRegSuccess("");

    // user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        result.user;

        setRegSuccess("Registration Completed");
        // new user
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt };
        fetch("https://prctice-1.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Welcome",
                text: "Thanks for joining us!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
            console.log(data);
          });
      })
      .catch((error) => {
        console.error(error);

        setRegError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Welcome to our community! We're thrilled that you've chosen to join
            us. By registering with us, you've taken the first step towards
            accessing a world of exciting opportunities and resources. Whether
            you're here to connect with like-minded individuals, explore new
            ideas, or discover unique experiences
          </p>
          <AwesomeReveal></AwesomeReveal>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="text-center ">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          {/* social media */}
          <div>
            <SocialMediaLogin></SocialMediaLogin>
          </div>
          <p className="text-sm bg-white rounded-lg py-2  text-center sm:px-6 text-gray-600">
            Already have an account?
            <Link to="/login">
              <a
                rel="noopener noreferrer"
                href="#"
                className="underline font-semibold ml-1 text-red-600"
              >
                Login
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
