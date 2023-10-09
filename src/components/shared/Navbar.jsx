import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/aboutus'>About Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-transparent absolute z-10">
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
                <Link to='/register' className="btn mr-3 font-bold text-green-950">Register</Link>
                <Link to='/login' className="btn bg-green-950 text-white font-semibold border-none">Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;