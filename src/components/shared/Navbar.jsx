import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../assets/Default_User.jpg"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successful', {
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
            .catch(error => {
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
            });
    })
}

const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/aboutus'>About Us</NavLink></li>
    <li><NavLink to='/gallery'>Gallery</NavLink></li>
</>

return (
    <div className="flex justify-center">
        <div className="navbar bg-transparent absolute z-10 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="text-3xl font-semibold text-white">
                    <span className="bg-green-950 px-2 mr-[2px] font-semibold rounded">CORP</span>EVE.
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <div className="bg-green-950 flex items-center gap-2 rounded-full duration-500">
                            {
                                user ? <h3 className="text-white ml-3 font-semibold">fsdfs@slajf.com</h3> : <></>
                            }
                            <img className="rounded-full w-12" src={user?.photoURL ? user.photoURL : `${defaultUser}`} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] bg-black bg-opacity-30 w-40 p-2 rounded-xl mt-2 space-y-2">
                        <li>
                            <Link to='/register' className="btn mr-3 font-bold text-green-950 w-full">Profile</Link>
                        </li>
                        <div className="h-[1px] w-full bg-white"></div>
                        {
                            user ? (
                                <button onClick={handleSignOut} to='/login' className="btn bg-green-950 text-white font-semibold border-none w-full">Log Out</button>
                            ) : (<>
                                <li>
                                    <Link to='/register' className="btn mr-3 font-bold text-green-950 w-full">Register</Link>
                                </li>
                                <li>
                                    <Link to='/login' className="btn bg-green-950 text-white font-semibold border-none w-full">Log In</Link>
                                </li>
                            </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
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

export default Navbar;