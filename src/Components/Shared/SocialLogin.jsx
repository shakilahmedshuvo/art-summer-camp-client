import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
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