import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        setSuccess("");

        // Password Validation
        if (password.length < 6) {
            setError("Password Can't be less then 6 Characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError("Your Password Should Contain At Least One Uppercase Character");
            return;
        } else if (!/[a-z]/.test(password)) {
            setError("Your Password Should Contain At Least One Lowercase Character");
            return;
        } else if (!/[0-9]/.test(password)) {
            setError("Your Password Should Contain At Least One Numeric Character");
            return;
        } else if (!/[#?!@%&*-]/.test(password)) {
            setError("Your Password Should Contain At Least One Special Character");
            return;
        }

        signInUser(email, password)
            .then(() => {
                setSuccess('Signed In Successfully');
                toast.success('Signed In Successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message);
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess('Signed In Successfully');
                toast.success('Signed In Successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message);
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (

        <div className="py-3 px-3 md:px-0 container mx-auto space-y-3 md:space-y-5 flex flex-col items-center">
            <h3 className="text-center font-bold text-2xl md:text-5xl">Log In!</h3>
            <div className='h-1 w-20 mx-auto bg-green-950'></div>
            <form onSubmit={handleLogIn} className="md:w-2/3 lg:w-1/2 border border-gray-400 md:m-7  p-3 md:p-7 rounded-[32px]">
                
                <input className="w-full mt-1 mb-2 md:mb-5 border border-gray-400 py-2 px-3 rounded-full outline-none" type="email" name="email" placeholder="Your Email" required />

                
                <input className="w-full mt-1 border border-gray-400 py-2 px-3 rounded-full outline-none" type="password" name="password" placeholder="Type a Password" required />

                {error ? (
                    <div className="font-semibold text-red-600 mt-5">{error}</div>
                ) : (
                    <div className="font-semibold text-green-600 mt-5">{success}</div>
                )}

                <div className="mt-5">
                    <input className="mr-1" type="checkbox" name="terms" id="terms" required />
                    <label htmlFor="terms">Accept Our Terms and Conditions</label>
                </div>

                <button className="btn rounded-full w-full mt-5 bg-green-950 text-white font-semibold border-none">Register</button>

                <p className="text-center font-semibold text-lg my-1 md:my-3">Or,</p>

                <span onClick={handleGoogleSignIn} className="btn w-full rounded-full"><FcGoogle></FcGoogle>Continue With Google</span>
            </form>
            <p className="text-sm sm:text-base md:text-lg">New Here? Please <Link className="underline font-medium text-green-950" to="/register">Register</Link></p>
            <div className='h-1 w-40 mx-auto bg-green-950'></div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default LogIn;