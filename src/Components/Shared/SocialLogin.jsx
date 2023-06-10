import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // handleGoogleSignIn function
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser =
                {
                    name: loggedInUser.displayName,
                    email: loggedInUser.email
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        toast.success('Your Google Login Successful')
                    })
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