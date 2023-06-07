import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";

const Login = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% pt-3 pb-4">
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
                  <form>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Enter Your Email
                        </span>
                      </label>
                      <input name="email" type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Enter Your Password
                        </span>
                      </label>
                      <input name="password" type="password" placeholder="Password" className="input input-bordered" />
                      {/* sign in with google */}
                      <div className="mt-3 mb-2">
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
                      <label className="label mt-2">
                        <small
                          className="text-neutral-700">
                          Don't Have an Account?
                          <br />
                          New to Art Summer Camp? Please <Link className
                            ="font-extrabold text-indigo-600"
                            to='/signUp'>
                            Sign Up
                          </Link>
                        </small>
                      </label>
                    </div>
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