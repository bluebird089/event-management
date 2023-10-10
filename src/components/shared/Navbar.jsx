import { Link, NavLink, useLocation } from "react-router-dom";
import defaultUser from "../../assets/Default_User.jpg"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiMenu } from "react-icons/hi";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

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
    }

    const navLink = <>
        <li>
            <NavLink className='text-white font-semibold hover:bg-black hover:bg-opacity-25 duration-300 py-1 px-2 rounded-full text-base' to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink className='text-white font-semibold hover:bg-black hover:bg-opacity-25 duration-300 py-1 px-2 rounded-full text-base' to='/aboutus'>
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink className='text-white font-semibold hover:bg-black hover:bg-opacity-25 duration-300 py-1 px-2 rounded-full text-base' to='/gallery'>
                Gallery
            </NavLink>
        </li>
    </>

    return (
        <div className="flex justify-center px-3 md:px-0">
            <div className={location?.pathname === "/" ? "bg-transparent absolute navbar z-10 container mx-auto" : "navbar z-10 container mx-auto"}>
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn p-2 btn-sm sm:btn-md bg-black bg-opacity-30 text-white mr-1 border-none lg:hidden">
                            <HiMenu></HiMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-950 w-40 rounded-box">
                            {navLink}
                        </ul>
                    </div>

                    <Link to='/' className="text-lg sm:text-2xl md:text-3xl font-semibold text-white">
                        <span className="bg-green-950 px-2 mr-[2px] font-semibold rounded-full">CORP</span><span className={location?.pathname !== '/' && "text-black"}>EVE.</span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 bg-green-950 p-3 rounded-full">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0}>
                            <div className="bg-green-950 flex items-center gap-1 md:gap-2 rounded-full duration-500">
                                {
                                    user?.email ? <h3 className="text-white ml-2 text-xs sm:text-base md:ml-3 font-semibold">{user.email}</h3> : <></>
                                }
                                <img className="rounded-full w-8  sm:w-12" src={user?.photoURL ? user.photoURL : `${defaultUser}`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] bg-black bg-opacity-30 w-28 sm:w-40 p-2 rounded-3xl sm:rounded-[30px] mt-2 space-y-2">
                            <li>
                                <Link to='/profile' className="btn btn-sm sm:btn-md bg-white bg-opacity-20 hover:bg-opacity-40 bg  mr-3 rounded-full font-bold text-white border border-white w-full">Profile</Link>
                            </li>
                            <div className="h-[1px] w-full bg-white"></div>
                            {
                                user ? (
                                    <button onClick={handleSignOut} to='/login' className="btn btn-sm sm:btn-md bg-green-950 text-white font-semibold border-none w-full rounded-full">Log Out</button>
                                ) : (<>
                                    <li>
                                        <Link to='/register' className="btn btn-sm sm:btn-md mr-3 font-bold text-green-950 w-full rounded-full">Register</Link>
                                    </li>
                                    <li>
                                        <Link to='/login' className="btn btn-sm sm:btn-md bg-green-950 hover:bg-[#071a07]  text-white font-semibold border-none w-full rounded-full">Log In</Link>
                                    </li>
                                </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer
                className='rounded-full'
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