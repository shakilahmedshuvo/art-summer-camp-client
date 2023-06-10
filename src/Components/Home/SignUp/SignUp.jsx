import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Utilities/Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // on submit function
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    toast.success('successfully Register')
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    };
    return (
        <div
            className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-200 to-90% pt-28">
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
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}>
                                        <div
                                            className="form-control">
                                            <label
                                                className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Name
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name",
                                                    { required: true })
                                                }
                                                name="name"
                                                placeholder="Name"
                                                className="input input-bordered" />
                                            {
                                                errors.name &&
                                                <span className="text-red-600">
                                                    Name is required
                                                </span>
                                            }
                                        </div>
                                        <div
                                            className="form-control">
                                            <label
                                                className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Email
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email",
                                                    { required: true })
                                                }
                                                name="email"
                                                placeholder="email"
                                                className="input input-bordered" />
                                            {
                                                errors.email &&
                                                <span
                                                    className="text-red-600">
                                                    Email is required
                                                </span>
                                            }
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
                                                type="password"
                                                {...register("password",
                                                    {
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 20,
                                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                    })
                                                }
                                                placeholder="password"
                                                className="input input-bordered" />
                                            {
                                                errors.password?.type === 'required' &&
                                                <p
                                                    className="text-red-600">
                                                    Password is required
                                                </p>
                                            }
                                            {
                                                errors.password?.type === 'minLength' &&
                                                <p
                                                    className="text-red-600">
                                                    Password must be 6 characters
                                                </p>
                                            }
                                            {
                                                errors.password?.type === 'maxLength' &&
                                                <p
                                                    className="text-red-600">
                                                    Password must be less than 20 characters
                                                </p>
                                            }
                                            {
                                                errors.password?.type === 'pattern' &&
                                                <p
                                                    className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.
                                                </p>
                                            }
                                        </div>
                                        <div
                                            className="form-control">
                                            <label
                                                className="label">
                                                <span
                                                    className="label-text">
                                                    Enter Your Photo URL
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                {...register("photoURL",
                                                    { required: true })
                                                }
                                                placeholder="Photo URL"
                                                className="input input-bordered" />
                                            {
                                                errors.photoURL &&
                                                <span
                                                    className="text-red-600">
                                                    Photo URL is required
                                                </span>}
                                            <label
                                                className="label mt-1">
                                                <small
                                                    className="text-neutral-700">
                                                    Already Have an Account?
                                                    <br />
                                                    Please <Link
                                                        to='/login'
                                                        className="font-extrabold  text-indigo-600">
                                                        Login
                                                    </Link>
                                                </small>
                                            </label>
                                        </div>
                                        {/* divider */}
                                        <div>
                                            <div
                                                className="divider">
                                                OR
                                            </div>
                                            <h2
                                                className="text-center">
                                                Sign UP With Google
                                            </h2>
                                            {/* google login */}
                                            <div
                                                className="flex justify-center mx-auto items-center font-bold text-xl">
                                                <SocialLogin /> Google
                                            </div>
                                        </div>
                                        {/* submit btn */}
                                        <div
                                            className="form-control mt-6">
                                            <input
                                                className="btn bg-indigo-900 text-white hover:text-black"
                                                type="submit"
                                                value="Registration" />
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