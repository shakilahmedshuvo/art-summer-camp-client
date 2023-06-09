import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                toast.success('Google Login Successful')
                console.log(loggedInUser);
            })
    }
    return (
        <span
            onClick={handleGoogleSignIn}
            className="text-4xl">
            <FcGoogle></FcGoogle>
        </span>
    );
};

export default SocialLogin;