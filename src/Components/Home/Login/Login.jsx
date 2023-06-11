import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Utilities/Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { userLogIn, auth } = useContext(AuthContext);
  // use location hook
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('')
  const from = location.state?.from?.pathname || '/';


  // handleUserLogin function
  const handleUserLogin = (event) => {
    // stop reloading
    event.preventDefault();
    // get the info form the field
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // userLogIn function
    userLogIn(email, password).then(result => {
      const logIn = result.user;
      navigate(from, { replace: true })
      // show the toast
      toast.success('Log in Successful')
    })
      .catch(error => {
        toast.error('Wrong Password')
        console.log(error);
      })
    // reset the from
    form.reset()
  }

  // show pass and hide pass
  const [show, setShow] = useState();

  return (
    <div
      className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% pt-28 pb-8">
      <>
        <div>
          <h2
            className="text-4xl font-bold text-center">
            Please Login
          </h2>
          <p
            className="text-lg font-bold text-center mt-2">
            Login Here
          </p>
        </div>
        <div className="font-bold">
          <div className="hero max-w-7xl mx-auto">
            <div className="hero-content">
              <div className="text-center w-[50%] lg:text-left">
                <img
                  className="rounded-2xl"
                  src="https://img.freepik.com/free-vector/website-maintenance-abstract-concept-vector-illustration-website-service-webpage-seo-maintenance-web-design-corporate-site-professional-support-security-analysis-update-abstract-metaphor_335657-2295.jpg?w=740&t=st=1686154803~exp=1686155403~hmac=2028b99228e672429f64e41d02ebb8766371455d3d21b77a1fcf9d9775dc9201"
                  alt="" />
              </div>
              <div
                className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1
                    className="text-center text-2xl pt-1 text-indigo-600">
                    ART SUMMER CAMP
                  </h1>
                  <hr className="border-b border-solid border-2" />
                  {/* login form start */}
                  <form
                    onSubmit={handleUserLogin}>
                    <div className="form-control">
                      <label
                        className="label">
                        <span
                          className="label-text">
                          Enter Your Email
                        </span>
                      </label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Enter Your Email"
                        className="input input-bordered"
                        required />
                    </div>
                    <div
                      className="form-control">
                      <label
                        className="label">
                        <span
                          className="label-text">
                          Enter Your Password
                        </span>
                      </label>
                      <input
                        name="password"
                        type={show ?
                          'text'
                          :
                          'password'
                        }
                        placeholder="Enter Your Password"
                        className="input input-bordered"
                        required />
                      {/* show or hide btn */}
                      <p
                        onClick={() => setShow(!show)}
                        className="relative bottom-9 left-60 md:left-64 text-3xl">
                        <small>
                          {
                            show ?
                              <span>
                                <FaEyeSlash />
                              </span>
                              :
                              <span>
                                <FaEye />
                              </span>
                          }
                        </small>
                      </p>
                      {/* sign in with google */}
                      <div
                        className="mt-3 mb-2">
                        <h5
                          className="text-center">
                          Login With Google
                        </h5>
                        {/* google login */}
                        <div
                          className="flex justify-center mx-auto items-center font-bold mt-4 text-xl">
                          <SocialLogin /> Google
                        </div>
                      </div>
                      <label
                        className="label mt-2">
                        <small
                          className="text-neutral-700">
                          Don't Have an Account?
                          <br />
                          New to Art Summer Camp? Please <Link
                            to='/signUp'
                            className="font-extrabold text-indigo-600">
                            Sign Up
                          </Link>
                        </small>
                      </label>
                    </div>
                    {/* submit btn */}
                    <div
                      className="form-control mt-6"
                      type="submit">
                      <button
                        className="btn bg-indigo-900 text-white hover:text-black">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div >
      </>
    </div>

  );
};

export default Login;