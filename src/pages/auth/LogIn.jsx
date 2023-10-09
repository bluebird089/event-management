import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {

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
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess('Signed In Successfully');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (

        <div className="py-20 container mx-auto space-y-10 flex flex-col items-center">
            <h3 className="text-center font-bold text-5xl">Log In!</h3>
            <div className='h-1 w-20 mx-auto bg-green-950'></div>
            <form onSubmit={handleLogIn} className="w-1/2 border border-gray-400 m-7 p-7 rounded-xl">

                <label htmlFor="email">Email</label>
                <input className="w-full mt-1 mb-5 border border-gray-400 py-2 px-3 rounded-lg outline-none" type="email" name="email" placeholder="Your Email" required />

                <label htmlFor="password">Password</label>
                <input className="w-full mt-1 border border-gray-400 py-2 px-3 rounded-lg outline-none" type="password" name="password" placeholder="Type a Password" required />

                {error ? (
                    <div className="font-semibold text-red-600 mt-5">{error}</div>
                ) : (
                    <div className="font-semibold text-green-600 mt-5">{success}</div>
                )}

                <button className="btn w-full mt-5 bg-green-950 text-white font-semibold border-none">Log In</button>

                <p className="text-center font-semibold text-lg my-3">Or,</p>

                <span onClick={handleGoogleSignIn} className="btn w-full"><FcGoogle></FcGoogle>Continue With Google</span>
            </form>
            <p className="text-lg">Already Have an Account? Please <Link className="underline font-medium text-green-950" to="/register">Register</Link></p>
            <div className='h-1 w-40 mx-auto bg-green-950'></div>
        </div>
    );
};

export default LogIn;