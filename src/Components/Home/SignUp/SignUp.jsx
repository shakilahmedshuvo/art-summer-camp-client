import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";

const SignUp = () => {
    return (
        <div
            className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% pt-5">
            <>
                <div>
                    <h2
                        className="text-4xl font-bold text-center">
                        Please Sign Up
                    </h2>
                    <p
                        className="text-lg font-bold text-center mt-2">
                        Sign Up here
                    </p>
                </div>
                <div className="font-bold pb-10" data-aos="zoom-out">
                    <div className="hero max-w-7xl mx-auto">
                        <div className="hero-content">
                            <div className="text-center lg:text-left">
                                <img
                                className="rounded-2xl"
                                    src="https://img.freepik.com/free-vector/online-registration-concept-with-flat-design_23-2147976704.jpg?w=740&t=st=1686155281~exp=1686155881~hmac=214dcfd415ed5642d511d27be665fce8cdd40546a5d1568e6ae645d07a833c31" alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h1
                                        className="text-center text-2xl py-1 text-indigo-600">
                                        ART SUMMER CAMP
                                    </h1>
                                    <hr className="border-b border-solid border-2" />
                                    {/* Registration form start */}
                                    <form>
                                        <div className="form-control">
                                            <label className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Name
                                                </span>
                                            </label>
                                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Email
                                                </span>
                                            </label>
                                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Password
                                                </span>
                                            </label>
                                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Photo URL
                                                </span>
                                            </label>
                                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />

                                            <label className="label mt-1">
                                                <small
                                                    className="text-neutral-700">
                                                    Already Have an Account?
                                                    <br />
                                                    Please<Link className="font-extrabold  text-indigo-600" to='/login'> Login</Link>
                                                </small>
                                            </label>
                                        </div>
                                        <div>
                                            <div className="divider">
                                                OR
                                            </div>
                                            <h2 className="text-center">
                                                Sign UP With Google
                                            </h2>
                                            {/* google login */}
                                            <div
                                                className="flex justify-center mx-auto items-center font-bold text-xl">
                                                <SocialLogin /> Google
                                            </div>
                                        </div>
                                        <div
                                            className="form-control mt-5">
                                            <button
                                                className="btn bg-indigo-900 text-white hover:text-black"
                                                type="submit">
                                                Registration
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default SignUp;